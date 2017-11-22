import { LOGIN_SUCCESS } from "./actionTypes";

const ACCESS_TOKEN = "access_token";
const EXPIRATION = "expiration";

export const middleware = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem(ACCESS_TOKEN, action.payload.auth_token);
    localStorage.setItem(EXPIRATION, action.payload.expiration);
  }
  next(action);
};

export const initializeState = state => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const expiration = localStorage.getItem(EXPIRATION);
  if (isAuthenticated(token, expiration)) {
    state.user = {
      auth_token: token,
      refresh_token: null,
      expiration: expiration
    };
  }
  return state;
};

export const isAuth = state => {
  if (state.user) {
    const token = state.user.auth_token;
    const expiration = state.user.expiration;
    return isAuthenticated(token, expiration);
  }
  return false;
};

const isAuthenticated = (token, expiration) => {
  const timenow = new Date().getTime();
  return token && expiration && Number(expiration) > timenow;
};
