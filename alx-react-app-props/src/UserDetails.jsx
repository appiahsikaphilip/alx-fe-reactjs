import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Correct import

function UserDetails() {
  const userData = useContext(UserContext); // Correct usage of useContext

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;