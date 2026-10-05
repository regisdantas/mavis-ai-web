import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'

interface ThemeContextData {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as ThemeContextData)

export const ThemeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const stored = localStorage.getItem('theme')

    if (stored) {
      return stored === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches
  })

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current

      localStorage.setItem('theme', next ? 'dark' : 'light')

      return next
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
