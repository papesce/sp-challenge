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
import initialState from "./results/recomendations";
//const initialState = {}

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

export const store = storeFactory(initialState);
