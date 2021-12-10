import React from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
const { inventory } = require('../../../../data.js');

const Fridge = ({ updatePage, currentFridge, currentInventory }) => {
  const backToHome = (e) => {
    e.preventDefault();
    updatePage('home');
  };

  const updateStock = (e) => {
    e.preventDefault();
    updatePage('update');
  };

  const groceryItems = currentInventory.filter((item) => item.fridgeId === currentFridge.id).map((item) => (
    <Item key={item.item} bgColor={item.id % 2 ? 'rgb(234,225,210)' : 'white'}>
      <ItemName>
        {item.item}
      </ItemName>
      <ItemStock>
        {item.amount}
      </ItemStock>
    </Item>
  ));

  return (
    <FridgePageContainer>
      <FridgeName>
        {currentFridge.name}
        <div style={{'fontWeight': 'normal', 'fontSize': '16px'}}>
          {currentFridge.address}
        </div>
      </FridgeName>
      {currentFridge.note && (
        <div>
          Note from Host:
          <HostNote>
            {currentFridge.note}
          </HostNote>
        </div>
      )}
      <List>
        <Item bgColor='white'>
          <ItemName style={{'fontWeight': 'bold'}}>
            What is it?
          </ItemName>
          <ItemStock style={{'fontWeight': 'bold'}}>
            How much of it?
          </ItemStock>
        </Item>
        {groceryItems}
      </List>
      <div>
        Last updated:
        <TimeAgo date={currentFridge.updatedAt} suffix='ago'/>
      </div>
      <button onClick={updateStock}>
        Update Fridge
      </button>
      <button onClick={backToHome}>
        Back
      </button>
    </FridgePageContainer>
  );
};

const FridgePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 250px 200px;
  column-gap: 20px;
  background-color: ${props => props.bgColor};
`;

const ItemName = styled.div`
  grid-column: 1;
  width: 250px;
  border-right: double;
`;

const ItemStock = styled.div`
  grid-column: 2;
  width: 200px;
`;

const FridgeName = styled.div`
  font-weight: bold;
  font-size: 24px;
  background-color: rgb(154,207,172);
  padding: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const HostNote = styled.div`
  background-color: rgb(239,224,166);
  padding: 5px;
  border-color: rgb(206,55,56);
  border-style: solid;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  max-width: 400px;
`;

export default Fridge;

//1639083690916 LAST UPDATED TIME TO ADD