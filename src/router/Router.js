import React from "react";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";
import HomePage from "../components/HomePage";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

export const Router = () => (
  <ConnectedRouter history={history}>
    <Route exact path="/" component={HomePage} />
  </ConnectedRouter>
);
