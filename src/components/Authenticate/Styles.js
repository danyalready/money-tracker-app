import styled from "styled-components";

export const Authenticate = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const Form = styled.form`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 400px;
  min-height: 250px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;

  animation: appearingAuth 0.3s ease;
  @keyframes appearingAuth {
    from {
      opacity: 0;
      transform: translate(-50%, 40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -20%);
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #008ecc;
  color: #fff;

  font-size: 25px;
  font-weight: 900;
`;

export const InputField = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 5px;
  width: 250px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #eee;

  input {
    border: none;
    padding: 5px;
    width: 90%;
  }
`;

export const Icon = styled.div`
  position: relative;
  min-width: 15px;
  height: 15px;
  margin: 5px;
  overflow: hidden;
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 5px;
  width: 250px;
  height: 35px;

  border: none;
  border-radius: 5px;
  background: #62727b;

  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`;
