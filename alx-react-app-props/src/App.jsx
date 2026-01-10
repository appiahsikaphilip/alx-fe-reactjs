import React from 'react';
import UserProfile from './UserProfile'; // Ensure this matches your file structure
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap the component and pass userData as the 'value'
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;