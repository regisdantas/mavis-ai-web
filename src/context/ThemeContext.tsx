import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'

interface ThemeContextData {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as ThemeContextData)

const getInitialDarkMode = () => {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme === 'dark') {
    return true
  }

  if (storedTheme === 'light') {
    return false
  }

  return typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
}

export const ThemeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(getInitialDarkMode)

  React.useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.theme = darkMode ? 'dark' : 'light'
    root.style.colorScheme = darkMode ? 'dark' : 'light'

    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', darkMode ? darkTheme.background : lightTheme.background)
  }, [darkMode])

  const toggleTheme = React.useCallback(() => {
    const next = !darkMode
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setDarkMode(next)
  }, [darkMode])

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
