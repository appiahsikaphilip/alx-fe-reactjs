// Import the named export UserProvider from the context file
import { UserProvider } from './UserContext'; 
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Pass the data directly as a prop to the custom Provider component
    <UserProvider userData={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;