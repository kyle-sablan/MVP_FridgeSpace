import React from 'react';
import Map from './Map.jsx';

const Home = ({ updatePage, currentFridge, selectFridge }) => {

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
        <Map
          updatePage={updatePage}
          currentFridge={currentFridge}
          selectFridge={selectFridge}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div>
        This is the bottom section for fridges on the map in a different viewing type
      </div>
      <div>
        this is the bottom banner for the app
      </div>
    </>
  );
};

export default Home;