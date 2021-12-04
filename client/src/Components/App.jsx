import React, { useState } from 'react';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import Fridge from './Fridge/Fridge.jsx';
import Update from './Update/Update.jsx';

const App = () => {
  const [currentPage, updatePage] = useState('home');

  return (
    <div>
      {currentPage === 'login' && (
        <div>
          Login Page!
          <Login />
        </div>
      )}
      {currentPage === 'home' && (
        <div>
          Home Page!
          <Home />
        </div>
      )}
      {currentPage === 'fridge' && (
        <div>
          Fridge Page!
          <Fridge />
        </div>
      )}
      {currentPage === 'update' && (
        <div>
          Update Page!
          <Update />
        </div>
      )}
    </div>
  );
};

export default App;