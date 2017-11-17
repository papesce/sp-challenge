import {createStore, combineReducers, applyMiddleware} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
//import {hashHistory} from 'react-router-dom'
import { createLogger } from 'redux-logger'
import {loginReducer} from './reducers'
//import {searchMiddleware} from './middleware'


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history);




// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const storeFactory = (initialState) => createStore(
  combineReducers({
    //...reducers,
    user: loginReducer,
    router: routerReducer
  }), initialState,
  applyMiddleware(rMiddleware,  createLogger())
)