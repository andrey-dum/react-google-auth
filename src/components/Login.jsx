import React from 'react';
import GoogleLogin from 'react-google-login'

function Login({onSuccess, onFailure}) {

  return (
    <div className="auth__block">
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
