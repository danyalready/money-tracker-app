import React from "react";
import { CentralContainer, Stick } from "./Styles";

const index = ({ children }) => {
  return (
    <CentralContainer>
      <Stick />
      {children}
    </CentralContainer>
  );
};

export default index;
