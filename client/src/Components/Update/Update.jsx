import React from 'react';

const Update = ({ updatePage }) => {
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
        im on the update page
      </div>
      <button onClick={submitChange}>
        submit
      </button>
    </>
  );
};

export default Update;