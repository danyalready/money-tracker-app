import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background: #fff;
  border-radius: 2px;
`;
export const Email = styled.div`
  width: 60%;
  height: 15px;
  background: #fff;
  border-radius: 2px;
`;

export const Authenticate = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  font-size: 14px;
  color: #37474f;
  &:hover {
    opacity: 0.7;
  }
`;
