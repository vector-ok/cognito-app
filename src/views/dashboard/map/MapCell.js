import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import styles from './styles.js';
import { useLoadScript } from '@react-google-maps/api';
import Map from './Map.js';

function MapCell(detail) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP,
  });
  if (!isLoaded) {
    return <div>loading...</div>;
  }
  return (
    <Grid sx={{ width: '100%', height: '100%' }}>
      <Map detail={detail} />
    </Grid>
  );
}

export default MapCell;
