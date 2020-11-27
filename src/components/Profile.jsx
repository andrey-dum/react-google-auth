import React from 'react';

function Profile({user}) {

  return (
    <div>
       <h1>{user && user.name}</h1>
    </div>
  );
}

export default Profile;
