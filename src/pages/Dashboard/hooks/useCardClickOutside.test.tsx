import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { useCardClickOutside } from './useCardClickOutside'

interface DropdownHarnessProps {
  closeToolbox: () => void
}

const DropdownHarness: React.FC<DropdownHarnessProps> = ({ closeToolbox }) => {
  const tagPickerRef = React.useRef<HTMLDivElement>(null)
  const tagDropdownRef = React.useRef<HTMLDivElement>(null)
  const colorPickerRef = React.useRef<HTMLDivElement>(null)
  const colorDropdownRef = React.useRef<HTMLDivElement>(null)
  const templatePickerRef = React.useRef<HTMLDivElement>(null)
  const templateDropdownRef = React.useRef<HTMLDivElement>(null)
  const toolboxRef = React.useRef<HTMLDivElement>(null)

  useCardClickOutside({
    tagPickerRef,
    tagDropdownRef,
    colorPickerRef,
    colorDropdownRef,
    templatePickerRef,
    templateDropdownRef,
    toolboxRef,
    closeTagPicker: jest.fn(),
    closeColorPicker: jest.fn(),
    closeTemplatePicker: jest.fn(),
    closeToolbox,
  })

  return (
    <>
      <div ref={toolboxRef}>
        <button type="button">Toolbox</button>
      </div>
      <button type="button">Outside</button>
    </>
  )
}

describe('useCardClickOutside', () => {
  it('closes the note toolbox when pressing outside it', () => {
    const closeToolbox = jest.fn()
    render(<DropdownHarness closeToolbox={closeToolbox} />)

    fireEvent.pointerDown(screen.getByText('Outside'))

    expect(closeToolbox).toHaveBeenCalledTimes(1)
  })
})
