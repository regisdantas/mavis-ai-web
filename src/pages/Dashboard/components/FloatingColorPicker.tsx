import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface FloatingColorPickerProps {
  colors: string[]
  onColorClicked: (color: string) => void
}

const FloatingColorPicker: React.FC<FloatingColorPickerProps> = ({ colors, onColorClicked }) => {
  return createPortal(
    <ColorDropdown onMouseDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
      {colors.map((color) => (
        <ColorOption
          key={color}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onColorClicked(color)
          }}
        >
          <ColorCircle color={color} />
          <ColorLabel>{color}</ColorLabel>
        </ColorOption>
      ))}
    </ColorDropdown>,
    document.body
  )
}

export default FloatingColorPicker

const ColorDropdown = styled.div`
  position: absolute;

  top: 120px;
  right: 50%;

  min-width: 160px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`

const ColorOption = styled.button`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  border-radius: 10px;

  background: #f5f6f8;

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #eceff3;
  }
`

const ColorCircle = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${({ color }) => color};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`

const ColorLabel = styled.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`
