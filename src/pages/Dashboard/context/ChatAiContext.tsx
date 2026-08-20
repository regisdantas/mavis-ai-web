import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react'
import uuid from 'react-uuid'
import { executeAI } from '../../../services/aiService'
import { useChatSessions } from '../hooks/useChatSessions'
import { ChatMessage, ChatSession } from '../types/chat'
import { IEntry } from '../hooks/useEntries'

export interface ChatAiProviderProps {
  children: ReactNode
  uid: string
  selectedNotesText: string
  noteTitles: string[]
  clearSelectedNotes: () => void
  entries: IEntry[]
}

const ChatAiContext = createContext<ChatAiContextValue | undefined>(undefined)

const unchangedSystemPrompt = `You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.`

const useChatAiState = ({
  uid,
  selectedNotesText,
  noteTitles,
  clearSelectedNotes,
  entries,
}: Omit<ChatAiProviderProps, 'children'>) => {
  const [prompt, setPrompt] = useState('')
  const [selectedPromptIds, setSelectedPromptIds] = useState<string[]>([])
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const { sessions, fetchSessions, createSession, updateSession, deleteSession } =
    useChatSessions(uid)
  const [sessionsLoaded, setSessionsLoaded] = useState(false)
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState('gpt-5.6-luna')
  const [includeHistory, setIncludeHistory] = useState(true)

  const getHistory = useCallback((currentMessages: ChatMessage[]) => {
    return currentMessages
      .map((message) => `${message.role === 'user' ? 'User' : 'Assistant'}: ${message.content}`)
      .join('\n')
  }, [])

  const createNewSession = useCallback(async () => {
    const session = await createSession(selectedModel)

    if (!session) {
      return
    }

    setSelectedPromptIds([])
    setCurrentSessionId(session.id)
    setMessages([])
  }, [createSession, selectedModel])

  useEffect(() => {
    if (!sessionsLoaded) {
      return
    }

    if (sessions.length > 0) {
      return
    }

    void createNewSession()
  }, [sessionsLoaded, sessions, createNewSession])

  useEffect(() => {
    const load = async () => {
      await fetchSessions()
      setSessionsLoaded(true)
    }

    void load()
  }, [fetchSessions])

  const togglePrompt = useCallback(
    async (promptId: string) => {
      if (!currentSessionId) {
        return
      }

      const currentSession = sessions.find((s) => s.id === currentSessionId)

      if (!currentSession) {
        return
      }

      const updatedPromptIds = selectedPromptIds.includes(promptId)
        ? selectedPromptIds.filter((id) => id !== promptId)
        : [...selectedPromptIds, promptId]

      setSelectedPromptIds(updatedPromptIds)

      await updateSession({
        ...currentSession,
        selectedPromptIds: updatedPromptIds,
        updatedAt: new Date().toISOString(),
      })
    },
    [currentSessionId, selectedPromptIds, sessions, updateSession]
  )

  const selectedPromptText = useMemo(() => {
    return entries
      .filter((entry) => selectedPromptIds.includes(entry.id))
      .map((entry) => {
        try {
          const content = JSON.parse(entry.content)

          return content.text || ''
        } catch {
          return ''
        }
      })
      .join('\n\n')
  }, [entries, selectedPromptIds])

  const loadSession = useCallback(
    (sessionId: string) => {
      const session = sessions.find((s) => s.id === sessionId)

      if (!session) {
        return
      }
      setSelectedPromptIds(session.selectedPromptIds || [])
      setCurrentSessionId(sessionId)
      setMessages(session.messages)
      setSelectedModel(session.model)
    },
    [sessions]
  )

  useEffect(() => {
    if (sessions.length === 0) {
      return
    }

    if (currentSessionId) {
      return
    }

    loadSession(sessions[0].id)
  }, [sessions, currentSessionId, loadSession])

  const availablePromptNotes = useMemo(() => {
    return entries
      .filter((entry) => {
        try {
          const content = JSON.parse(entry.content)

          return (content.tags || []).includes('prompts')
        } catch {
          return false
        }
      })
      .map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          id: entry.id,
          title: content.title || 'Untitled Prompt',
        }
      })
  }, [entries])

  const sendPrompt = useCallback(async () => {
    const userInstruction = prompt.trim()

    if (!userInstruction || isLoading) {
      return
    }

    if (!uid) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: uuid(),
          role: 'assistant',
          content: 'You must be logged in to use Mavis.',
        },
      ])

      return
    }

    const titlesSection =
      noteTitles.length > 0
        ? `Notes:\n${noteTitles.map((title) => `• ${title}`).join('\n')}\n\n`
        : ''

    const history = getHistory(messages)

    const userMessage: ChatMessage = {
      id: uuid(),
      role: 'user',
      content: `${titlesSection}${userInstruction}`,
    }

    setMessages((currentMessages) => {
      const updatedMessages = [...currentMessages, userMessage]

      const currentSession = sessions.find((session) => session.id === currentSessionId)

      if (currentSession) {
        void updateSession({
          ...currentSession,
          messages: updatedMessages,
          updatedAt: new Date().toISOString(),
          title:
            currentSession.title === 'New Chat'
              ? userInstruction.substring(0, 30)
              : currentSession.title,
        })
      }

      return updatedMessages
    })
    setPrompt('')
    setIsLoading(true)

    const contextSections: string[] = []

    if (includeHistory && history) {
      contextSections.push(`History:\n${history}`)
    }

    if (selectedNotesText.trim()) {
      contextSections.push(`Context:\n${selectedNotesText}`)
    }

    const context = contextSections.join('\n\n')

    try {
      const promptSections = [unchangedSystemPrompt, selectedPromptText].filter(Boolean)

      const result = await executeAI(
        uid,
        promptSections.join('\n\n'),
        userInstruction,
        context,
        selectedModel
      )

      const assistantMessage: ChatMessage = {
        id: uuid(),
        role: 'assistant',
        content: result.output_text.trim() || 'No response was returned.',
        tokens: {
          input: result.usage?.input_tokens || 0,
          output: result.usage?.output_tokens || 0,
        },
      }

      setMessages((currentMessages) => {
        const updatedMessages = [...currentMessages, assistantMessage]

        const currentSession = sessions.find((session) => session.id === currentSessionId)

        if (currentSession) {
          void updateSession({
            ...currentSession,
            messages: updatedMessages,
            updatedAt: new Date().toISOString(),
            title:
              currentSession.title === 'New Chat'
                ? userInstruction.substring(0, 30)
                : currentSession.title,
          })
        }

        return updatedMessages
      })

      clearSelectedNotes()
    } catch (error) {
      console.error('Mavis error:', error)

      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.'

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: uuid(),
          role: 'assistant',
          content: errorMessage,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [
    prompt,
    isLoading,
    uid,
    noteTitles,
    selectedNotesText,
    selectedModel,
    messages,
    includeHistory,
    getHistory,
    clearSelectedNotes,
    sessions,
    currentSessionId,
    updateSession,
    selectedPromptText,
  ])

  const summarizeHistory = useCallback(async () => {
    if (isLoading || messages.length === 0) {
      return
    }

    if (!uid) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: uuid(),
          role: 'assistant',
          content: 'You must be logged in to use Mavis.',
        },
      ])

      return
    }

    const history = getHistory(messages)

    const summaryPrompt = `Summarize the entire conversation history into one comprehensive, self-contained message.

Include all important information from the conversation, especially:

- Every requirement and specification
- Every decision that was made
- Every implementation detail
- Every instruction and constraint
- Important facts, dates, names, titles, values, and references
- Code-related decisions, expected behavior, and affected files or components
- Problems, errors, solutions, and changes that were discussed
- Rejected alternatives and the reasons they were rejected
- Open questions, unresolved issues, assumptions, and pending tasks
- The current state of the work
- Clear next steps, if any

Preserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.

Write the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.`

    setIsLoading(true)

    try {
      const result = await executeAI(
        uid,
        `${unchangedSystemPrompt}\n\n${selectedPromptText}`,
        summaryPrompt,
        `Conversation history:\n${history}`,
        selectedModel
      )

      const summaryMessage: ChatMessage = {
        id: uuid(),
        role: 'assistant',
        content: result.output_text.trim() || 'No summary was returned.',
        tokens: {
          input: result.usage?.input_tokens || 0,
          output: result.usage?.output_tokens || 0,
        },
      }

      setMessages([summaryMessage])
      const currentSession = sessions.find((session) => session.id === currentSessionId)

      if (currentSession) {
        await updateSession({
          ...currentSession,
          messages: [summaryMessage],
          updatedAt: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error('Mavis summary error:', error)

      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.'

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: uuid(),
          role: 'assistant',
          content: errorMessage,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [
    isLoading,
    messages,
    uid,
    getHistory,
    selectedModel,
    currentSessionId,
    sessions,
    updateSession,
    selectedPromptText,
  ])

  const deleteMessage = useCallback(
    async (messageId: string) => {
      if (!currentSessionId) {
        return
      }

      const currentSession = sessions.find((session) => session.id === currentSessionId)

      if (!currentSession) {
        return
      }

      const updatedMessages =
        messageId === 'all'
          ? []
          : currentSession.messages.filter((message) => message.id !== messageId)

      setMessages(updatedMessages)

      await updateSession({
        ...currentSession,
        messages: updatedMessages,
        updatedAt: new Date().toISOString(),
      })
    },
    [currentSessionId, sessions, updateSession]
  )

  const clearMessages = useCallback(async () => {
    if (!currentSessionId) {
      return
    }

    const currentSession = sessions.find((session) => session.id === currentSessionId)

    if (!currentSession) {
      return
    }

    setMessages([])

    await updateSession({
      ...currentSession,
      messages: [],
      updatedAt: new Date().toISOString(),
    })
  }, [currentSessionId, sessions, updateSession])

  const removeSession = useCallback(
    async (sessionId: string) => {
      await deleteSession(sessionId)

      if (currentSessionId === sessionId) {
        const remainingSessions = sessions.filter((session) => session.id !== sessionId)

        if (remainingSessions.length > 0) {
          loadSession(remainingSessions[0].id)
        } else {
          await createNewSession()
        }
      }
    },
    [deleteSession, currentSessionId, sessions, loadSession, createNewSession]
  )

  return {
    prompt,
    setPrompt,

    selectedPromptIds,
    togglePrompt,
    availablePromptNotes,

    messages,
    isLoading,

    sessions,
    currentSessionId,
    createNewSession,
    loadSession,
    deleteSession,
    removeSession,

    sendPrompt,
    deleteMessage,
    clearMessages,
    summarizeHistory,

    selectedModel,
    setSelectedModel,

    includeHistory,
    setIncludeHistory,
  }
}

type ChatAiContextValue = ReturnType<typeof useChatAiState>

export function ChatAiProvider({
  children,
  uid,
  selectedNotesText,
  noteTitles,
  clearSelectedNotes,
  entries,
}: ChatAiProviderProps) {
  const value = useChatAiState({
    uid,
    selectedNotesText,
    noteTitles,
    clearSelectedNotes,
    entries,
  })

  return <ChatAiContext.Provider value={value}>{children}</ChatAiContext.Provider>
}

export function useChatAi() {
  const context = useContext(ChatAiContext)

  if (!context) {
    throw new Error('useChatAi must be used inside a ChatAiProvider')
  }

  return context
}
