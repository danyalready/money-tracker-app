import styled from "styled-components";

export const MainContaiener = styled.div`
  position: relative;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);

  width: 1200px;
  height: 700px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #2a2a2a;
  overflow: hidden;

  display: grid;
  grid-template-columns: 30% 30% 40%;
  grid-template-rows: auto;
`;
