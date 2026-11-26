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
  onContentChange: (entryId: string, text: string) => Promise<void>
  editing?: boolean
}

const HookHarness: React.FC<HookHarnessProps> = ({ value, onContentChange, editing = true }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const assistant = useNoteAI({
    userId: 'user-1',
    getNoteContext: () => ({
      entryId: 'note-1',
      value,
      textarea: editing ? textareaRef.current : null,
    }),
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
    const onContentChange = jest.fn()
    render(<HookHarness value="before SELECT after" onContentChange={onContentChange} />)

    const noteText = screen.getByLabelText('Note text') as HTMLTextAreaElement
    noteText.setSelectionRange(7, 13)

    fireEvent.click(screen.getByText('Open AI assistant'))
    fireEvent.change(screen.getByLabelText('AI instruction'), {
      target: { value: 'Rewrite selection' },
    })
    fireEvent.click(screen.getByText('Send instruction'))

    await waitFor(() => {
      expect(onContentChange).toHaveBeenCalledWith('note-1', 'before REPLACED after')
    })

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
    render(<HookHarness value="Whole note" onContentChange={onContentChange} />)

    fireEvent.click(screen.getByText('Open AI assistant'))
    fireEvent.change(screen.getByLabelText('AI instruction'), {
      target: { value: 'Summarize' },
    })
    fireEvent.click(screen.getByText('Send instruction'))

    await waitFor(() => {
      expect(onContentChange).toHaveBeenCalledWith('note-1', 'Whole note\n\nREPLACED')
    })
  })

  it('uses the selected note when no note is being edited', async () => {
    const onContentChange = jest.fn()
    render(<HookHarness value="Selected note" editing={false} onContentChange={onContentChange} />)

    fireEvent.click(screen.getByText('Open AI assistant'))
    fireEvent.change(screen.getByLabelText('AI instruction'), {
      target: { value: 'Add a summary' },
    })
    fireEvent.click(screen.getByText('Send instruction'))

    await waitFor(() => {
      expect(onContentChange).toHaveBeenCalledWith('note-1', 'Selected note\n\nREPLACED')
    })
  })
})
