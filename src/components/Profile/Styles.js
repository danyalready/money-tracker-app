import styled from "styled-components";

export const Profile = styled.div`
  position: relative;
  top: 5px;
  margin: 15px;
  padding: 10px;
  max-width: 100%;
  height: 125px;
  background: #eee;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 105px 1fr;
`;

export const Photo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 0 0 15px;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Fullname = styled.div`
  margin-bottom: 5px;
  width: 80%;
  height: 15px;
  background: ${({ background }) => background};
  border-radius: 2px;
`;
export const Email = styled.div`
  width: 60%;
  height: 15px;
  background: ${({ background }) => background};
  border-radius: 2px;
`;

export const Authenticate = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  color: #62727b;
  margin-right: 10px;
`;
