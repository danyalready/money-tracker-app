import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import MainContainer from "../../containers/MainContainer/index";
import ChartsContainer from "../../containers/ChartsContainer/index";
import CentralContainer from "../../containers/CentralContainer/index";
// Redux
import store from "../../store/store";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  signIn,
  signUp,
  logOut,
  getUserCredentials
} from "../../store/actions/userActions";
import {
  getTransactions,
  addTransaction,
  setTransaction,
  deleteTransaction
} from "../../store/actions/transactionActions";
// Authenticate
import Authenticate from "../Authenticate/index";
// Components
import Form from "../Form/index";
import Popup from "../Popup/index";
import History from "../History/index";
import Profile from "../Profile/index";
import PieChart from "../PieChart/index";
import LineChart from "../LineChart/index";
import Background from "../Background/index";

const index = ({
  user,
  signIn,
  signUp,
  logOut,

  transaction,
  transactions,
  addTransaction,
  setTransaction,
  deleteTransaction,
  getUserCredentials
}) => {
  useEffect(() => {
    if (localStorage.Token) {
      const decodedToken = jwtDecode(localStorage.Token);
      if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logOut());
        window.location.href = "/";
      } else {
        axios.defaults.headers.common["Authorization"] = localStorage.Token;
        getUserCredentials();
      }
    }
  }, []);

  const [popup, setPopup] = useState(false);
  const toggle = () => setPopup(!popup);
  const [popupAuth, setPopupAuth] = useState({
    show: false,
    type: null
  });
  const toggleAuth = authType =>
    setPopupAuth(prevState => ({
      show: !prevState.show,
      type: authType
    }));
  return (
    <MainContainer>
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
  );
};

index.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  transaction: PropTypes.object.isRequired,
  transactions: PropTypes.array.isRequired,

  addTransaction: PropTypes.func.isRequired,
  setTransaction: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  getUserCredentials: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(signIn(credentials)),
  signUp: credentials => dispatch(signUp(credentials)),
  logOut: () => dispatch(logOut()),

  getTransactions: () => dispatch(getTransactions()),
  addTransaction: transaction => dispatch(addTransaction(transaction)),
  setTransaction: transaction => dispatch(setTransaction(transaction)),
  deleteTransaction: id => dispatch(deleteTransaction(id)),
  getUserCredentials: () => dispatch(getUserCredentials())
});

const mapStateToProps = state => ({
  user: state.user,
  loading: state.transactions.loading,
  transaction: state.transactions.transaction,
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
