import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  Form,
  Input,
  Button,
  Header,
  Description,
  FormContainer,
  FormSubContainer,
} from "./Styles";

const index = ({ addTransaction }) => {
  const getCurrentDate = () => {
    var date = new Date();
    var formatedDate = `${date.getFullYear()}-${("0"+(date.getMonth()+1)).slice(-2)}-${date.getDate()}`;
    return formatedDate;
  };

  const options = [
    { value: "profit", label: "Profit" },
    { value: "expense", label: "Expense" },
  ];

  const [type, setType] = useState(options[1]);
  const [name, setName] = useState("");
  const [date, setDate] = useState(getCurrentDate());
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const typeHandle = (event) => setType(event);
  const nameHandle = (event) => setName(event.target.value);
  const dateHandle = (event) => setDate(event.target.value);
  const amountHandle = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAmount(event.target.value);
    }
  };
  const descriptionHandle = (event) => setDescription(event.target.value);
  const submitHandle = (event) => {
    event.preventDefault();
    const transaction = {
      type: type.value,
      name,
      date,
      amount,
      description,
    };
    if (transaction.amount === "" || transaction.amount === 0) {
      return console.log("ERROR: Fill the amount field!");
    }
    if (transaction.date === "") {
      return console.log("ERROR: Fill the date field!");
    }
    addTransaction(transaction);

    setType(options[1]);
    setName("");
    setDate(getCurrentDate());
    setAmount("");
    setDescription("");
  };

  const styles = {
    control: (provided, state) => ({
      ...provided,
      height: "40px",
      border: "1px solid #aaa",
      boxShadow: "0 !important",
      "&:hover": { boxShadow: "0 !important" },
    }),
    option: (provided, state) => ({
      ...provided,
      background: "#fff",
      color: "#37474f",
      "&:hover": { background: "#eee" },
    }),
  };

  return (
    <FormContainer>
      <FormSubContainer>
        <Form onSubmit={submitHandle}>
          <Select
            styles={styles}
            defaultValue={{label: "Expense", value: "expense"}}
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
            <Input name="date" type="date" defaultValue={date} value={date} onChange={dateHandle} />
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
