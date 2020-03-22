import { SET_LOADING, SET_UNLOADING } from "../types";

const initialState = {
  loading: false
};

export const uiReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_UNLOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
