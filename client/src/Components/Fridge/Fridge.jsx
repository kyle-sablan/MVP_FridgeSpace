import React from 'react';
const { inventory } = require('../../../../data.js');

const Fridge = ({ updatePage, currentFridge }) => {
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
        {currentFridge.name}
      </div>
      <div>
        {`What is it?            How much of it?`}
      </div>
      {inventory.filter((item) => (item.fridgeId === currentFridge.id)).map((item) => (
        <div key={item.id}>
          {`${item.item}            ${item.amount}`}
        </div>
      ))}
      <button onClick={updateStock}>
        click me to update the fridge's inventory
      </button>
    </>
  );
};

export default Fridge;