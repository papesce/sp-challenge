import {LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes'
import {SEARCH, SEARCH_CLEAR} from './actionTypes'
import {createAction} from "redux-actions"
import {createActionThunk} from "redux-thunk-actions"
import {apiSearch} from "../spotify-api/api"


/**
 * LOGIN ACTIONS
 */
const loginSuccessAction = createAction(LOGIN_SUCCESS);

export const loginSuccess = (auth_token, refresh_token, expiration) => 
        loginSuccessAction({auth_token, refresh_token, expiration});


//export function loginSuccess() {
//    return {type: LOGIN_SUCCESS, auth_token, refresh_token, expiration}
//}

export function loginFailure(error) {
    return {type: LOGIN_FAILURE, error}
}

/**
 * SEARCH ACTIONS
 */

export const search = createActionThunk(SEARCH, apiSearch) ;

export const searchClear = createAction(SEARCH_CLEAR)