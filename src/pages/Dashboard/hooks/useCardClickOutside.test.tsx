import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { useCardClickOutside } from './useCardClickOutside'

const DropdownHarness: React.FC = () => {
  const tagPickerRef = React.useRef<HTMLDivElement>(null)
  const tagDropdownRef = React.useRef<HTMLDivElement>(null)
  const otherTagsDropdownRef = React.useRef<HTMLDetailsElement>(null)
  const colorPickerRef = React.useRef<HTMLDivElement>(null)
  const colorDropdownRef = React.useRef<HTMLDivElement>(null)
  const templatePickerRef = React.useRef<HTMLDivElement>(null)
  const templateDropdownRef = React.useRef<HTMLDivElement>(null)
  const aiPromptRef = React.useRef<HTMLDivElement>(null)
  const aiPromptDropdownRef = React.useRef<HTMLDivElement>(null)

  useCardClickOutside({
    tagPickerRef,
    tagDropdownRef,
    otherTagsDropdownRef,
    colorPickerRef,
    colorDropdownRef,
    templatePickerRef,
    templateDropdownRef,
    aiPromptRef,
    aiPromptDropdownRef,
    closeTagPicker: jest.fn(),
    closeColorPicker: jest.fn(),
    closeTemplatePicker: jest.fn(),
    closeAIPrompt: jest.fn(),
  })

  return (
    <details ref={otherTagsDropdownRef}>
      <summary>Other tags</summary>
      <button type="button">Tag</button>
    </details>
  )
}

describe('useCardClickOutside', () => {
  it('closes the assigned-tags dropdown when pressing outside it', () => {
    render(<DropdownHarness />)
    const disclosure = screen.getByText('Other tags').closest('details')

    fireEvent.click(screen.getByText('Other tags'))
    expect(disclosure?.open).toBe(true)

    fireEvent.pointerDown(document.body)

    expect(disclosure?.open).toBe(false)
  })
})
