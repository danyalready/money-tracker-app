import React from "react";
import {
  Profile,
  Photo,
  ProfileDetails,
  About,
  Fullname,
  Email,
  Authenticate,
  StyledLink
} from "./Styles";

const index = () => {
  return (
    <Profile>
      <Photo></Photo>
      <ProfileDetails>
        <About>
          <Fullname></Fullname>
          <Email></Email>
        </About>
        <Authenticate>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </Authenticate>
      </ProfileDetails>
    </Profile>
  );
};

export default index;
