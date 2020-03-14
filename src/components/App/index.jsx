import React from "react";
import MainContainer from "../../containers/MainContainer/index";
import ChartsContainer from "../../containers/ChartsContainer/index";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTransaction } from "../../store/actions/transactionActions";
// Components
import History from "../History/index";
import Form from "../Form/index";
import PieChart from "../PieChart/index";
import LineChart from "../LineChart/index";

const index = ({ addTransaction, loading, transactions }) => {
  return (
    <MainContainer>
      <History transactions={transactions} />
      <Form addTransaction={addTransaction} />
      <ChartsContainer>
        <PieChart transactions={transactions} />
        <LineChart />
      </ChartsContainer>
    </MainContainer>
  );
};

index.propTypes = {
  loading: PropTypes.bool.isRequired,
  transactions: PropTypes.array.isRequired,
  addTransaction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
});

const mapStateToProps = state => ({
  loading: state.transactions.loading,
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
