import {
  SET_LOADING,
  ADD_TRANSACTION,
  SET_TRANSACTION,
  DELETE_TRANSACTION
} from "../types";

export const addTransaction = transaction => dispatch => {
  dispatch({
    type: ADD_TRANSACTION,
    payload: transaction
  });
};

export const setTransaction = transaction => dispatch => {
  dispatch({
    type: SET_TRANSACTION,
    payload: transaction
  });
};

export const deleteTransaction = id => dispatch => {
  dispatch({
    type: DELETE_TRANSACTION,
    payload: id
  });
};
