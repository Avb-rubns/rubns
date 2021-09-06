import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import Home from '../pages/Home'
import Notes from '../pages/Notes'
import Jobs from '../pages/Jobs'
import ErrorF from '../pages/Found-Error'
function App () {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/home#about-me" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route component={ErrorF} />
      </Switch>
    </>
  )
}
export default App
