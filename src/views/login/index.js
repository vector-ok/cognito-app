import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './auth.css';
import * as styles from './auth.css';
import theme from '../../theme';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState({
    loginEmail: '',
    signupEmail: '',
    password: '',
  });

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleInputs = (e) => {
    inputs[e.target.name] = e.target.value;
    setInputs({ ...inputs });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (inputs.password === '') {
      inputs.password = '12345';
    }

    try {
      const response = await Auth.signUp(inputs.signupEmail, inputs.password);
      setMessage(`SUCCESS! You just signed up ${response.user.username}`);
      let success = message.includes('SUCCESS!');
      console.log('response is ', response);
      console.log('success is ', success);
      console.log('res user is ', response.user.username);
      if (success) {
        console.log('message includes SUCCESS');
      } else {
        console.log('message does not include SUCCESS');
      }
    } catch (error) {
      setMessage(`ERROR ${error}`);
    }
  };

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
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={theme.formBody}>
            <Box sx={theme.titleBox}>
              <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={theme.title}>
                Sensegrass
              </Typography>
            </Box>

            <Box>
              <Box
                component="form"
                noValidate
                onSubmit={handleLogin}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="loginEmail"
                  label="Email Address"
                  name="loginEmail"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(event) => handleInputs(event)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => handleInputs(e)}
                />
                <Box sx={theme.submitBox}>
                  <Link href="#" variant="body2" fullWidth>
                    Forgot password?
                  </Link>
                  <Button
                    type="submit"
                    variant="contained"
                    // fullWidth
                    sx={{ ml: 3, maxWidth: '50%', backgroundColor: 'green' }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>

              <Grid sx={{ marginTop: 5 }}>
                {/* <Box sx={theme.titleBox}> */}
                <Typography sx={theme.title}>Let's get started</Typography>
                {/* </Box> */}
                <Box sx={{ display: '' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="signupEmail"
                    label="Enter your Email ID"
                    name="signupEmail"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => handleInputs(e)}
                  />
                  <Box sx={{ marginTop: 2, marginLeft: 5 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          label="hello"
                          checked={checked}
                          onChange={handleCheckbox}
                          inputProps={{
                            'aria-label': 'controlled',
                          }}
                        />
                      }
                      label='I Agree with processing my personal data in conformity with the Privacy Policy. When clicking on "Get Started", you also agree with the End User license Agreement.'
                    />
                  </Box>

                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSignup}
                    sx={theme.submitBox}
                  >
                    <Button
                      md
                      type="submit"
                      // fullWidth
                      variant="outlined"
                      sx={{
                        mt: 1,
                        mb: 2,
                        color: 'green',
                      }}
                      disabled={!checked}
                    >
                      Sign Up
                    </Button>
                  </Box>

                  {message.length > 0 ? (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                      <Alert
                        severity="error"
                        // severity={message.includes(
                        //   'SUCCESS' ? 'success' : 'error'
                        // )}
                      >
                        {message}
                      </Alert>
                    </Stack>
                  ) : (
                    ''
                  )}
                </Box>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
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
