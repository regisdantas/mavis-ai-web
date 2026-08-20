import { GlobalStyles } from './styles/global'
import styled from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './routes'
import Header from './components/Header'
import { AuthContextProvider } from './context/AuthContext'
import mavis from './assets/mavis.png'
import React from 'react'

function App() {
  const [explorerExpanded, setExplorerExpanded] = React.useState<boolean>(false)
  return (
    <AuthContextProvider>
      <AppContainer>
        <Header expanded={explorerExpanded} />
        <HashRouter>
          <Router explorerExpanded={explorerExpanded} setExplorerExpanded={setExplorerExpanded} />
        </HashRouter>
        <GlobalStyles />
      </AppContainer>
    </AuthContextProvider>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`
