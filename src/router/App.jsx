import React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Jobs from "../pages/Jobs";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/home#about-me" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
}
export default App;
