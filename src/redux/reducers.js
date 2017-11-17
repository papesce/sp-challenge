import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from './actionTypes'


export function loginReducer(state = {}, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
      return {loading: true}
    case LOGIN_FAILURE:
        return {loading: false, error: action.error}
    case LOGIN_SUCCESS:
        return {loading: false, auth_token: action.auth_token}    
    default:       
    } 
    return state;
} 