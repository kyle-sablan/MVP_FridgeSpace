import React from 'react';

const Home = ({ updatePage }) => {

  const changeToFridge = (e) => {
    e.preventDefault();
    updatePage('fridge');
  };

  const logout = (e) => {
    e.preventDefault();
    updatePage('login');
  }

  return (
    <>
      <button onClick={logout}>
        click me to logout
      </button>
      <div>
        Welcome, user!
      </div>
      <div>
        This is the map that has the markers for current fridges
      </div>
      <div>
        This is the bottom section for fridges on the map in a different viewing type
      </div>
      <button onClick={changeToFridge}>
        click me to go to fridge page
      </button>
      <div>
        this is the bottom banner for the app
      </div>
    </>
  );
};

export default Home;