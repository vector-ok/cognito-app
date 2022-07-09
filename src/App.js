import React, { useEffect, useState } from 'react';
import Amplify, { Hub } from 'aws-amplify';
// import './App.css';
import Login from './views/login';
import Dashboard from './views/dashboard';

// import { Auth } from 'aws-amplify';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Hub.listen('auth', (event) => {
      console.log('auth event is ', event);
      console.log('auth ,essage is ', event.payload.message);
      console.log('auth payload event is ', event.payload.event);
      if (event.payload.event === 'signIn') {
        return setCurrentUser(true);
      }
      return setCurrentUser(false);
    });
  }, []);

  return <div>{currentUser ? <Dashboard /> : <Login />}</div>;
}

export default App;
