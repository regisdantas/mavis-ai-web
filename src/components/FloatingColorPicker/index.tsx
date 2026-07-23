import React from 'react'
import { createPortal } from 'react-dom'

interface FloatingColorPickerProps {
  colors: string[]
  onColorClicked: (color: string) => void
}

const FloatingColorPicker: React.FC<FloatingColorPickerProps> = ({ colors, onColorClicked }) => {
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
      {colors.map((c) => (
        <button
          key={c}
          style={{
            backgroundColor: c,
            width: 60,
            height: 24,
            border: '1px solid #666',
            borderRadius: 4,
            cursor: 'pointer',
            padding: 0,
          }}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onColorClicked(c)
          }}
        />
      ))}
    </div>,
    document.body
  )
}

export default FloatingColorPicker
