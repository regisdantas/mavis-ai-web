import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import FloatingNoteAIPrompt from './FloatingNoteAIPrompt'

const renderPrompt = (overrides: Partial<React.ComponentProps<typeof FloatingNoteAIPrompt>> = {}) =>
  render(
    <FloatingNoteAIPrompt
      instruction=""
      setInstruction={jest.fn()}
      apiKeyInput=""
      setApiKeyInput={jest.fn()}
      requiresApiKey={false}
      error=""
      loading={false}
      onClear={jest.fn()}
      onSend={jest.fn()}
      onClose={jest.fn()}
      dropdownRef={React.createRef<HTMLDivElement>()}
      {...overrides}
    />
  )

describe('FloatingNoteAIPrompt', () => {
  it('sends on Enter on desktop and leaves Ctrl+Enter for a newline', () => {
    const originalWidth = window.innerWidth
    const onSend = jest.fn()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1324 })

    try {
      renderPrompt({ onSend })
      const instruction = screen.getByLabelText('AI instruction')

      fireEvent.change(instruction, { target: { value: 'Summarize this' } })
      fireEvent.keyDown(instruction, { key: 'Enter', ctrlKey: true })
      expect(onSend).not.toHaveBeenCalled()

      fireEvent.keyDown(instruction, { key: 'Enter' })
      expect(onSend).toHaveBeenCalledTimes(1)
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('uses the Send button instead of Enter on mobile', () => {
    const originalWidth = window.innerWidth
    const onSend = jest.fn()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })

    try {
      renderPrompt({ onSend, instruction: 'Summarize this' })
      const instruction = screen.getByLabelText('AI instruction')
      fireEvent.keyDown(instruction, { key: 'Enter' })
      expect(onSend).not.toHaveBeenCalled()

      fireEvent.click(screen.getByRole('button', { name: 'Send' }))
      expect(onSend).toHaveBeenCalledTimes(1)
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('shows the API key field only when needed and clears instructions', () => {
    const setInstruction = jest.fn()
    const onClear = jest.fn()

    renderPrompt({ requiresApiKey: true, setInstruction, onClear })

    expect(screen.getByLabelText('OpenAI API key')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Clear' }))

    expect(onClear).toHaveBeenCalledTimes(1)
  })
})
