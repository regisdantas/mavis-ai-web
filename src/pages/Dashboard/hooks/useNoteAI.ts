import { useState } from 'react'
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

  const handleAI = async () => {
    if (!userId) {
      alert('User not authenticated')
      return
    }

    let apiKey = await getOpenAIKey(userId)

    if (!apiKey) {
      apiKey =
        window.prompt('OpenAI API Key not configured.\n\nEnter your OpenAI API Key:')?.trim() || ''

      if (!apiKey) {
        return
      }

      await saveOpenAIKey(userId, apiKey)
    }

    const userInstruction = window.prompt(
      'Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese'
    )

    if (!userInstruction?.trim()) {
      return
    }

    setAiLoading(true)

    try {
      pushHistory(value)

      const textarea = textareaRef.current

      if (textarea && textarea.selectionStart !== textarea.selectionEnd) {
        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        const selectedText = value.substring(start, end)

        const result = await executeAI(
          userId,
          systemPrompt,
          userInstruction,
          selectedText,
          'gpt-5.6-luna',
          apiKey
        )

        const updated = value.substring(0, start) + result.output_text.trim() + value.substring(end)

        onContentChange(updated)

        return
      }

      const result = await executeAI(
        userId,
        systemPrompt,
        userInstruction,
        value,
        'gpt-5.6-luna',
        apiKey
      )

      const updated = `${value}\n\n${result.output_text.trim()}`

      onContentChange(updated)
    } catch (error) {
      console.error(error)

      alert(error instanceof Error ? error.message : 'AI request failed')
    } finally {
      setAiLoading(false)
    }
  }

  return {
    aiLoading,
    handleAI,
  }
}
