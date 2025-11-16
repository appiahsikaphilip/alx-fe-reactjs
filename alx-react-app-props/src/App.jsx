// App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext'; // Import the Context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Provide context here */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;