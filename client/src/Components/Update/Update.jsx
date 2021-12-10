import React, { useState } from 'react';
import styled from 'styled-components';
const { inventory } = require('../../../../data.js');

const Update = ({ updatePage, currentFridge, currentInventory, updateInventory }) => {
  const initialInventory = currentInventory;
  const [willAddItem, setAdding] = useState(false);
  const [inputItem, updateItemName] = useState('');
  const [inputAmount, updateAmount] = useState('');
  const [itemsToAdd, insertItem] = useState([]);

  const cancelUpdate = (e) => {
    e.preventDefault();
    updatePage('fridge');
    updateInventory(initialInventory);
  };

  const submitChange = (e) => {
    e.preventDefault();
    deleteItems();
    updatePage('fridge');
  };

  const markItemToDelete = (item) => {
    item.needsDeletion = !item.needsDeletion;
  };

  const deleteItems = () => {
    const newInventory = currentInventory.filter((item) => (
      !item.needsDeletion
    ));
    currentFridge.updatedAt = Date.now();
    updateInventory(newInventory);
  }

  const groceryItems = currentInventory.filter((item) => item.fridgeId === currentFridge.id).map((item) => (
    <UpdateItem key={item.id} bgColor={item.id % 2 ? 'rgb(234,225,210)' : 'white'}>
      <ItemName>
        {item.item}
      </ItemName>
      <ItemStock placeholder={item.amount} onChange={(e) => {item.amount = e.target.value;}}/>
      <ItemDelete type='checkbox' onClick={() => {markItemToDelete(item);}}/>
    </UpdateItem>
  ));

  const addItem = () => {
    var newInventory = currentInventory;
    newInventory.push({
      'id': Date.now() % 2,
      'fridgeId': currentFridge.id,
      'item': inputItem,
      'amount': inputAmount,
      'needsDeletion': false,

    });
    updateInventory(newInventory);
    setAdding(false);
  };

  return (
    <UpdatePageContainer>
      <FridgeName>
        {`Updating ${currentFridge.name} Inventory`}
      </FridgeName>
      <List>
        <UpdateItem>
          <ItemName>
            What is it?
          </ItemName>
          <div style={{'gridColumn': '2'}}>
            How much is left?
          </div>
          <div style={{'gridColumn': '3', 'width': '20px'}}>
            Delete?
          </div>
        </UpdateItem>
        {groceryItems}
        {willAddItem && (
          <UpdateItem bgColor='white'>
            <ItemNameInput onChange={(e) => {updateItemName(e.target.value);}} />
            <ItemStock onChange={(e) => {updateAmount(e.target.value);}} />
            <ItemAdd onClick={addItem}>
              +
            </ItemAdd>
          </UpdateItem>
        )}
        <button onClick={() => {setAdding(true)}}>
          Add Something to Fridge
        </button>
      </List>
      <button onClick={submitChange}>
        Submit Changes
      </button>
      <button onClick={cancelUpdate}>
        Cancel
      </button>
    </UpdatePageContainer>
  );
};


const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const UpdateItem = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 50px;
  column-gap: 20px;
  background-color: ${props => props.bgColor};
`;

const ItemName = styled.div`
  grid-column: 1;
  width: 200px;
  border-right: double;
`;

const ItemNameInput = styled.input`
  grid-column: 1;
  width: 200px;
  border: double;
  background-color: 'white'
`;


const ItemStock = styled.input`
  grid-column: 2;
  width: 200px;
`;

const ItemDelete = styled.input`
  grid-column: 3;
  width: 20px;
  justify-self: center;
`;

const ItemAdd = styled.button`
  grid-column: 3;
  width: 20px;
  justify-self: center;
  border-radius: 50%;
  padding: 0;
  border-style: solid;

  &: hover {
    transform: scale(1.05);
  }
`;

const UpdatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
`;

const FridgeName = styled.div`
  font-weight: bold;
  font-size: 24px;
  background-color: rgb(154,207,172);
  padding: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export default Update;