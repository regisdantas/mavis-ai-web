import { useRef, useState } from 'react'
import { executeAI } from '../../../services/aiService'
import { getOpenAIKey, saveOpenAIKey } from '../../../services/openAIKeyService'

interface UseNoteAIProps {
  userId?: string
  value: string
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  pushHistory: (text: string) => void
  onContentChange: (newText: string) => void
}

const systemPrompt = `You are a text editor assistant.

Execute the user's instruction on the provided text.

Rules:

- Return only the resulting text.
- Do not explain anything.
- Do not add introductions.
- Do not add conclusions.
- Do not add notes.
- Preserve formatting whenever possible.
- Keep the EXACT SAME language used in the original text.
- Never translate unless the instruction explicitly requests translation.
- Ignore previous requests, conversation history, context, memory, and earlier instructions.
- Treat this request as a completely isolated session.
- Use only:
  1. the instruction below
  2. the provided text
- Do not use information from previous requests.
- Do not carry context across requests.
- Always use markdown.
- If the code contains commands (@cmd or /cmd), keep them. Use them.
`

export function useNoteAI({
  userId,
  value,
  textareaRef,
  pushHistory,
  onContentChange,
}: UseNoteAIProps) {
  const [aiLoading, setAiLoading] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [instruction, setInstruction] = useState('')
  const [apiKeyInput, setApiKeyInput] = useState('')
  const [requiresApiKey, setRequiresApiKey] = useState(false)
  const [error, setError] = useState('')
  const noteDraftRef = useRef<{
    value: string
    selectionStart: number | null
    selectionEnd: number | null
  }>({
    value,
    selectionStart: null,
    selectionEnd: null,
  })

  const openAssistant = async () => {
    const textarea = textareaRef.current
    const noteText = textarea?.value ?? value
    const selectionStart = textarea?.selectionStart ?? null
    const selectionEnd = textarea?.selectionEnd ?? null

    noteDraftRef.current = {
      value: noteText,
      selectionStart,
      selectionEnd,
    }

    setAssistantOpen(true)
    setInstruction('')
    setApiKeyInput('')
    setError('')

    if (!userId) {
      setRequiresApiKey(false)
      setError('Sign in to use the AI assistant.')
      return
    }

    try {
      const apiKey = await getOpenAIKey(userId)
      setRequiresApiKey(!apiKey)
    } catch (loadError) {
      console.error('Failed to load the OpenAI API key.', loadError)
      setRequiresApiKey(true)
      setError('Could not load the saved API key. Enter it again to continue.')
    }
  }

  const closeAssistant = () => {
    setAssistantOpen(false)
    setInstruction('')
    setApiKeyInput('')
    setError('')
  }

  const clearInstruction = () => {
    setInstruction('')
    setError('')
  }

  const submitInstruction = async () => {
    if (aiLoading) {
      return
    }

    const userInstruction = instruction.trim()

    if (!userInstruction) {
      setError('Enter an instruction for the note.')
      return
    }

    if (!userId) {
      setError('Sign in to use the AI assistant.')
      return
    }

    setAiLoading(true)
    setError('')

    try {
      let apiKey: string

      if (requiresApiKey) {
        apiKey = apiKeyInput.trim()

        if (!apiKey) {
          setError('Enter your OpenAI API key.')
          return
        }

        await saveOpenAIKey(userId, apiKey)
        setRequiresApiKey(false)
        setApiKeyInput('')
      } else {
        apiKey = await getOpenAIKey(userId)
      }

      const { value: noteText, selectionStart, selectionEnd } = noteDraftRef.current
      pushHistory(noteText)

      if (selectionStart !== null && selectionEnd !== null && selectionStart !== selectionEnd) {
        const selectedText = noteText.substring(selectionStart, selectionEnd)

        const result = await executeAI(
          userId,
          systemPrompt,
          userInstruction,
          selectedText,
          'gpt-6-luna',
          apiKey
        )

        const updated =
          noteText.substring(0, selectionStart) +
          result.output_text.trim() +
          noteText.substring(selectionEnd)
        onContentChange(updated)
      } else {
        const result = await executeAI(
          userId,
          systemPrompt,
          userInstruction,
          noteText,
          'gpt-6-luna',
          apiKey
        )

        onContentChange(`${noteText}\n\n${result.output_text.trim()}`)
      }

      closeAssistant()
    } catch (requestError) {
      console.error('AI note request failed.', requestError)
      setError(requestError instanceof Error ? requestError.message : 'AI request failed.')
    } finally {
      setAiLoading(false)
    }
  }

  return {
    aiLoading,
    assistantOpen,
    instruction,
    setInstruction,
    apiKeyInput,
    setApiKeyInput,
    requiresApiKey,
    error,
    openAssistant,
    closeAssistant,
    clearInstruction,
    submitInstruction,
  }
}
