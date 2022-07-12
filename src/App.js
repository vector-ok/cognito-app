import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';

import Amplify, { Hub } from 'aws-amplify';
import Login from './views/login';
import Authentication from './views/authentication';
import Dashboard from './views/dashboard/index';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Hub.listen('auth', (event) => {
      console.log('auth event is ', event);
      console.log('auth message is ', event.payload.message);
      console.log('auth payload event is ', event.payload.event);
      if (event.payload.event === 'signIn') {
        return setCurrentUser(true);
      }
      return setCurrentUser(false);
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// {currentUser ? <Dashboard /> : <Authentication />}
