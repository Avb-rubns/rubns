import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globals.styles'
import Router from 'router/Router'
import { useTheme } from 'context/Themecontext'

function App () {
  const { theme, themeLoaded } = useTheme()

  return (
  <>
  {themeLoaded && <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
  }
  </>
  )
}

export default App
