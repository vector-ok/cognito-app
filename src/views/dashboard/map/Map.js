import React, { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import styles from '../styles';

function Map({ detail }) {
  let latitude = detail?.details?.location?.lat;
  let longitude = detail?.details?.location?.lon;
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={styles.fullSize}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
