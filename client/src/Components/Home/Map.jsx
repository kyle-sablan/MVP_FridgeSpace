import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { Badge } from '@mantine/core';
const { data } = require('../../../../data.js');

const Map = withScriptjs(withGoogleMap(({ updatePage, currentFridge, selectFridge }) => {

  const changeToFridge = (e) => {
    e.preventDefault();
    updatePage('fridge');
  };

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: 32.684630, lng: -117.091330}}
    >
    {data.map((fridge) => (
      <Marker
        key={fridge.id}
        position={{lat: fridge.coordinates[0], lng: fridge.coordinates[1]}}
        onClick={() => {
          selectFridge(fridge);
        }}
      />
    ))}
    {currentFridge && (
      <InfoWindow
        position={{lat: currentFridge.coordinates[0] + 0.01, lng: currentFridge.coordinates[1]}}
        onCloseClick={() => {
          selectFridge(null);
        }}
      >
        <div>
          <div style={{'fontWeight': 'bold', 'fontSize': '18px'}}>
            {currentFridge.name}
          </div>
          <div>
            {currentFridge.address}
          </div>
          <Badge style={{
            'backgroundColor': currentFridge.active ? 'rgb(154,207,172)' : 'rgb(206,55,56)',
            'color': 'black'
          }}
          >
            {currentFridge.active ? 'Working' : 'Not working'}
          </Badge>
          <div>
            {currentFridge.active && (
              <button onClick={changeToFridge}>
                {`Go to ${currentFridge.name}'s page`}
              </button>
            )
            }
          </div>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
}));

export default Map;

// => {
//   const [currentFridge, selectFridge] = useState(null);
//   return (
//     <GoogleMap
//       defaultZoom={11}
//       defaultCenter={{lat: 32.684630, lng: -117.091330}}
//     >
//     {data.map((fridge) => (
//       <Marker
//         key={fridge.id}
//         position={{lat: fridge.coordinates[0], lng: fridge.coordinates[1]}}
//         onClick={() => {
//           selectFridge(fridge);
//         }}
//       />
//     ))}
//     {currentFridge && (
//       <InfoWindow
//         position={{lat: currentFridge.coordinates[0] + 0.01, lng: currentFridge.coordinates[1]}}
//         onCloseClick={() => {
//           selectFridge(null);
//         }}
//       >
//         <div>
//           <div>
//             {currentFridge.name}
//           </div>
//           <button>
//             {`Go to ${currentFridge.name}'s page`}
//           </button>
//         </div>
//       </InfoWindow>
//     )}
//     </GoogleMap>
//   );
// };

// const MapWrapper = withScriptjs(withGoogleMap(Map));

// const MapComponent = () => {
//   return (
//     <MapWrapper
//       googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `400px` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   );
// };

// export default MapComponent;