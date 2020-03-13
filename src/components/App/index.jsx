import React from "react";
import MainContainer from "../../containers/MainContainer/index";
// Components
import History from "../History/index";
import Form from "../Form/index";

const index = () => {
  return (
    <MainContainer>
      <History />
      <Form />
      <h1>Charts</h1>
    </MainContainer>
  );
};

export default index;
