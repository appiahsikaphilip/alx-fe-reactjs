import React from 'react';
import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext'; // Correct import

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Correct context provider usage */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;