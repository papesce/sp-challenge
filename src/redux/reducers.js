import { LOGIN_SUCCESS, LOGIN_FAILURE, SEARCH_FAILED } from "./actionTypes";
import { SEARCH_SUCCEEDED, SEARCH_CLEAR, SEARCH_STARTED } from "./actionTypes";
import {
  RECOMMENDATIONS_SUCCEEDED,
  RECOMMENDATIONS_STARTED,
  RECOMMENDATIONS_FAILED
} from "./actionTypes";

/**
 *  LOGIN REDUCER
 */
export function loginReducer(prevState = {}, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return { error: action.error };
    case LOGIN_SUCCESS:
      return {
        auth_token: action.payload.auth_token,
        refresh_token: action.payload.refresh_token,
        expiration: action.payload.expiration
      };
    default:
  }
  return prevState;
}

/**
 *  SEARCH REDUCER
 */
export function searchReducer(prevState = {}, action) {
  switch (action.type) {
    case SEARCH_SUCCEEDED:
      return { albums: action.payload.albums };
    case SEARCH_FAILED:
      return { albums: JSON.parse(action.payload.response) };
    case SEARCH_STARTED:
      return { albums: { loading: true } };
    case SEARCH_CLEAR:
      return { albums: {} };
    default:
  }
  return prevState;
}

/**
 * RECOMMENDATIONS REDUCER
 */
export function recommendationsReducer(prevState = {}, action) {
  switch (action.type) {
    case RECOMMENDATIONS_SUCCEEDED:
      return { recommendations: action.payload };
    case RECOMMENDATIONS_FAILED:
      return { reccomendations: JSON.parse(action.payload.response) };
    case RECOMMENDATIONS_STARTED:
      return { recommendations: { loading: true } };
    default:
  }
  return prevState;
}
