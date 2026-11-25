import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useNoteAI } from './useNoteAI'

const mockExecuteAI = jest.fn()
const mockGetOpenAIKey = jest.fn()
const mockSaveOpenAIKey = jest.fn()

jest.mock('../../../services/aiService', () => ({
  executeAI: (...args: unknown[]) => mockExecuteAI(...args),
}))

jest.mock('../../../services/openAIKeyService', () => ({
  getOpenAIKey: (...args: unknown[]) => mockGetOpenAIKey(...args),
  saveOpenAIKey: (...args: unknown[]) => mockSaveOpenAIKey(...args),
}))

interface HookHarnessProps {
  value: string
  pushHistory: (text: string) => void
  onContentChange: (text: string) => void
}

const HookHarness: React.FC<HookHarnessProps> = ({ value, pushHistory, onContentChange }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const assistant = useNoteAI({
    userId: 'user-1',
    value,
    textareaRef,
    pushHistory,
    onContentChange,
  })

  return (
    <>
      <textarea aria-label="Note text" ref={textareaRef} value={value} readOnly />
      <button type="button" onClick={() => void assistant.openAssistant()}>
        Open AI assistant
      </button>
      {assistant.assistantOpen && (
        <>
          <input
            aria-label="AI instruction"
            value={assistant.instruction}
            onChange={(event) => assistant.setInstruction(event.target.value)}
          />
          <button type="button" onClick={() => void assistant.submitInstruction()}>
            Send instruction
          </button>
        </>
      )}
    </>
  )
}

describe('useNoteAI', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockGetOpenAIKey.mockResolvedValue('test-api-key')
    mockSaveOpenAIKey.mockResolvedValue(undefined)
    mockExecuteAI.mockResolvedValue({ output_text: 'REPLACED' })
  })

  it('replaces selected note text using the existing assistant instructions', async () => {
    const pushHistory = jest.fn()
    const onContentChange = jest.fn()
    render(
      <HookHarness
        value="before SELECT after"
        pushHistory={pushHistory}
        onContentChange={onContentChange}
      />
    )

    const noteText = screen.getByLabelText('Note text') as HTMLTextAreaElement
    noteText.setSelectionRange(7, 13)

    fireEvent.click(screen.getByText('Open AI assistant'))
    fireEvent.change(screen.getByLabelText('AI instruction'), {
      target: { value: 'Rewrite selection' },
    })
    fireEvent.click(screen.getByText('Send instruction'))

    await waitFor(() => {
      expect(onContentChange).toHaveBeenCalledWith('before REPLACED after')
    })

    expect(pushHistory).toHaveBeenCalledWith('before SELECT after')
    expect(mockExecuteAI).toHaveBeenCalledWith(
      'user-1',
      expect.stringContaining('You are a text editor assistant.'),
      'Rewrite selection',
      'SELECT',
      'gpt-6-luna',
      'test-api-key'
    )
  })

  it('appends the generated text when no note selection was made', async () => {
    const onContentChange = jest.fn()
    render(
      <HookHarness value="Whole note" pushHistory={jest.fn()} onContentChange={onContentChange} />
    )

    fireEvent.click(screen.getByText('Open AI assistant'))
    fireEvent.change(screen.getByLabelText('AI instruction'), {
      target: { value: 'Summarize' },
    })
    fireEvent.click(screen.getByText('Send instruction'))

    await waitFor(() => {
      expect(onContentChange).toHaveBeenCalledWith('Whole note\n\nREPLACED')
    })
  })
})
