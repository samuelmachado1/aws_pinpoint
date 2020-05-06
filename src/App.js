import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import { Analytics, Auth } from 'aws-amplify'



function App() {
 
  function recordEvent() {
    console.log("Evento gravado!!")
    Analytics.record({
      name: 'Test Event',
      attributes: {
        username: 'YouCognitoUser',
        phone_number: '+556188300000',
        email: 'youemail@email.com'
      }
    })
    
  }
  async function exit() {
    
    await Auth.signOut();
    // userHasAuthenticated(false);  
    
  }
  


  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Amplify JS & Amazon PinPoint!
        </p>
        <a>
          <div>
            <button onClick={recordEvent}>Registrar Evento</button>
          </div>
          <div>
            <button onClick={exit}>Logout</button>
          </div>
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
