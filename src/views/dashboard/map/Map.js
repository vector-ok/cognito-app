import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from '../styles';

function Map({ detail }) {
  let latitude = detail?.details?.location?.lat;
  let longitude = detail?.details?.location?.lon;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: latitude, lng: longitude }}
      mapContainerStyle={{ width: '100%', height: '100%' }}
    >
      <Marker position={{ lat: latitude, lng: -longitude }} />
    </GoogleMap>
  );
}

export default Map;
