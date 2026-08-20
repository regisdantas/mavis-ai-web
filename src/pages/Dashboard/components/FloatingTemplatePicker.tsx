import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { TemplateOption } from '../utils/cardUtils'

interface FloatingTemplatePickerProps {
  options: TemplateOption[]
  onPicked: (option: TemplateOption) => void
}

const FloatingTemplatePicker: React.FC<FloatingTemplatePickerProps> = ({ options, onPicked }) => {
  return createPortal(
    <TemplateDropdown onMouseDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
      {options.map((option, index) => (
        <TemplateOptionItem
          key={index}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onPicked(option)
          }}
        >
          <TemplateContent>
            <TemplateTitle>{option.title}</TemplateTitle>
          </TemplateContent>
        </TemplateOptionItem>
      ))}
    </TemplateDropdown>,
    document.body
  )
}

export default FloatingTemplatePicker

const TemplateDropdown = styled.div`
  position: absolute;

  top: 120px;
  right: 50%;

  min-width: 220px;
  max-width: 320px;
  max-height: 320px;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`

const TemplateOptionItem = styled.button`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 10px;

  border: none;
  border-radius: 10px;

  background: #f5f6f8;

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  text-align: left;

  &:hover {
    background: #eceff3;
  }
`
const TemplateContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`

const TemplateTitle = styled.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`
