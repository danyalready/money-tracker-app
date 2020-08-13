import React from 'react'
import {
  Popup,
  Amount,
  Content,
  Name,
  Description,
  Date,
  Footer,
  Delete,
  Buttons,
  DeleteButton,
} from './Styles'

const index = ({ show, transaction, trigger, deleteTransaction }) => {
  const { amount, name, description, date, type } = transaction.transaction
    ? transaction.transaction
    : {}
  const sign = type === 'profit' ? '+' : '-'
  const color = type === 'profit' ? '#64dd17' : '#e53935'
  const removeTransaction = () => {
    deleteTransaction(transaction.id)
    trigger()
  }
  return (
    <Popup display={show ? 'block' : 'none'}>
      <Amount color={color}>
        {sign}
        {amount}$
      </Amount>
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Date>{date}</Date>
      </Content>
      <Footer>
        <Delete>Delete:</Delete>
        <Buttons>
          <DeleteButton color='#64dd17' onClick={removeTransaction}>
            Yes
          </DeleteButton>
          <DeleteButton color='#e53935' onClick={trigger}>
            No
          </DeleteButton>
        </Buttons>
      </Footer>
    </Popup>
  )
}

export default index
