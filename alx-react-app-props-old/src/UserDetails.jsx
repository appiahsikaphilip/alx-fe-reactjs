// Import the custom hook
import { useUser } from './UserContext'; 

// No more need for 'React' import or the generic 'useContext' hook
function UserDetails() {
  // Use the custom hook to retrieve the user data
  const userData = useUser();

  return (
    <div>
      <p>Name: **{userData.name}**</p>
      <p>Email: **{userData.email}**</p>
    </div>
  );
}

export default UserDetails;