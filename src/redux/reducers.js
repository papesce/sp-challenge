import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from './actionTypes'


export function loginReducer(state = {}, action) {
    switch (action.type) {
//    case LOGIN_REQUEST:
//      return {loading: true}
    case LOGIN_FAILURE:
        return {error: action.error}
    case LOGIN_SUCCESS:
        return {auth_token: action.auth_token, refresh_token : action.refresh_token, expiration: action.expiration}    
    default:       
    } 
    return state;
} 