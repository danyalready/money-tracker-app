import styled from "styled-components";

export const BallsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ball = styled.div`
  position: absolute;
  margin: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #008ecc;

  animation: runingBalls 3s ease-in-out infinite;
  animation-delay: ${({ wait }) => wait}s;
  transition: all 3s ease;
  @keyframes runingBalls {
    0% {
      left: -10%;
    }
    40% {
      left: 45%;
      transform: translateX(-45%);
    }
    60% {
      left: 55%;
      transform: translateX(-55%);
    }
    100% {
      left: 110%;
    }
  }
`;
