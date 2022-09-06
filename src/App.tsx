import { Header } from './components/Header'
import { GlobalStyle } from './styles/themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
