import React from "react";
import { History } from "./Styles";
import Transaction from "../Transaction/index";

const index = () => {
  return (
    <History>
      <Transaction
        name="Trading"
        number={700}
        date="7 March"
        type="profit"
        description="Trading profit for a week"
      />
      <Transaction
        name="Nice shoes"
        number={310}
        date="5 March"
        type="expense"
        description="Very cool shoes from Tommy Hilfiger"
      />
      <Transaction
        name="Apartment rent"
        number={1200}
        date="2 March"
        type="expense"
        description="Monthly expense for renting apartment"
      />
      <Transaction
        name="Salary"
        number={6000}
        date="1 March"
        type="profit"
        description="My monthly salary"
      />
    </History>
  );
};

export default index;
