import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext';

function App() {
  const userData = { 
    name: "Jane Doe (Context API)", 
    email: "jane.doe@example.com",
    role: "Software Engineer"
  };

  return (
    // Step 2: Wrap the component tree in the Provider and pass the data via the 'value' prop
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px', fontFamily: 'sans-serif', border: '2px solid #007bff', borderRadius: '8px' }}>
        <h2>App.jsx (Context Provider)</h2>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;