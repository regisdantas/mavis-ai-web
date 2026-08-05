import React from 'react'
import { createPortal } from 'react-dom'
import { TemplateOption } from '../../utils'

interface FloatingTemplatePickerProps {
  options: TemplateOption[]
  onPicked: (option: TemplateOption) => void
}

const FloatingTemplatePicker: React.FC<FloatingTemplatePickerProps> = ({ options, onPicked }) => {
  return createPortal(
    <div
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'fixed',
        top: '120px',
        right: '50%',
        transform: 'translate(420px, 0%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '8px',
        background: 'white',
        border: '1px solid #323232',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        zIndex: 999999,
      }}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          style={{
            backgroundColor: '#cfcfcf',
            width: '100%',
            height: 24,
            border: '1px solid #666',
            borderRadius: 4,
            cursor: 'pointer',
            padding: '2px',
          }}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onPicked(opt)
          }}
        >
          {opt.name}
        </button>
      ))}
    </div>,
    document.body
  )
}

export default FloatingTemplatePicker
