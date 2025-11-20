import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  // The data that will be made available to the component tree
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap the components that need access to the data with the Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;