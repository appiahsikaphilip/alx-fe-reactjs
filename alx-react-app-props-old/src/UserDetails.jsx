import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Consume the context using the useContext hook
  const userData = useContext(UserContext);

  // Add a check in case the component is used outside the Provider
  if (!userData) {
    return <div>User data not available.</div>;
  }

  return (
    <div>
      <p>Name: **{userData.name}**</p>
      <p>Email: **{userData.email}**</p>
    </div>
  );
}

export default UserDetails;