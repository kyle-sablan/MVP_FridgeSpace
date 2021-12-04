import React from 'react';
const { inventory } = require('../../../../data.js');

const Update = ({ updatePage, currentFridge }) => {
  const cancelUpdate = (e) => {
    e.preventDefault();
    updatePage('fridge');
  };

  const submitChange = (e) => {
    e.preventDefault();
    updatePage('fridge');
  };

  return (
    <>
      <button onClick={cancelUpdate}>
        X cancel X
      </button>
      <div>
        {`Updating ${currentFridge.name} Inventory`}
      </div>
      <div>
        {`What is it?            How much is left?        None left?`}
        {'                       (leave blank if the same)'}
      </div>
      {inventory.filter((item) => (item.fridgeId === currentFridge.id)).map((item) => (
        <div key={item.id}>
          <span>
            {item.item}
          </span>
          <input placeholder={item.amount}/>
          <input type='checkbox' />
        </div>
      ))}
      <button onClick={submitChange}>
        submit
      </button>
    </>
  );
};

export default Update;