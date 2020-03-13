import React from "react";
import { Transaction, Stick, Details, Date, Content, Value } from "./Styles";

const index = ({ name, number, date, type, description }) => {
  const color = type === "profit" ? "#64dd17" : "red";
  const sign = type === "profit" ? "+" : "-";
  return (
    <Transaction>
      <Stick color={color} />
      <Details>
        <Date>
          <div className="sub-date">{date}</div>
        </Date>
        <Content>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </Content>
        <Value color={color}>
          {sign}
          {number}$
        </Value>
      </Details>
    </Transaction>
  );
};

export default index;
