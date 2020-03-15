import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 900;
  animation: appearingBackground 0.4s ease;
  @keyframes appearingBackground {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.3;
    }
  }

  display: ${({ display }) => display};
`;
