import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Header, Form, LoginTable, Success } from "./components"

import "./App.css";

export const App = () => (
  <Router>
    <Route exact={true} path="/">
      <Header />
      <Form />
    </Route>

    <Switch>
      <Route path="/login">
        <LoginTable />
      </Route>
    </Switch>

    <Switch>
      <Route path='/success'>
      <Success />
      </Route>
    </Switch>
</Router>
)

