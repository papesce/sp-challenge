import {LOGIN_SUCCESS,LOGIN_FAILURE, SEARCH_FAILED} from './actionTypes'
import {SEARCH_SUCCEEDED, SEARCH_CLEAR, SEARCH_STARTED} from './actionTypes'



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
        return {albums: action.payload.albums}
    case SEARCH_FAILED:
        return {albums: JSON.parse(action.payload.response)}
    case SEARCH_STARTED:
        return {albums: {loading: true}}
    case SEARCH_CLEAR:
        return {albums: {}}
    default:
    }
    return prevState;
}