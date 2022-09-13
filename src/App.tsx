import { GlobalStyle } from './styles/themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { useState } from 'react'
import { CyclesContextProvider } from './contexts/CyclesContext'

function App() {
  console.log('render')
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
