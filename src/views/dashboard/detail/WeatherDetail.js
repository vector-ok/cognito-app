import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import styles from './styles.js';

function WeatherDetail({ detail }) {
  return (
    <Grid>
      <Grid item>
        <Box sx={{ margin: 4 }}>
          <Grid container sx={styles.detailsSection}>
            <Grid>Details</Grid>
            <Grid>{/* TODO:  add image */}</Grid>
          </Grid>
          {detail.current ? (
            <Box sx={{ backgroundColor: '#BDC8BE', padding: 3 }}>
              <Typography sx={styles.city}>
                <strong>{detail?.location?.name} </strong>
              </Typography>
              <Typography sx={styles.region}>
                {detail?.location?.region}
              </Typography>
              <Typography sx={styles.detail}>
                {' '}
                <strong>Velocity </strong> {detail?.current?.vis_km}
              </Typography>
              <Typography sx={styles.detail}>
                <strong>humidity </strong> {detail?.current?.humidity}
              </Typography>
              <Typography sx={styles.detail}>
                <strong> pressure </strong> {detail?.current?.pressure_in}
              </Typography>
              <Typography sx={styles.detail}>
                <strong> speed </strong> {detail?.current?.wind_kph}{' '}
              </Typography>
              <Typography sx={styles.detail}>
                <strong> direction </strong> {detail?.current?.wind_dir}
              </Typography>
              <Typography sx={styles.detail}>
                <strong> Condition</strong> {detail?.current?.condition.text}{' '}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ backgroundColor: '#BDC8BE', padding: 3 }}>
              <h2 style={{ color: 'red' }}>No location selected!</h2>
              Select a location to get the details.
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default WeatherDetail;
