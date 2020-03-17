import styled from "styled-components";

export const CentralContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Stick = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 80%;
  background: #aaa;
`;
