import React from 'react';
import styled from 'styled-components';
import { Menu, Divider, Text, Container } from '@mantine/core';

const Banner = ({ user, updatePage }) => {

  const logout = (e) => {
    e.preventDefault();
    updatePage('login');
  };

  return (
    <BannerContainer>
      <Menu
        style={{"gridColumn": 1, 'alignSelf': 'center'}}
      >
        <Menu.Item
          onClick={logout}
        >
          Logout
        </Menu.Item>
      </Menu>
      <div style={{"gridColumn": 3, 'alignSelf': 'center', 'justifySelf': 'center', 'fontSize': '22px', 'marginRight': '40px'}}>
        Welcome, bbReed!
      </div>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: grid;
  width: 100%;
  height: 7.5vh;
  background-color: rgb(154, 207, 172);
  grid-template-columns: 40px 20px 500px;
`;

export default Banner;