// src/UserContext.js
import { createContext, useState } from "react";

// 1. Create the context
export const UserContext = createContext();

// 2. Create a provider component
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
