import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Header, Form, LoginTable, Success, Error } from "./components"

import "./App.css";

export const App = () => (
  <Router>
        <Header />
    <Route exact={true} path="/">
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

    <Switch>
      <Route path='/error'>
      <Error />
      </Route>
    </Switch>
</Router>
)

