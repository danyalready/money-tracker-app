import React from "react";
import { History } from "./Styles";
import Transaction from "../Transaction/index";

const Transactions = ({ transactions, trigger, setTransaction }) =>
  transactions.map(transaction => (
    <Transaction
      key={transaction.id}
      transaction={transaction}
      trigger={trigger}
      setTransaction={setTransaction}
    />
  ));

const index = ({ transactions, trigger, setTransaction }) => {
  return (
    <History>
      <Transactions
        transactions={transactions}
        trigger={trigger}
        setTransaction={setTransaction}
      />
    </History>
  );
};

export default index;
