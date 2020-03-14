import styled from "styled-components";

export const FormContainer = styled.div`
  color: #37474f;
`;

export const Stick = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 80%;
  background: #37474f;
  opacity: 0.4;
`;

export const FormSubContainer = styled.div`
  margin: 15px;
`;

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  animation: fly 2s ease-in-out alternate infinite;

  @keyframes fly {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Form = styled.form`
  position: relative;
  width: 95%;
  height: 400px;
  background: #eee;
  border-radius: 5px;
  color: #37474f;
`;
export const Header = styled.div`
  margin: 7px 0;
  display: grid;
  grid-template-columns: 30% 40% 30%;

  input:nth-child(1) {
    font-weight: 900;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-weight: 400;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-weight: 400;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      font-weight: 400;
    }
  }
  input:nth-child(2) {
    text-align: center;
    font-size: 9px;
    margin: 0 5px;
  }
`;
export const Input = styled.input`
  border: 1px solid #aaa;
  border-radius: 5px;
  height: 40px;
  padding: 5px;
`;
export const Description = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 5px;
`;
export const Button = styled.button`
  cursor: pointer;
  margin: 7px 0;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #62727b;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`;
