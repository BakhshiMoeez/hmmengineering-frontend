import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapContainer = ({ location }) => {
  return (
    <LoadScript
      googleMapsApiKey="EMPTY"
    >
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={15}
        center={location}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
