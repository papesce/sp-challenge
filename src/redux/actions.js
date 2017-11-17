import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes'

export function loginRequest() {
    return {type: LOGIN_REQUEST}
}

export function loginSuccess(token) {
    return {type: LOGIN_SUCCESS, auth_token: token}
}

export function loginFailure(error) {
    return {type: LOGIN_FAILURE, error}
}

