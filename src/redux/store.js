import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { history } from "../router/Router";
import { createLogger } from "redux-logger";
import { loginReducer, searchReducer } from "./reducers";
import thunkMiddleware from 'redux-thunk'
import initialState from './state2'



export const getToken = (state) => {
  return state.user.auth_token;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const storeFactory = initialState =>
  createStore(
    combineReducers({
      //...reducers,
      search: searchReducer,
      user: loginReducer,
      router: routerReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history), createLogger()))
  );

  export const store = storeFactory(initialState);