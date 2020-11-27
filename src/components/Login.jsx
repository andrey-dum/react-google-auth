import React from 'react';

function Login() {
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

export default Login;
