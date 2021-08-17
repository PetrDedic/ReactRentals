import styled from "styled-components";
import MicrosoftLogin from "react-microsoft-login";
import { useState } from "react";

const StyledSignButton = styled.div`
    text-align: center;
    display: grid;
    justify-items: center;
    align-items: center;

    svg {
        margin-right: 1rem;
    }
`;

const SignButton = (props) => {

    const [msalInstance, onMsalInstanceChange] = useState();

  const loginHandler = (err, data, msal) => {
    console.log(err, data);
    // some actions
    if (!err && data) {
      onMsalInstanceChange(msal);
    }
  };

  const logoutHandler = () => {
    msalInstance.logout();
  };

    return msalInstance ? (
    <button onClick={logoutHandler}>Logout</button>
  ) : (
      <StyledSignButton>
        <MicrosoftLogin clientId={"f8c7976f-3e93-482d-88a3-62a1133cbbc3"} authCallback={loginHandler} buttonTheme="dark" />
      </StyledSignButton>
  );
  };
  
  export default SignButton;