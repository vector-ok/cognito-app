import React, { useMemo } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import styles from './styles.js';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Map from './Map.js';

import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from 'express';

function MapCell(detail) {
  const { isLoaded } = useLoadScript({
    //   console.log(process.env);
    googleMapsApiKey: process.env.MAP,
    // googleMapsApiKey: 'AIzaSyDPUMkTsW44BrGYGJxVbQmUdMA1rHxcv1U',
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
