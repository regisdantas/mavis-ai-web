import { useRef, useState } from 'react'
import { executeAI } from '../../../services/aiService'
import { getOpenAIKey, saveOpenAIKey } from '../../../services/openAIKeyService'

interface UseNoteAIProps {
  userId?: string
  getNoteContext: () => NoteAIContext | null
  onContentChange: (entryId: string, newText: string) => Promise<void>
}

export interface NoteAIContext {
  entryId: string
  value: string
  textarea: HTMLTextAreaElement | null
}

export interface NoteAIControls {
  aiLoading: boolean
  assistantOpen: boolean
  instruction: string
  setInstruction: (instruction: string) => void
  apiKeyInput: string
  setApiKeyInput: (apiKey: string) => void
  requiresApiKey: boolean
  error: string
  openAssistant: () => Promise<void>
  closeAssistant: () => void
  clearInstruction: () => void
  submitInstruction: () => Promise<void>
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
  getNoteContext,
  onContentChange,
}: UseNoteAIProps): NoteAIControls {
  const [aiLoading, setAiLoading] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [instruction, setInstruction] = useState('')
  const [apiKeyInput, setApiKeyInput] = useState('')
  const [requiresApiKey, setRequiresApiKey] = useState(false)
  const [error, setError] = useState('')
  const noteDraftRef = useRef<{
    entryId: string | null
    value: string
    selectionStart: number | null
    selectionEnd: number | null
  }>({
    entryId: null,
    value: '',
    selectionStart: null,
    selectionEnd: null,
  })

  const openAssistant = async () => {
    const noteContext = getNoteContext()
    const textarea = noteContext?.textarea
    const noteText = textarea?.value ?? noteContext?.value ?? ''
    const selectionStart = textarea?.selectionStart ?? null
    const selectionEnd = textarea?.selectionEnd ?? null

    noteDraftRef.current = {
      entryId: noteContext?.entryId ?? null,
      value: noteText,
      selectionStart,
      selectionEnd,
    }

    setAssistantOpen(true)
    setInstruction('')
    setApiKeyInput('')
    setError('')

    if (!noteContext) {
      setRequiresApiKey(false)
      setError('Select a note or start editing a note to use the AI assistant.')
      return
    }

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

    const { entryId, value: noteText, selectionStart, selectionEnd } = noteDraftRef.current

    if (!entryId) {
      setError('Select a note or start editing a note to use the AI assistant.')
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
        await onContentChange(entryId, updated)
      } else {
        const result = await executeAI(
          userId,
          systemPrompt,
          userInstruction,
          noteText,
          'gpt-6-luna',
          apiKey
        )

        await onContentChange(entryId, `${noteText}\n\n${result.output_text.trim()}`)
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
