import React from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { FiSend, FiCopy, FiTrash2 } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'
import { executeAI } from '../../../services/aiService'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface MavisChatProps {
  uid: string
  text: string
  noteTitles: string[]
  notesCount: number
}

export const MavisChat: React.FC<MavisChatProps> = ({ uid, text, noteTitles, notesCount }) => {
  const [prompt, setPrompt] = React.useState('')
  const [systemPrompt, setSystemPrompt] = React.useState('')
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: uuid(),
      role: 'assistant',
      content:
        "I'm MAVIS - Multi-Agent Autonomous Virtual Intelligence System. How can I help you?",
    },
  ])
  const [isLoading, setIsLoading] = React.useState(false)

  const handleCopyInput = async () => {
    if (!prompt.trim()) {
      return
    }

    await navigator.clipboard.writeText(prompt)
  }

  const handleClearInput = () => {
    setPrompt('')
  }

  const handleSendPrompt = async () => {
    const userInstruction = prompt.trim()

    if (!userInstruction || isLoading) {
      return
    }

    if (!uid) {
      setMessages((old) => [
        ...old,
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

    const userMessage: ChatMessage = {
      id: uuid(),
      role: 'user',
      content: `${titlesSection}${userInstruction}`,
    }

    setMessages((old) => [...old, userMessage])
    setPrompt('')
    setIsLoading(true)

    try {
      const result = await executeAI(uid, systemPrompt, userInstruction, text)

      const assistantMessage: ChatMessage = {
        id: uuid(),
        role: 'assistant',
        content: result || 'No response was returned.',
      }

      setMessages((old) => [...old, assistantMessage])
    } catch (error) {
      console.error('Mavis error:', error)

      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.'

      const assistantMessage: ChatMessage = {
        id: uuid(),
        role: 'assistant',
        content: errorMessage,
      }

      setMessages((old) => [...old, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ChatContainer>
      <ChatHistory>
        {messages.map((message) => (
          <ChatMessageBubble key={message.id} role={message.role}>
            {message.content}
          </ChatMessageBubble>
        ))}

        {isLoading && <ChatMessageBubble role="assistant">Thinking...</ChatMessageBubble>}
      </ChatHistory>

      <ChatInputArea>
        <ChatInputContainer>
          <ChatInputHeader>Selected Notes: {notesCount}</ChatInputHeader>
          <ChatTextarea
            value={prompt}
            placeholder="Ask Mavis..."
            disabled={isLoading}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                void handleSendPrompt()
              }
            }}
          />
        </ChatInputContainer>

        <ChatActions>
          <IconButton
            onClick={() => void handleSendPrompt()}
            disabled={isLoading || !prompt.trim()}
          >
            <FiSend />
          </IconButton>

          <IconButton onClick={() => void handleCopyInput()} disabled={!prompt.trim()}>
            <FiCopy />
          </IconButton>

          <IconButton onClick={handleClearInput} disabled={!prompt.trim()}>
            <FiTrash2 />
          </IconButton>
        </ChatActions>
      </ChatInputArea>
    </ChatContainer>
  )
}

const ChatInputHeader = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
`

const ChatActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ChatHistory = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ChatMessageBubble = styled.div<{ role: string }>`
  max-width: 90%;
  padding: 10px 14px;
  border-radius: 12px;

  white-space: pre-wrap;
  word-break: break-word;

  align-self: ${({ role }) => (role === 'user' ? 'flex-end' : 'flex-start')};

  background: ${({ role }) => (role === 'user' ? '#2563eb' : '#f5f5f5')};

  color: ${({ role }) => (role === 'user' ? '#fff' : '#222')};
`

const ChatInputArea = styled.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  background: #e0e0e5;
`

const ChatInputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: #e0e0e5;
`

const ChatTextarea = styled.textarea`
  resize: none;
  min-height: 80px;
  max-height: 200px;
  width: 100%;

  border: 1px solid #ccc;
  border-radius: 8px;

  padding: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`
