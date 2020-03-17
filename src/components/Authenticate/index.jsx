import React from "react";
import { Authenticate, Form, Title, InputField, Icon, Button } from "./Styles";
import Background from "../Background/index";
import user from "../../static/images/user.png";
import mail from "../../static/images/mail.png";
import lock from "../../static/images/lock.png";

const Input = ({ name, src, placeholder }) => {
  return (
    <InputField>
      <Icon>
        <img alt="icon" src={src} width="100%" height="auto" />
      </Icon>
      <input type="text" name={`${name}`} placeholder={placeholder} />
    </InputField>
  );
};

const Register = () => {
  return (
    <Form>
      <Title>Registration</Title>
      <Input name="full-name" src={user} placeholder="Full name" />
      <Input name="full-name" src={mail} placeholder="Email address" />
      <Input name="full-name" src={lock} placeholder="Password" />
      <Input name="full-name" src={lock} placeholder="Confirm password" />
      <Button>Submit</Button>
    </Form>
  );
};

const Login = () => {
  return (
    <Form>
      <Title>Login</Title>
      <Input name="full-name" src={mail} placeholder="Email address" />
      <Input name="full-name" src={lock} placeholder="Password" />
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
