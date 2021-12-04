import React from 'react';

const Login = ({ updatePage }) => {
  const login = (e) => {
    e.preventDefault();
    updatePage('home');
  };

  return (
    <>
      <div>
        im on the login page
      </div>
      <input type='text' placeholder='FridgeSpacer123' />
      <input type='text' placeholder='****' />
      <button onClick={login}>
        login
      </button>
    </>
  );
};

export default Login;