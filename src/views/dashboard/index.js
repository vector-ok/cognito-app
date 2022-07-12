import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Alert,
  Stack,
  Typography,
  Slide,
  LinearProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import styles from './styles';
import Weather from './weather/Weather';
import MapCell from './map/MapCell';
import WeatherDetail from './detail/WeatherDetail';
import axios from 'axios';

Amplify.configure(awsconfig);

export default function Dashboard() {
  const [data, setData] = useState();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetchData();
  }, [detail]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/place');
      setData(response.data);
    } catch (error) {
      console.error('error is ', error);
    }
  };

  const handleDetail = (state) => {
    setDetail(state);
  };
  console.log('detail is ', detail);

  return (
    <ThemeProvider theme={styles}>
      <Box style={styles.header}>
        <Typography>Welcome</Typography>
      </Box>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={1} square>
          <Box sx={styles.sensorBox}>
            <Box sx={styles.sensorBoxHeader}>Weather</Box>
            <Grid container>
              <Grid item xs={9}>
                <Weather data={data} handleDetail={handleDetail} />
              </Grid>
              <Grid sx={styles.verticalLine} xs={false} />
              <Grid item xs={12} sm={3}>
                <MapCell details={detail} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4}>
          <WeatherDetail detail={detail} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
