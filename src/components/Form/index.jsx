import React, { useState } from "react";
import Select from "react-select";
import {
  FormContainer,
  Stick,
  FormSubContainer,
  Logo,
  Img,
  Form,
  Header,
  Input,
  Description,
  Button
} from "./Styles";
import monster from "../../static/images/monster.png";

const index = ({ addTransaction }) => {
  const options = [
    { value: "profit", label: "Profit" },
    { value: "expense", label: "Expense" }
  ];

  const [type, setType] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const typeHandle = event => setType(event);
  const nameHandle = event => setName(event.target.value);
  const dateHandle = event => setDate(event.target.value);
  const amountHandle = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAmount(event.target.value);
    }
  };
  const descriptionHandle = event => setDescription(event.target.value);
  const submitHandle = event => {
    event.preventDefault();
    const transaction = {
      type: type.value,
      name,
      date,
      amount,
      description,
      id: Math.floor(Math.random() * 1000000000)
    };
    if (transaction.amount === "" || transaction.amount === 0) {
      return console.log("ERROR: Fill the amount field!");
    }
    if (transaction.date === "") {
      return console.log("ERROR: Fill the date field!");
    }
    addTransaction(transaction);

    setType(null);
    setName("");
    setDate("");
    setAmount("");
    setDescription("");
  };

  const styles = {
    control: (provided, state) => ({
      ...provided,
      height: "40px",
      border: "1px solid #aaa",
      boxShadow: "0 !important",
      "&:hover": { boxShadow: "0 !important" }
    }),
    option: (provided, state) => ({
      ...provided,
      background: "#fff",
      color: "#37474f",
      "&:hover": { background: "#eee" }
    })
  };

  return (
    <FormContainer>
      <Stick />
      <FormSubContainer>
        <Logo>
          <Img alt="logo" src={monster} />
        </Logo>
        <Form onSubmit={submitHandle}>
          <Select
            styles={styles}
            value={type}
            onChange={typeHandle}
            options={options}
            isSearchable={false}
            placeholder="Type of transaction ..."
          />
          <Header>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameHandle}
            />
            <Input name="date" type="date" value={date} onChange={dateHandle} />
            <Input
              name="amount"
              type="text"
              placeholder="$$$"
              value={amount}
              onChange={amountHandle}
            />
          </Header>
          <Description
            name="description"
            placeholder="Description ..."
            value={description}
            onChange={descriptionHandle}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormSubContainer>
    </FormContainer>
  );
};

export default index;
