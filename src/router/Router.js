import React from "react";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

export const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </ConnectedRouter>
);
