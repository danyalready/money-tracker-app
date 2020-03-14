import React from "react";
import { History } from "./Styles";
import Transaction from "../Transaction/index";

const Transactions = ({ transactions }) =>
  transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));

const index = ({ transactions }) => {
  return (
    <History>
      <Transactions transactions={transactions} />
    </History>
  );
};

export default index;
