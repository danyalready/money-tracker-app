import {
  LOADING_USER,
  SET_ERRORS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_CREDENTIALS
} from "../types";

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {}
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case SET_ERRORS:
      return {
        ...state,
        ...action.payload
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        credentials: action.payload
      };
    case SET_CREDENTIALS:
      return {
        ...state,
        authenticated: true,
        credentials: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
