import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import styles from './styles';

Amplify.configure(awsconfig);

export default function Login({ handleSuccess, handleMessage }) {
  const [confirm, setConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputs, setInputs] = useState({
    loginEmail: '',
    password: '',
  });

  let navigate = useNavigate();

  useEffect(() => {
    errorMessage.includes(`UserNotConfirmedException`)
      ? setConfirm(true)
      : setConfirm(false);
  }, [errorMessage, confirm]);

  const handleInputs = (e) => {
    inputs[e.target.name] = e.target.value;
    setInputs({ ...inputs });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    inputs[event.target.name] = event.target.value;
    setInputs({ ...inputs });
    if ((inputs.password === '') | null)
      return handleMessage('password field must not be empty');
    try {
      const response = await Auth.signIn(inputs.loginEmail, inputs.password);
      handleSuccess(true);
      handleMessage(`SUCCESS! You just logged in.`);
      console.log('response is ', response);
      // return;
      navigate('dashboard');
      // history.push('dashboard');
    } catch (error) {
      setErrorMessage(`ERROR ${error}`);
      handleMessage(`ERROR ${error}`);
      // checkErrorMessage();
      console.error('login error is ', error);
      console.log('message includes verification error ', confirm);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
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
        <Box sx={styles.submitBox}>
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
    </Box>
  );
}
