import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals.styles'
import Router from './router/Router'
import Dark from './styles/schemes/dark'
// import light from 'styles/schemes/light'

ReactDOM.render(
  <ThemeProvider theme={Dark}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
)
