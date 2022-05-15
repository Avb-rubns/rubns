import { useContext } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import Home from 'pages/home'
import Notes from 'pages/note'
import Jobs from 'pages/job'
import ErrorF from 'pages/found_error'
import { GlobalStyle } from 'styles/globals_styles'
import { ThemeContext } from 'context/theme_context'
import { ThemeProvider } from 'styled-components'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/home#about-me" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route component={ErrorF} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
