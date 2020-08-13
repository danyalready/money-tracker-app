import {
  SET_ERRORS,
  SET_LOADING,
  SET_UNLOADING,
  SET_CREDENTIALS,
  SET_UNAUTHENTICATED,
} from '../types'
import axios from 'axios'
import { getTransactions } from './transactionActions'

export const signIn = (credentials) => (dispatch) => {
  dispatch({ type: SET_LOADING })
  axios
    .post('/signIn', credentials)
    .then((res) => setAuthorizationHeader(res.data.token))
    .then(() =>
      axios
        .get('/user')
        .then((credentials) =>
          dispatch({ type: SET_CREDENTIALS, payload: credentials.data })
        )
        .then(() => dispatch(getTransactions()))
    )
    .catch((err) => {
      dispatch({ type: SET_UNLOADING })
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const signUp = (credentials) => (dispatch) => {
  dispatch({ type: SET_LOADING })
  axios
    .post('/signUp', credentials)
    .then((res) => setAuthorizationHeader(res.data.token))
    .then(() => {
      axios
        .get('/user')
        .then((credentials) =>
          dispatch({ type: SET_CREDENTIALS, payload: credentials.data })
        )
        .then(() => dispatch(getTransactions()))
    })
    .catch((err) => {
      dispatch({ type: SET_UNLOADING })
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const logOut = () => (dispatch) => {
  dispatch({ type: SET_LOADING })
  localStorage.removeItem('Token')
  delete axios.defaults.headers.common['Authorization']
  dispatch({ type: SET_UNAUTHENTICATED, payload: {} })
  window.location.href = '/'
}

export const getUserCredentials = () => (dispatch) => {
  dispatch({ type: SET_LOADING })
  axios
    .get('/user')
    .then((credentials) =>
      dispatch({ type: SET_CREDENTIALS, payload: credentials.data })
    )
    .then(() => dispatch(getTransactions()))
    .catch((err) => console.log(err))
}

const setAuthorizationHeader = (token) => {
  const Token = `Bearer ${token}`
  localStorage.setItem('Token', Token)
  axios.defaults.headers.common['Authorization'] = Token
}
