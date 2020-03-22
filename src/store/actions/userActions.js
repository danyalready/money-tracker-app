import {
  SET_ERRORS,
  LOADING_USER,
  SET_UNAUTHENTICATED,
  SET_CREDENTIALS
} from "../types";
import axios from "axios";
import { getTransactions } from "./transactionActions";

export const signIn = credentials => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/signIn", credentials)
    .then(res => setAuthorizationHeader(res.data.token))
    .then(() =>
      axios
        .get("/user")
        .then(credentials =>
          dispatch({ type: SET_CREDENTIALS, payload: credentials.data })
        )
    )
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const signUp = credentials => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/signUp", credentials)
    .then(res => setAuthorizationHeader(res.data.token))
    .then(() => {
      axios
        .get("/user")
        .then(credentials =>
          dispatch({ type: SET_CREDENTIALS, payload: credentials.data })
        );
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logOut = () => dispatch => {
  localStorage.removeItem("Token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED, payload: {} });
  window.location.href = "/";
};

export const getUserCredentials = () => dispatch => {
  axios
    .get("/user")
    .then(credentials =>
      dispatch({ type: SET_CREDENTIALS, payload: credentials.data })
    )
    .then(() => dispatch(getTransactions()))
    .catch(err => console.log(err));
};

const setAuthorizationHeader = token => {
  const Token = `Bearer ${token}`;
  localStorage.setItem("Token", Token);
  axios.defaults.headers.common["Authorization"] = Token;
};
