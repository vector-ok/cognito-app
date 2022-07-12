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
import styles from './styles';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

const ConfirmEmail = ({ handleSuccess, handleMessage, user }) => {
  console.log('user is ', user);
  // const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  // const [signupSuccess, setSignupSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    verificationCode: '',
  });

  const handleInputs = (e) => {
    inputs[e.target.name] = e.target.value;
    setInputs({ ...inputs });
    inputs[e.target.name].length > 0 ? setChecked(true) : setChecked(false);
  };

  const handleVerification = async (event) => {
    event.preventDefault();
    console.log('code is ', inputs.verificationCode);
    try {
      const response = await Auth.confirmSignUp(user, inputs.verificationCode);
      console.log('response is ', response);
      // const username = response.user.username;
      handleSuccess(true);
      handleMessage(
        `SUCCESS! Email verified. Your default password is 12345678. Proceed to Login.`
      );
    } catch (error) {
      console.log('error is ', error);
      handleSuccess(false);
      handleMessage(`ERROR ${error}`);
    }
  };

  return (
    <Grid sx={{ marginTop: 5 }}>
      <Typography sx={styles.title}>Confirm Your Email</Typography>
      <Typography>Enter the verification code sent to your email</Typography>
      {/* </Box> */}
      <Box
        component="form"
        noValidate
        onSubmit={handleVerification}
        sx={{ display: '' }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="verificationCode"
          label="Enter code"
          name="verificationCode"
          type="email"
          autoComplete="email"
          onChange={(e) => handleInputs(e)}
        />
        <Box sx={styles.submitBox}>
          <Button
            md
            type="submit"
            variant="outlined"
            sx={{
              mt: 1,
              mb: 2,
              color: 'green',
            }}
            disabled={!checked}
          >
            Confirm Email
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ConfirmEmail;
