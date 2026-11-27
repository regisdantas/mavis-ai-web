import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { FiSend, FiX } from 'react-icons/fi'

interface FloatingNoteAIPromptProps {
  instruction: string
  setInstruction: (instruction: string) => void
  apiKeyInput: string
  setApiKeyInput: (apiKey: string) => void
  requiresApiKey: boolean
  error: string
  loading: boolean
  onClear: () => void
  onSend: () => void
  onClose: () => void
  dropdownRef: React.RefObject<HTMLDivElement>
}

const FloatingNoteAIPrompt: React.FC<FloatingNoteAIPromptProps> = ({
  instruction,
  setInstruction,
  apiKeyInput,
  setApiKeyInput,
  requiresApiKey,
  error,
  loading,
  onClear,
  onSend,
  onClose,
  dropdownRef,
}) => {
  const handleInstructionKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') {
      onClose()
      return
    }

    const isSmallScreen =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(max-width: 768px)').matches
        : window.innerWidth <= 768

    if (event.key === 'Enter' && !isSmallScreen && !event.ctrlKey) {
      event.preventDefault()
      onSend()
    }
  }

  return createPortal(
    <PromptDialog
      ref={dropdownRef}
      role="dialog"
      aria-label="AI assistant"
      onMouseDown={(event) => event.stopPropagation()}
    >
      <DialogHeader>
        <DialogTitle>AI assistant</DialogTitle>
        <CloseButton
          type="button"
          data-keepeditor="true"
          aria-label="Close AI assistant"
          onClick={onClose}
        >
          <FiX />
        </CloseButton>
      </DialogHeader>

      {requiresApiKey && (
        <ApiKeyInput
          type="password"
          data-keepeditor="true"
          autoComplete="off"
          placeholder="OpenAI API key"
          aria-label="OpenAI API key"
          value={apiKeyInput}
          onChange={(event) => setApiKeyInput(event.target.value)}
        />
      )}

      <InstructionInput
        data-keepeditor="true"
        autoFocus
        rows={5}
        placeholder="What should I change? For example: fix grammar, summarize, or rewrite professionally."
        aria-label="AI instruction"
        value={instruction}
        onChange={(event) => setInstruction(event.target.value)}
        onKeyDown={handleInstructionKeyDown}
      />

      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}

      <DialogActions>
        <ClearButton type="button" data-keepeditor="true" onClick={onClear} disabled={loading}>
          Clear
        </ClearButton>
        <SendButton
          type="button"
          data-keepeditor="true"
          onClick={onSend}
          disabled={loading || !instruction.trim()}
        >
          <FiSend />
          {loading ? 'Sending...' : 'Send'}
        </SendButton>
      </DialogActions>
    </PromptDialog>,
    document.body
  )
}

export default FloatingNoteAIPrompt

const PromptDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: min(440px, calc(100vw - 32px));
  max-height: min(80vh, 620px);
  padding: 16px;
  overflow-y: auto;
  transform: translate(-50%, -50%);
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  background: var(--mavis-surface);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    top: auto;
    right: 12px;
    bottom: 12px;
    left: 12px;
    width: auto;
    max-height: 75vh;
    transform: none;
    padding: 14px;
  }
`

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DialogTitle = styled.h2`
  margin: 0;
  color: var(--mavis-text);
  font-size: 16px;
  font-weight: 600;
`

const CloseButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--mavis-muted);
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`

const ApiKeyInput = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-input);
  color: var(--mavis-text);
  font: inherit;

  &:focus {
    outline: 2px solid rgba(91, 75, 216, 0.3);
    border-color: var(--mavis-brand);
  }
`

const InstructionInput = styled.textarea`
  width: 100%;
  min-height: 120px;
  max-height: 40vh;
  padding: 12px;
  resize: vertical;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-input);
  color: var(--mavis-text);
  font: inherit;
  line-height: 1.4;

  &:focus {
    outline: 2px solid rgba(91, 75, 216, 0.3);
    border-color: var(--mavis-brand);
  }
`

const ErrorMessage = styled.p`
  margin: 0;
  color: var(--mavis-danger-text);
  font-size: 13px;
`

const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`

const ClearButton = styled.button`
  min-width: 64px;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-surface-subtle);
  color: var(--mavis-text-secondary);
  font: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-surface-hover);
  }

  &:disabled {
    background: var(--mavis-surface-hover);
    color: var(--mavis-disabled);
    cursor: not-allowed;
    opacity: 1;
  }
`

const SendButton = styled.button`
  display: flex;
  min-width: 84px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 14px;
  border: 0;
  border-radius: 8px;
  background: var(--mavis-brand);
  color: #fff;
  font: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-strong);
  }

  &:disabled {
    background: var(--mavis-disabled);
    color: #fff;
    cursor: not-allowed;
    opacity: 1;
  }
`
