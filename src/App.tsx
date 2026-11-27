import { GlobalStyles } from './styles/global'
import styled from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './routes'
import Header from './components/Header'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import mavis from './assets/mavis.png'
import React from 'react'

function App() {
  const [explorerExpanded, setExplorerExpanded] = React.useState<boolean>(
    () => window.innerWidth > 768
  )
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <AppContainer>
          <Header expanded={explorerExpanded} />
          <HashRouter>
            <Router explorerExpanded={explorerExpanded} setExplorerExpanded={setExplorerExpanded} />
          </HashRouter>
          <GlobalStyles />
        </AppContainer>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  background: var(--mavis-page);
  color: var(--mavis-text);
`
