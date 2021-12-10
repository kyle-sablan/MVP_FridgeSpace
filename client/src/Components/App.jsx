import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import Fridge from './Fridge/Fridge.jsx';
import Update from './Update/Update.jsx';
const { inventory } = require('../../../data.js');

const App = () => {
  const [currentPage, updatePage] = useState('login');
  const [currentFridge, selectFridge] = useState(null);
  const [currentInventory, updateInventory] = useState(inventory);

  return (
    <Background>
      <BackgroundColorOverlay>
        <AppContainer>
          {currentPage === 'login' && (
            <div>
              <Login updatePage={updatePage} />
            </div>
          )}
          {currentPage === 'home' && (
            <div>
              <Home
                updatePage={updatePage}
                currentFridge={currentFridge}
                selectFridge={selectFridge}
              />
            </div>
          )}
          {currentPage === 'fridge' && (
            <div>
              <Fridge
                updatePage={updatePage}
                currentFridge={currentFridge}
                currentInventory={currentInventory}
              />
            </div>
          )}
          {currentPage === 'update' && (
            <div>
              <Update
                updatePage={updatePage}
                currentFridge={currentFridge}
                currentInventory={currentInventory}
                updateInventory={updateInventory}
              />
            </div>
          )}
        </AppContainer>
      </BackgroundColorOverlay>
    </Background>
  );
};

const AppContainer = styled.div`
  display: flex;
  background-color: rgb(115, 207, 217);
  justify-content: center;
  width: 45vw;
  height: auto;
  min-height: 100vh;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const BackgroundColorOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(234, 225, 210, 0.6);
  display: flex;
  justify-content: center;
  padding: 0;
  border: 0;
  margin: 0;
`;

const Background = styled.div`
  background-image: url("https://media.istockphoto.com/vectors/food-seamless-background-vector-id515373062?k=20&m=515373062&s=612x612&w=0&h=OKgPNjR_b4cjyaPBTxA8UsfkBGC_W9OuBv_2m-GbkHw=");
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  margin: 0;
`;

// #73CFD9, #EFE0A6,
const colors = ['rgb(115,207,217)', 'rgb(239,224,166)', 'rgb(154,207,172)', 'rgb(206,55,56)', 'rgb(234,225,210)']
export default App;