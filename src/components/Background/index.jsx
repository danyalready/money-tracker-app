import React from 'react'
import { Background } from './Styles'

const index = ({ show, trigger }) => {
  return <Background display={show ? 'block' : 'none'} onClick={trigger} />
}

export default index
