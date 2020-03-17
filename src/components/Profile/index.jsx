import React from "react";
import {
  Profile,
  Photo,
  ProfileDetails,
  About,
  Fullname,
  Email,
  Authenticate,
  Button
} from "./Styles";

const index = ({ trigger }) => {
  console.log(trigger);
  return (
    <Profile>
      <Photo></Photo>
      <ProfileDetails>
        <About>
          <Fullname></Fullname>
          <Email></Email>
        </About>
        <Authenticate>
          <Button onClick={() => trigger("login")}>Login</Button>
          <Button onClick={() => trigger("register")}>Register</Button>
        </Authenticate>
      </ProfileDetails>
    </Profile>
  );
};

export default index;
