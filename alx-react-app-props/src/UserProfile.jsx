import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  // Use the useContext hook to grab the data from the Provider
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;