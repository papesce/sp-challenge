import {LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes'


export function loginSuccess(auth_token, refresh_token, expiration) {
    return {type: LOGIN_SUCCESS, auth_token, refresh_token, expiration}
}

export function loginFailure(error) {
    return {type: LOGIN_FAILURE, error}
}

