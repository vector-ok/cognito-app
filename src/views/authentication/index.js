import React, { useState } from 'react';
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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';
import styles from './styles';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import Signup from '../signup';
import Login from '../login';
import ConfirmEmail from '../confirmEmail';

Amplify.configure(awsconfig);

export default function Authentication() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState(false);
  const [checked, setChecked] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    loginEmail: '',
    signupEmail: '',
    password: '',
  });

  const checkUser = (state) => {
    setUser(state);
    console.log('user is ', user);
  };

  const handleSuccess = (state) => {
    setSignupSuccess(state);
  };

  const handleMessage = (state) => {
    setMessage(state);
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleInputs = (e) => {
    inputs[e.target.name] = e.target.value;
    setInputs({ ...inputs });
  };

  //   const handleSignup = async (event) => {
  //     event.preventDefault();
  //     if (inputs.password === '') {
  //       inputs.password = '12345678';
  //     }
  //     try {
  //       const response = await Auth.signUp(inputs.signupEmail, inputs.password);
  //       const username = response.user.username;
  //       setSignupSuccess(true);
  //       setMessage(
  //         `SUCCESS! You just signed up ${username}. Your default password is 12345678. Proceed to Login.`
  //       );
  //       console.log('response is ', response);
  //     } catch (error) {
  //       setSignupSuccess(false);
  //       setMessage(`ERROR ${error}`);
  //     }
  //   };

  const handleLogin = async (event) => {
    event.preventDefault();
    inputs[event.target.name] = event.target.value;
    setInputs({ ...inputs });

    const response = await Auth.signIn(inputs.loginEmail, inputs.password);
    console.log('response is ', response);
    console.log('data is ', inputs.loginEmail);
    console.log('data is ', inputs.password);
  };

  return (
    <ThemeProvider theme={styles}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={styles.formBody}>
            <Box sx={styles.titleBox}>
              <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={styles.title}>
                Sensegrass
              </Typography>
            </Box>
            <Box>
              <Login
                handleSuccess={handleSuccess}
                handleMessage={handleMessage}
              />
              {message.length > 0 ? (
                <Slide
                  direction="down"
                  in={message.length > 0}
                  mountOnEnter
                  unmountOnExit
                  sx={{ mt: 4, mb: 2 }}
                >
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity={signupSuccess ? 'success' : 'error'}>
                      {message}
                    </Alert>
                  </Stack>
                </Slide>
              ) : (
                ''
              )}
              {!user && (
                <Signup
                  handleSuccess={handleSuccess}
                  handleMessage={handleMessage}
                  checkUser={checkUser}
                />
              )}
              {user && (
                <ConfirmEmail
                  handleSuccess={handleSuccess}
                  handleMessage={handleMessage}
                  user={user}
                />
              )}
            </Box>

            <Grid sx={{ marginTop: 5 }}></Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
