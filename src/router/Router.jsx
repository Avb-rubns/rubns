import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import Home from '../pages/Home'
import Notes from '../pages/Notes'
import Jobs from '../pages/Jobs'
import ErrorF from '../pages/Found-Error'
import Read from 'pages/Read'
import { GlobalStyle } from 'styles/globals.styles'
import { ThemeContext } from 'context/ThemeContext'
import { ThemeProvider } from 'styled-components'

function App () {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/home#about-me" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/Read" component={Read} />
        <Route component={ErrorF} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
