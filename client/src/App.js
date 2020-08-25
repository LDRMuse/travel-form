import React, { Fragment } from 'react';

import {Header, Form} from "./components"

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

