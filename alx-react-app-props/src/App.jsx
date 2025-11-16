import React from "react";
import ProfilePage from './ProfilePage';
import  UserContextProvider from '../context/UserContextProvider';

const userData = createContext();

const App = () => {
  return (
    <UserContext.Provider value={userData}>
      <div> 
        <ProfilePage />
      </div>
     
    </UserContext.Provider>
  );
}

export default App;
