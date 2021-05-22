import React from 'react'
import { useFormInput } from '../../hooks'
import Select from 'react-select'
import {
  Form,
  Input,
  Button,
  Header,
  Description,
  FormContainer,
  FormSubContainer,
} from './Styles'

const index = ({ addTransaction }) => {
  const getCurrentDate = () => {
    var date = new Date()
    var formatedDate = `${date.getFullYear()}-${(
      '0' +
      (date.getMonth() + 1)
    ).slice(-2)}-${date.getDate()}`
    return formatedDate
  }

  const options = [
    { value: 'profit', label: 'Profit' },
    { value: 'expense', label: 'Expense' },
  ]

  const type = useFormInput(options[1], 'select')
  const name = useFormInput('')
  const date = useFormInput(getCurrentDate())
  const amount = useFormInput('', 'number')
  const description = useFormInput('')

  const submitHandle = (event) => {
    event.preventDefault()
    const transaction = {
      type: type.value,
      name: name.value,
      date: date.value,
      amount: amount.value,
      description: description.value,
    }
    if (transaction.amount === '' || transaction.amount === 0) {
      return console.log('ERROR: Fill the amount field!')
    }
    if (transaction.date === '') {
      return console.log('ERROR: Fill the date field!')
    }
    addTransaction(transaction)

    type.reset(options[1])
    name.reset('')
    date.reset(getCurrentDate())
    amount.reset('')
    description.reset('')
  }

  const styles = {
    control: (provided) => ({
      ...provided,
      height: '40px',
      border: '1px solid #aaa',
      boxShadow: '0 !important',
      '&:hover': { boxShadow: '0 !important' },
    }),
    option: (provided) => ({
      ...provided,
      background: '#fff',
      color: '#37474f',
      '&:hover': { background: '#eee' },
    }),
  }

  return (
    <FormContainer>
      <FormSubContainer>
        <Form onSubmit={submitHandle}>
          <Select
            styles={styles}
            defaultValue={options[1]}
            {...type}
            onChange={e => { e.type = 'select', type.onChange(e)}}
            options={options}
            isSearchable={false}
            placeholder='Type of transaction ...'
          />
          <Header>
            <Input name='name' type='text' placeholder='Name' {...name} />
            <Input name='date' type='date' defaultValue={date} {...date} />
            <Input name='amount' type='number' placeholder='$$$' {...amount} />
          </Header>
          <Description
            name='description'
            placeholder='Description ...'
            {...description}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </FormSubContainer>
    </FormContainer>
  )
}

export default index
