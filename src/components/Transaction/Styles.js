import styled from "styled-components";

export const Transaction = styled.div`
  margin: 5px 0;
  height: 60px;
  background: #eee;
  border-radius: 5px;

  display: flex;
  align-items: center;
  color: #37474f;
`;

export const Stick = styled.div`
  width: 3px;
  height: 100%;
  background: ${({ color }) => color};
`;

export const Details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

export const Date = styled.div`
  margin-left: 5px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px #bbdefb;
  .sub-date {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  .name {
    font-size: 17px;
    font-weight: 900;
  }
  .description {
    font-size: 11px;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
  color: ${({ color }) => color};
`;
