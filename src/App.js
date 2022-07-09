import React, { useEffect, useState } from 'react';
import Amplify, { Hub } from 'aws-amplify';
// import './App.css';
import Login from './views/login';
import Dashboard from './views/dashboard';

// import { Auth } from 'aws-amplify';

function App() {
  useEffect(() => {
    Hub.listen('auth', (event) => {
      console.log('auth event is ', event);
      // if (event.payload.event === 'signup_failure') {
      //   return setCurrentUser(event.payload.data);
      // }
    });
  }, []);

  const [currentUser, setCurrentUser] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  return <div>{currentUser ? <Dashboard /> : <Login />}</div>;
}

export default App;

{
  /* <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
