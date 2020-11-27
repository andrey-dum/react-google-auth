
import React from 'react'
import { Route, Switch } from "react-router";
import { NavLink } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

import './App.css';

function App() {


  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} `
    );
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. `
    );
  };


  return (
    <div>
      <h1>GOOGLE AUTH</h1>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">login</NavLink>

      <Switch>
        {/* <Route path="profile" component={Profile} /> */}
      </Switch>

        <GoogleLogin
          clientId="366936641222-1t094pe581i19sc76bqkj6tdr0u7c8np.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        
        />
      </div>
  );
}

export default App;




