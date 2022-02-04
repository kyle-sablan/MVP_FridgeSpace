import React from "react";
import styled from "styled-components";
import Map from "./Map.jsx";
import Banner from "./Banner.jsx";
const { API_TOKEN } = require("../../../../config.js");
const { data } = require("../../../../data.js");

const Home = ({ updatePage, currentFridge, selectFridge }) => {
  const fridgeElementClick = (fridge) => {
    selectFridge(fridge);
    updatePage("fridge");
  };

  return (
    <HomeContainer>
      <Banner user={"hello"} updatePage={updatePage} />
      <div>
        <Map
          updatePage={updatePage}
          currentFridge={currentFridge}
          selectFridge={selectFridge}
          // add for non-dev
          // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_TOKEN}`}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <FridgeView>
        Fridges within 25 mi:
        {data.map((fridge) => (
          <FridgeContainer
            onClick={() => {
              fridgeElementClick(fridge);
            }}
          >
            <div>{fridge.name}</div>
            <div>{fridge.address}</div>
            <div>{fridge.status}</div>
          </FridgeContainer>
        ))}
      </FridgeView>
    </HomeContainer>
  );
};

const FridgeView = styled.div`
  background-color: ;
`;

const FridgeContainer = styled.div`
  border: solid black;
  margin-bottom: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &: hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export default Home;
