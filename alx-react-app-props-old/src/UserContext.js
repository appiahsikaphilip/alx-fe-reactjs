// src/UserContext.js
import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Provider component to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Philip",
    age: 25,
    email: "philip@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
