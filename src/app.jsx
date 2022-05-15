import Router from 'router'
import { ThemeContextProvider } from 'context/theme_context'

function App() {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  )
}

export default App
