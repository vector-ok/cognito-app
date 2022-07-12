import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Hub } from 'aws-amplify';
import Authentication from './views/authentication';
import Dashboard from './views/dashboard/index';

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    Hub.listen('auth', (event) => {
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
