import { GlobalStyles } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './routes'
import Header from './components/Header'
import { AppContainer } from './styles/global'
import { AuthContextProvider } from './context/AuthContext'
import mavis from './assets/mavis.png'

function App() {
  return (
    <AuthContextProvider>
      <AppContainer>
        <Header title="MAVIS" logo={mavis} />
        <HashRouter>
          <Router />
        </HashRouter>
        <GlobalStyles />
      </AppContainer>
    </AuthContextProvider>
  )
}

export default App
