import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainContainer from "../../containers/MainContainer/index";
import ChartsContainer from "../../containers/ChartsContainer/index";
import CentralContainer from "../../containers/CentralContainer/index";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addTransaction,
  setTransaction,
  deleteTransaction
} from "../../store/actions/transactionActions";
// Components
import Form from "../Form/index";
import Popup from "../Popup/index";
import History from "../History/index";
import Profile from "../Profile/index";
import PieChart from "../PieChart/index";
import LineChart from "../LineChart/index";
import Background from "../Background/index";

const index = ({
  addTransaction,
  setTransaction,
  deleteTransaction,
  transactions,
  transaction
}) => {
  const [popup, setPopup] = useState(false);
  // const [link, setLink] = useState(false);
  const toggle = () => setPopup(!popup);
  // const toggleLink = () => setLink(!link);
  return (
    <Router>
      <MainContainer>
        <Background show={popup} trigger={toggle} />
        <Popup
          show={popup}
          trigger={toggle}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
        <History
          transactions={transactions}
          trigger={toggle}
          setTransaction={setTransaction}
        />
        <CentralContainer>
          <Profile />
          <Form addTransaction={addTransaction} />
        </CentralContainer>
        <ChartsContainer>
          <PieChart transactions={transactions} />
          <LineChart transactions={transactions} />
        </ChartsContainer>
      </MainContainer>
    </Router>
  );
};

index.propTypes = {
  loading: PropTypes.bool.isRequired,
  transactions: PropTypes.array.isRequired,
  addTransaction: PropTypes.func.isRequired,
  setTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction)),
  setTransaction: transaction => dispatch(setTransaction(transaction)),
  deleteTransaction: id => dispatch(deleteTransaction(id))
});

const mapStateToProps = state => ({
  loading: state.transactions.loading,
  transactions: state.transactions.transactions,
  transaction: state.transactions.transaction
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
