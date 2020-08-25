import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Header, Form, Login } from "./components"

import "./App.css";

export const App = () => (
  <Router>
    <Route exact={true} path="/">
      <Header />
      <Form />
    </Route>

    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
</Router>
)

