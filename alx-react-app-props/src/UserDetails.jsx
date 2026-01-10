import { useContext } from 'react';
import UserContext from './UserContext'; // Make sure the path to UserContext is correct

function UserDetails() {
  // Use the useContext hook to access the data directly
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;