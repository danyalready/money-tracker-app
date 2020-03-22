import axios from "axios";
import {
  SET_LOADING,
  SET_UNLOADING,
  GET_TRANSACTIONS,
  SET_TRANSACTION,
  DELETE_TRANSACTION
} from "../types";

export const getTransactions = () => dispatch => {
  dispatch({ type: SET_LOADING });
  axios
    .get("/transactions")
    .then(res => {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data.sort(
          (a, b) =>
            new Date(b.transaction.createdAt) -
            new Date(a.transaction.createdAt)
        )
      });
    })
    .then(() => dispatch({ type: SET_UNLOADING }))
    .catch(err => {
      console.log(err);
    });
};

export const addTransaction = transaction => dispatch => {
  axios
    .post("/transactions", transaction)
    .then(() => {
      dispatch(getTransactions());
    })
    .catch(err => console.log(err));
};

export const deleteTransaction = transactionId => dispatch => {
  axios
    .delete(`/transactions/${transactionId}`)
    .then(() => {
      dispatch({
        type: DELETE_TRANSACTION,
        payload: transactionId
      });
    })
    .then(() => dispatch({ type: SET_UNLOADING }))
    .catch(err => console.log(err));
};

export const setTransaction = transaction => dispatch => {
  dispatch({
    type: SET_TRANSACTION,
    payload: transaction
  });
};
