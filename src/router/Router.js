import React from "react";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

//import MyConnectedRouter from "./MyConnectedRouter";
import { Route, Switch } from "react-router";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import RouteErrorComponent from "../components/RouteErrorComponent";
import HomePage from "../components/HomePage";
import RecommHomePage from "../components/RecommHomePage";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

export const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path={process.env.PUBLIC_URL + "/"}
        component={HomeContainer(HomePage)}
      />
      <Route
        path={process.env.PUBLIC_URL + "/callback"}
        component={LoginContainer}
      />
      <Route
        path={process.env.PUBLIC_URL + "/login"}
        component={LoginContainer}
      />
      <Route
        path={process.env.PUBLIC_URL + "/recommendations/:albumid"}
        component={HomeContainer(RecommHomePage)}
      />
      <Route component={RouteErrorComponent} />
    </Switch>
  </ConnectedRouter>
);
