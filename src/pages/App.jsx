import React from 'react'
import Router from 'router/Router'
import { ThemeContextProvider } from 'context/ThemeContext'

function App () {
  return (
    <ThemeContextProvider>
        <Router />
    </ThemeContextProvider>
  )
}

export default App
