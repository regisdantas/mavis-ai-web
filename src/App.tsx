import { GlobalStyles } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './routes'
import Header from './components/Header'
import { AppContainer } from './styles/global'
import { AuthContextProvider } from './contexts/AuthContext'
import logo from './assets/logo.png'

function App() {
  return (
    <AuthContextProvider>
      <AppContainer>
        <Header title="gratify" logo={logo} />
        <HashRouter>
          <Router />
        </HashRouter>
        <GlobalStyles />
      </AppContainer>
    </AuthContextProvider>
  )
}

export default App
