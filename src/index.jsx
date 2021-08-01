import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals.styles'
import Router from './router/Router'
import Dark from './styles/schemes/dark'
import Light from 'styles/schemes/light'

const THEMES = {
  Dark,
  Light
}

ReactDOM.render(
  <ThemeProvider theme={THEMES.Light}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
)
