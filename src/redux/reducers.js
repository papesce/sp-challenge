import {LOGIN_SUCCESS,LOGIN_FAILURE} from './actionTypes'
import {SEARCH_SUCCEEDED} from './actionTypes'



export function loginReducer(prevState = {}, action) {
    switch (action.type) {
    case LOGIN_FAILURE:
        return {error: action.error}
    case LOGIN_SUCCESS:
        return {auth_token: action.payload.auth_token, refresh_token : action.payload.refresh_token, expiration: action.payload.expiration}    
    default:       
    } 
    return prevState;
} 


export function searchReducer(prevState = {}, action) {
    switch (action.type) {
    case SEARCH_SUCCEEDED:
        debugger;
        return {albums: action.payload.albums}
    default:
    }
    return prevState;
}