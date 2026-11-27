import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Chat } from './Chat'
import { useChatAi } from '../context/ChatAiContext'
import { ChatMessage } from '../types/chat'

jest.mock('../context/ChatAiContext', () => ({
  useChatAi: jest.fn(),
}))

jest.mock('react-markdown', () => {
  const ReactRuntime = jest.requireActual('react')

  return {
    __esModule: true,
    default: ({
      children,
      components,
    }: {
      children: string
      components?: {
        table?: (props: { node: unknown; children: React.ReactNode }) => React.ReactNode
      }
    }) => {
      if (children !== 'Markdown table fixture' || !components?.table) {
        return children
      }

      const headerCells = ['First', 'Second', 'Third', 'Fourth'].map((label) =>
        ReactRuntime.createElement('th', { key: label }, label)
      )

      return components.table({
        node: null,
        children: ReactRuntime.createElement(
          'tbody',
          null,
          ReactRuntime.createElement('tr', null, ...headerCells)
        ),
      })
    },
  }
})

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
  toggleSessionPin: jest.fn(async () => {}),
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
  it('shows Mavis in the empty conversation state', () => {
    mockUseChatAi.mockReturnValue(makeChatAiValue([]))

    render(
      <Chat
        uid="user-id"
        selectedNotesText=""
        noteTitles={[]}
        notesCount={0}
        clearSelectedNotes={jest.fn()}
      />
    )

    expect(screen.getByText("Hi, I'm Mavis.")).toBeTruthy()
  })

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

  it('prevents horizontal scrolling in Markdown quotes and code blocks', () => {
    mockUseChatAi.mockReturnValue(
      makeChatAiValue([{ id: 'assistant-1', role: 'assistant', content: 'Markdown style fixture' }])
    )

    const props = {
      uid: 'user-id',
      selectedNotesText: '',
      noteTitles: [],
      notesCount: 0,
      clearSelectedNotes: jest.fn(),
    }
    const { getByText } = render(<Chat {...props} />)
    const bubble = getByText('Markdown style fixture')
    const quote = document.createElement('blockquote')
    const codeBlock = document.createElement('pre')

    bubble.append(quote, codeBlock)

    expect(window.getComputedStyle(quote).overflowX).toBe('hidden')
    expect(window.getComputedStyle(quote).overflowWrap).toBe('anywhere')
    expect(window.getComputedStyle(codeBlock).overflowX).toBe('hidden')
    expect(window.getComputedStyle(codeBlock).whiteSpace).toBe('pre-wrap')
    expect(window.getComputedStyle(codeBlock).overflowWrap).toBe('anywhere')
  })

  it('uses content-sized columns inside a scrollable table wrapper', () => {
    mockUseChatAi.mockReturnValue(
      makeChatAiValue([
        { id: 'assistant-table', role: 'assistant', content: 'Markdown table fixture' },
      ])
    )

    const props = {
      uid: 'user-id',
      selectedNotesText: '',
      noteTitles: [],
      notesCount: 0,
      clearSelectedNotes: jest.fn(),
    }
    render(<Chat {...props} />)

    const table = screen.getByRole('table')
    const scrollWrapper = table.parentElement as HTMLElement
    const headerCell = table.querySelector('th') as HTMLElement

    expect(window.getComputedStyle(scrollWrapper).overflowX).toBe('auto')
    expect(window.getComputedStyle(table).tableLayout).toBe('auto')
    expect(window.getComputedStyle(headerCell).minWidth).toBe('8rem')
    expect(window.getComputedStyle(headerCell).overflowWrap).toBe('anywhere')
  })
})
