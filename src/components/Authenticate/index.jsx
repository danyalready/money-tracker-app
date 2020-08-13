import React from 'react'
import { useFormInput } from '../../hooks'
import { Authenticate, Form, Title, InputField, Icon, Button } from './Styles'
import Background from '../Background'
import user from '../../static/images/user.png'
import mail from '../../static/images/mail.png'
import lock from '../../static/images/lock.png'

const Input = ({ type, name, imgSrc, placeholder, value, onChange }) => {
  return (
    <InputField>
      <Icon>
        <img alt='icon' src={imgSrc} width='auto' height='100%' />
      </Icon>
      <input
        type={type}
        name={`${name}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputField>
  )
}

const Register = ({ signUp, trigger }) => {
  const fullname = useFormInput('')
  const email = useFormInput('')
  const password = useFormInput('')
  const passwordConfirm = useFormInput('')

  const submitHandle = (event) => {
    event.preventDefault()
    const credentials = {
      fullname: fullname.value,
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
    }
    signUp(credentials)
    trigger()
  }

  return (
    <Form onSubmit={submitHandle}>
      <Title>Registration</Title>
      <Input
        type='text'
        name='fullname'
        imgSrc={user}
        placeholder='Full name'
        {...fullname}
      />
      <Input
        type='email'
        name='email-address'
        imgSrc={mail}
        placeholder='Email address'
        {...email}
      />
      <Input
        type='password'
        name='password'
        imgSrc={lock}
        placeholder='Password'
        {...password}
      />
      <Input
        type='password'
        name='password-confirm'
        imgSrc={lock}
        placeholder='Confirm password'
        {...passwordConfirm}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

const Login = ({ signIn, trigger }) => {
  const email = useFormInput('')
  const password = useFormInput('')

  const submitHandle = (event) => {
    event.preventDefault()
    const credentials = {
      email: email.value,
      password: password.value,
    }
    signIn(credentials)
    trigger()
  }

  return (
    <Form onSubmit={submitHandle}>
      <Title>Login</Title>
      <Input
        type='email'
        name='full-name'
        imgSrc={mail}
        placeholder='Email address'
        {...email}
      />
      <Input
        type='password'
        name='full-name'
        imgSrc={lock}
        placeholder='Password'
        {...password}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

const index = ({ show, type, trigger, signIn, signUp }) => {
  return (
    <Authenticate show={show}>
      <Background show={show} trigger={trigger} />
      {type === 'login' ? (
        <Login signIn={signIn} trigger={trigger} />
      ) : (
        <Register signUp={signUp} trigger={trigger} />
      )}
    </Authenticate>
  )
}

export default index
