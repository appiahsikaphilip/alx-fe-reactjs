import React, { useContext } from 'react'; // contains "react" and "useContext"
import UserContext from '../UserContext'; // contains "UserContext"

function UserProfile() {
  // Use the context hook to get the data
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;