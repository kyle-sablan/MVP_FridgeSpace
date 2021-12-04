import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import Fridge from './Fridge/Fridge.jsx';
import Update from './Update/Update.jsx';

const App = () => {
  const [currentPage, updatePage] = useState('home');

  return (
    <AppContainer>
      {currentPage === 'login' && (
        <div>
          <Login updatePage={updatePage} />
        </div>
      )}
      {currentPage === 'home' && (
        <div>
          <Home updatePage={updatePage} />
        </div>
      )}
      {currentPage === 'fridge' && (
        <div>
          <Fridge updatePage={updatePage} />
        </div>
      )}
      {currentPage === 'update' && (
        <div>
          <Update updatePage={updatePage} />
        </div>
      )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;