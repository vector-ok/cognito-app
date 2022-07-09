import React, { useState } from 'react';
import Login from '../login';
import Dashboard from '../dashboard';

import { Auth } from 'aws-amplify';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('Login');

  return <div>Authentication</div>;
};

export default Authentication;
