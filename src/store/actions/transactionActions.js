import axios from "axios";
import {
  SET_LOADING,
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
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
    .catch(err => console.log(err));
};

export const setTransaction = transaction => dispatch => {
  dispatch({
    type: SET_TRANSACTION,
    payload: transaction
  });
};
