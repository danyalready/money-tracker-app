import React, { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/core'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import MainContainer from '../../containers/MainContainer'
import ChartsContainer from '../../containers/ChartsContainer'
import CentralContainer from '../../containers/CentralContainer'
// Redux
import store from '../../store/store'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  signIn,
  signUp,
  logOut,
  getUserCredentials,
} from '../../store/actions/userActions'
import {
  getTransactions,
  addTransaction,
  setTransaction,
  deleteTransaction,
} from '../../store/actions/transactionActions'
// Authenticate
import Authenticate from '../Authenticate'
// Components
import Form from '../Form'
import Popup from '../Popup'
import History from '../History'
import Profile from '../Profile'
import PieChart from '../PieChart'
import LineChart from '../LineChart'
import Background from '../Background'
import LoadingBalls from '../LoadingBalls'
import { Toast } from '../Toast'

const index = ({
  user,
  signIn,
  signUp,
  logOut,
  loading,

  transaction,
  transactions,
  addTransaction,
  setTransaction,
  deleteTransaction,
  getUserCredentials,
}) => {
  useEffect(() => {
    if (localStorage.Token) {
      const decodedToken = jwtDecode(localStorage.Token)
      if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logOut())
        window.location.href = '/'
      } else {
        axios.defaults.headers.common['Authorization'] = localStorage.Token
        getUserCredentials()
      }
    }
  }, [])

  const [popup, setPopup] = useState(false)
  const [popupAuth, setPopupAuth] = useState({
    show: false,
    type: null,
  })

  const toggle = () => setPopup(!popup)
  const toggleAuth = (authType) =>
    setPopupAuth((prevState) => ({
      show: !prevState.show,
      type: authType,
    }))

  const toast = useToast()
  useEffect(() => {
    if (user.error) {
      return toast({
        title: 'An error occurred.',
        description: user.error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [user.error])

  useEffect(() => {
    if (user.errors) {
      Object.keys(user.errors).forEach((error) => {
        toast({
          title: error,
          description: user.errors[error],
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
      })
    }
  }, [user.errors])

  return (
    <MainContainer>
      {loading && <LoadingBalls />}
      <Background show={popup} trigger={toggle} />
      <Popup
        show={popup}
        trigger={toggle}
        transaction={transaction}
        deleteTransaction={deleteTransaction}
      />

      <Authenticate
        show={popupAuth.show}
        type={popupAuth.type}
        trigger={toggleAuth}
        signIn={signIn}
        signUp={signUp}
      />

      <History
        transactions={transactions}
        trigger={toggle}
        setTransaction={setTransaction}
      />
      <CentralContainer>
        <Profile trigger={toggleAuth} user={user} logOut={logOut} />
        <Form addTransaction={addTransaction} />
      </CentralContainer>
      <ChartsContainer>
        <PieChart transactions={transactions} />
        <LineChart transactions={transactions} />
      </ChartsContainer>
    </MainContainer>
  )
}

index.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  transaction: PropTypes.object.isRequired,
  transactions: PropTypes.array.isRequired,

  addTransaction: PropTypes.func.isRequired,
  setTransaction: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  getUserCredentials: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (credentials) => dispatch(signIn(credentials)),
  signUp: (credentials) => dispatch(signUp(credentials)),
  logOut: () => dispatch(logOut()),

  getTransactions: () => dispatch(getTransactions()),
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  setTransaction: (transaction) => dispatch(setTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  getUserCredentials: () => dispatch(getUserCredentials()),
})

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.ui.loading,
  transaction: state.transactions.transaction,
  transactions: state.transactions.transactions,
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
