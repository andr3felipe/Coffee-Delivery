import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
}

body {
  background: ${(props) => props.theme.background};
  -webkit-font-smoothing: antialiased;
  padding-bottom: 9.8125rem;
}

body, input,  button, textarea {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
