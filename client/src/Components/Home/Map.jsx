import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
const { data } = require('../../../../data.js');

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: 32.684630, lng: -117.091330}}
    >
    {data.map((fridge) => (
      <Marker position={{lat: fridge.fridge.coordinates[0], lng: fridge.fridge.coordinates[1]}} />
    ))}
    </GoogleMap>
  );
};

const MapWrapper = withScriptjs(withGoogleMap(Map));

const MapComponent = () => {
  return (
    <MapWrapper
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default MapComponent;