import React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Jobs from "../pages/Jobs";
import "../styles/index.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/home#about-me" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  );
}
export default App;
