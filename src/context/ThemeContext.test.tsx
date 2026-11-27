import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from './ThemeContext'

const ThemeControl: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <button type="button" aria-pressed={darkMode} onClick={toggleTheme}>
      {darkMode ? 'Dark' : 'Light'}
    </button>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.style.removeProperty('color-scheme')
  })

  it('restores and persists the selected theme', () => {
    localStorage.setItem('theme', 'dark')

    render(
      <ThemeProvider>
        <ThemeControl />
      </ThemeProvider>
    )

    const control = screen.getByRole('button')
    expect(control.textContent).toBe('Dark')
    expect(control.getAttribute('aria-pressed')).toBe('true')
    expect(document.documentElement.dataset.theme).toBe('dark')

    fireEvent.click(control)

    expect(control.textContent).toBe('Light')
    expect(control.getAttribute('aria-pressed')).toBe('false')
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
