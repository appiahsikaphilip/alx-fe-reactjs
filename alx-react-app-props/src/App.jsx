import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "SIKA", email: "sika@gmail.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
