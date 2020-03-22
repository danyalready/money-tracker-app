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

const index = ({ trigger, user, logOut }) => {
  const { authenticated, credentials } = user;
  return (
    <Profile>
      <Photo></Photo>
      <ProfileDetails>
        <About>
          <Fullname background={authenticated ? "#eee" : "#fff"}>
            {credentials.fullname}
          </Fullname>
          <Email background={authenticated ? "#ee" : "#fff"}>
            {credentials.email}
          </Email>
        </About>
        <Authenticate>
          {authenticated ? (
            <Button onClick={logOut}>Log out</Button>
          ) : (
            <>
              <Button onClick={() => trigger("login")}>Login</Button>
              <Button onClick={() => trigger("register")}>Register</Button>
            </>
          )}
        </Authenticate>
      </ProfileDetails>
    </Profile>
  );
};

export default index;
