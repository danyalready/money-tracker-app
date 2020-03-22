import {
  SET_ERRORS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_CREDENTIALS
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {}
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
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
        credentials: action.payload
      };
    default:
      return state;
  }
};
