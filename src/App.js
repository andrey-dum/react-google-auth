
import React, { useState } from 'react'
import { Route } from "react-router";
import { NavLink, useHistory } from 'react-router-dom'

import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory()

  console.log(user)

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setUser(res.profileObj)
    history.push('/profile')
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
    <div className="app">
      <div className="page">
        <h1>GOOGLE AUTH</h1>
        <div className="app__links">
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/login">login</NavLink>
        </div>
            
        <Route exact path="/">
          { user ? <Profile user={user && user} /> :  <Login onSuccess={onSuccess} onFailure={onFailure} />}
        </Route>

        <Route path="/login">
          { user ? <Profile user={user && user} /> :  <Login onSuccess={onSuccess} onFailure={onFailure} />}
        </Route>
  
        <Route path="/profile">
            { user ? <Profile user={user && user} /> :  <Login onSuccess={onSuccess} onFailure={onFailure} />}
        </Route>

      </div>
    </div>
  );
}

export default App;




