import React, { useState } from "react";
import { Authenticate, Form, Title, InputField, Icon, Button } from "./Styles";
import Background from "../Background/index";
import user from "../../static/images/user.png";
import mail from "../../static/images/mail.png";
import lock from "../../static/images/lock.png";

const Input = ({ type, name, src, placeholder, value, onChange }) => {
  return (
    <InputField>
      <Icon>
        <img alt="icon" src={src} width="100%" height="auto" />
      </Icon>
      <input
        type={type}
        name={`${name}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputField>
  );
};

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const fullnameHandle = event => setFullname(event.target.value);
  const emailHandle = event => setEmail(event.target.value);
  const passwordHandle = event => setPassword(event.target.value);
  const passwordConfirmHandle = event => setPasswordConfirm(event.target.value);
  const submitHandle = event => {
    event.preventDefault();
    const credentials = {
      fullname,
      email,
      password,
      passwordConfirm
    };
    console.log(credentials);
  };
  return (
    <Form onSubmit={submitHandle}>
      <Title>Registration</Title>
      <Input
        type="text"
        name="fullname"
        src={user}
        placeholder="Full name"
        value={fullname}
        onChange={fullnameHandle}
      />
      <Input
        type="text"
        name="email-address"
        src={mail}
        placeholder="Email address"
        value={email}
        onChange={emailHandle}
      />
      <Input
        type="password"
        name="password"
        src={lock}
        placeholder="Password"
        value={password}
        onChange={passwordHandle}
      />
      <Input
        type="password"
        name="password-confirm"
        src={lock}
        placeholder="Confirm password"
        value={passwordConfirm}
        onChange={passwordConfirmHandle}
      />
      <Button>Submit</Button>
    </Form>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandle = event => setEmail(event.target.value);
  const passwordHandle = event => setPassword(event.target.value);
  const submitHandle = event => {
    event.preventDefault();
    const credentials = {
      email,
      password
    };
    console.log(credentials);
  };
  return (
    <Form onSubmit={submitHandle}>
      <Title>Login</Title>
      <Input
        type="text"
        name="full-name"
        src={mail}
        placeholder="Email address"
        value={email}
        onChange={emailHandle}
      />
      <Input
        type="password"
        name="full-name"
        src={lock}
        placeholder="Password"
        value={password}
        onChange={passwordHandle}
      />
      <Button>Submit</Button>
    </Form>
  );
};

const index = ({ show, type, trigger }) => {
  return (
    <Authenticate show={show}>
      <Background show={show} trigger={trigger} />
      {type === "login" ? <Login /> : <Register />}
    </Authenticate>
  );
};

export default index;
