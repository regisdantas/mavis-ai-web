import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Chat } from './Chat'
import { useChatAi } from '../context/ChatAiContext'
import { ChatMessage } from '../types/chat'

jest.mock('../context/ChatAiContext', () => ({
  useChatAi: jest.fn(),
}))

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: string }) => children,
}))

jest.mock('remark-gfm', () => jest.fn())

const mockUseChatAi = useChatAi as jest.MockedFunction<typeof useChatAi>

const makeChatAiValue = (messages: ChatMessage[]) => ({
  prompt: '',
  setPrompt: jest.fn(),
  selectedPromptIds: [] as string[],
  togglePrompt: jest.fn(async () => {}),
  availablePromptNotes: [],
  messages,
  isLoading: false,
  sessions: [],
  currentSessionId: null,
  createNewSession: jest.fn(async () => {}),
  loadSession: jest.fn(async () => {}),
  deleteSession: jest.fn(async () => {}),
  removeSession: jest.fn(async () => {}),
  sendPrompt: jest.fn(async () => {}),
  deleteMessage: jest.fn(),
  clearMessages: jest.fn(),
  summarizeHistory: jest.fn(async () => {}),
  selectedModel: 'gpt-6-luna',
  setSelectedModel: jest.fn(),
  includeHistory: true,
  setIncludeHistory: jest.fn(),
})

describe('Chat', () => {
  it('shows message minimap items and scrolls to the bottom when a message arrives', () => {
    const initialMessages: ChatMessage[] = [{ id: 'user-1', role: 'user', content: 'Hello' }]
    mockUseChatAi.mockReturnValue(makeChatAiValue(initialMessages))

    const props = {
      uid: 'user-id',
      selectedNotesText: '',
      noteTitles: [],
      notesCount: 0,
      clearSelectedNotes: jest.fn(),
    }
    const { rerender } = render(<Chat {...props} />)
    const chatHistory = screen.getByRole('log', { name: 'Chat messages' }) as HTMLDivElement
    const minimap = screen.getByRole('group', { name: 'Chat message minimap' }) as HTMLDivElement

    Object.defineProperties(chatHistory, {
      scrollHeight: { configurable: true, value: 1000 },
      clientHeight: { configurable: true, value: 300 },
    })
    Object.defineProperties(minimap, {
      scrollHeight: { configurable: true, value: 1000 },
      clientHeight: { configurable: true, value: 200 },
    })

    const newMessages: ChatMessage[] = [
      ...initialMessages,
      { id: 'assistant-1', role: 'assistant', content: 'Hello back' },
    ]
    mockUseChatAi.mockReturnValue(makeChatAiValue(newMessages))
    rerender(<Chat {...props} />)

    expect(screen.getByLabelText('Go to user message 1')).toBeTruthy()
    expect(screen.getByLabelText('Go to assistant message 2')).toBeTruthy()
    expect(chatHistory.scrollTop).toBe(700)

    chatHistory.scrollTop = 350
    fireEvent.scroll(chatHistory)

    expect(minimap.scrollTop).toBe(400)
  })
})
