import React from 'react'
import { BallsContainer, Ball } from './Styles'

const index = () => {
  const balls = [0.1, 0.2, 0.3, 0.4]
  return (
    <BallsContainer>
      {balls.map((ball, i) => (
        <Ball key={i} wait={ball} />
      ))}
    </BallsContainer>
  )
}

export default index
