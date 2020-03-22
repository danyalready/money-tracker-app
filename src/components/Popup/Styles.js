import styled from "styled-components";

export const Popup = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 1000;

  width: 400px;
  height: 250px;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
  animation: appearingPop 0.3s ease;
  @keyframes appearingPop {
    from {
      opacity: 0;
      transform: translate(-50%, 40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -20%);
    }
  }

  display: ${({ display }) => display};
`;

export const Amount = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  color: #fff;

  font-size: 25px;
  font-weight: 900;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  padding: 15px;
  background: #fff;
  color: #37474f;
`;
export const Name = styled.div`
  font-size: 19px;
  font-weight: 900;
`;
export const Description = styled.div`
  font-size: 13px;
  max-height: 100px;
  overflow: hidden;
  overflow-y: scroll;
`;
export const Date = styled.div`
  position: absolute;
  bottom: -5px;
  right: 0;
  font-size: 11px;
  font-weight: 900;
  padding: 5px;
`;

export const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 30% 70%;
`;
export const Delete = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;

  font-size: 21px;
  font-weight: 900;
  color: #e53935;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
export const DeleteButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 35px;
  padding: 15px;
  background: ${({ color }) => color};
  border-radius: 5px;
  margin: 0 5px;
  color: #fff;
  font-weight: 900;
  font-size: 14px;
  &:hover {
    opacity: 0.7;
  }
`;
