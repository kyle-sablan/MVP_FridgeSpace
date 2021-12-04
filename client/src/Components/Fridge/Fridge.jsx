import React from 'react';

const Fridge = ({ updatePage }) => {
  const backToHome = (e) => {
    e.preventDefault();
    updatePage('home');
  };

  const updateStock = (e) => {
    e.preventDefault();
    updatePage('update');
  };

  return (
    <>
      <button onClick={backToHome}>
        back button
      </button>
      <div>
        im on the fridge page
      </div>
      <button onClick={updateStock}>
        click me to update the fridge's inventory
      </button>
    </>
  );
};

export default Fridge;