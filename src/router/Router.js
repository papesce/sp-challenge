import React from "react";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

export const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/login/:auth_token/:refresh_token/:expiration" component={LoginContainer} />
      <Route path="/login" component={LoginContainer} />
    </Switch>
  </ConnectedRouter>
);
