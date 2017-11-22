import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { history } from "../router/Router";
import { createLogger } from "redux-logger";
import {
  loginReducer,
  searchReducer,
  recommendationsReducer
} from "./reducers";
import thunkMiddleware from "redux-thunk";
import { middleware, initializeState } from "./middleware";
//import initialState from './state2'
//import initialState from "./results/recomendations";

const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const storeFactory = initialState =>
  createStore(
    combineReducers({
      //...reducers,
      search: searchReducer,
      recommendations: recommendationsReducer,
      user: loginReducer,
      router: routerReducer
    }),
    initializeState(initialState),
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        middleware,
        routerMiddleware(history),
        createLogger()
      )
    )
  );

const theStore = storeFactory(initialState);

theStore.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
});

export const store = theStore;
