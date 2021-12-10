import React from 'react';
import styled from 'styled-components';
import { Button } from '@mantine/core';

const Login = ({ updatePage }) => {
  const login = (e) => {
    e.preventDefault();
    updatePage('home');
  };

  return (
    <LoginPage>
      <Name>
        FridgeSpace
      </Name>
      <UsernameContainer>
        <UserInput type='text' placeholder='  Username' />
      </UsernameContainer>
      <PasswordContainer>
        <UserInput type='password' placeholder='  Password' />
      </PasswordContainer>
      <LoginButton onClick={login}>
        login
      </LoginButton>
      {/* <a style={{'gridRow': '7'}}>
        Not Registered? Create an account!
      </a> */}
    </LoginPage>
  );
};

const LoginButton = styled.button`
  background-color: #EFE0A6;
  border-radius: 25px;
  border-style: none;
  width: 12vw;
  height: 7.5vh;
  grid-row: 6;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  &: hover {
    transform: scale(1.05);
  }
`;

const UsernameContainer = styled.div`
  grid-row: 2;
`;

const PasswordContainer = styled.div`
  grid-row: 4;
`;

const UserInput = styled.input`
  width: 12vw;
  border-radius: 10px;
`;

const LoginPage = styled.div`
  display: grid;
  grid-template-rows: 20vh 4vh 1vh 4vh 1vh 5vh;
`;

const Name = styled.div`
  grid-row: 1;
  font-size: 36px;
  align-self: center;
  justify-self: center;
`;

export default Login;