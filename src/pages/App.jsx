import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globals.styles'
import Router from 'router/Router'
import { useTheme } from 'context/Themecontext'

function App () {
  const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded])
  return (
  <>
  {themeLoaded && <ThemeProvider theme={selectedTheme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
  }
  </>
  )
}

export default App
