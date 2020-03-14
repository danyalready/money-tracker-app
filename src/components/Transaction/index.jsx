import React from "react";
import dateFormat from "dateformat";
import { Transaction, Stick, Details, Date, Content, Value } from "./Styles";

const index = ({ transaction }) => {
  const { amount, date, description, name, type } = transaction;
  const dateF = dateFormat(date, "dd mmmm");

  const color = type === "profit" ? "#64dd17" : "red";
  const sign = type === "profit" ? "+" : "-";
  return (
    <Transaction>
      <Stick color={color} />
      <Details>
        <Date>
          <div className="sub-date">{dateF}</div>
        </Date>
        <Content>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </Content>
        <Value color={color}>
          {sign}
          {amount}$
        </Value>
      </Details>
    </Transaction>
  );
};

export default index;
