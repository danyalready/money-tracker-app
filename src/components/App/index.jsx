import React, { useState } from "react";
import MainContainer from "../../containers/MainContainer/index";
import ChartsContainer from "../../containers/ChartsContainer/index";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addTransaction,
  setTransaction,
  deleteTransaction
} from "../../store/actions/transactionActions";
// Components
import History from "../History/index";
import Form from "../Form/index";
import PieChart from "../PieChart/index";
import LineChart from "../LineChart/index";
import Popup from "../Popup/index";
import Background from "../Background/index";

const index = ({
  addTransaction,
  setTransaction,
  deleteTransaction,
  transactions,
  transaction
}) => {
  const [popup, setPopup] = useState(false);
  const toggle = () => setPopup(!popup);
  return (
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
      <Form addTransaction={addTransaction} />
      <ChartsContainer>
        <PieChart transactions={transactions} />
        <LineChart transactions={transactions} />
      </ChartsContainer>
    </MainContainer>
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
