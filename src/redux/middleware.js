import { LOGIN_SUCCESS } from "./actionTypes";

const ACCESS_TOKEN = "access_token";
const EXPIRATION = "expiration";

export const middleware = store => next => action => {
   if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem(ACCESS_TOKEN, action.payload.auth_token ); 
    localStorage.setItem(EXPIRATION, action.payload.expiration);
   }
   next(action);
}

export const initializeState = state => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const expiration = localStorage.getItem(EXPIRATION);
    const timenow= new Date().getTime();
    if (token &&  expiration && Number(expiration) > timenow) {
        state.user = { auth_token: token,
                       refresh_token: null,
                       expiration: expiration}
    }
    return state;
}