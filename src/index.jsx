import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals.styles'
import Router from './router/Router'
import light from './styles/schemes/light'

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
)
