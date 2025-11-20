import React, { createContext, useContext } from 'react';

// 1. Create the Context object. We use 'undefined' as the default value 
// since we enforce that it must be used within the Provider.
const UserContext = createContext(undefined);

/**
 * Custom hook to safely consume the UserContext.
 * Throws an error if used outside of a UserProvider.
 */
export const useUser = () => {
  const context = useContext(UserContext);
  
  // Safety Check: Ensures developers don't use the hook where there's no Provider.
  if (context === undefined) {
    throw new Error('❌ useUser must be used within a UserProvider');
  }
  
  return context;
};

/**
 * Provider component that wraps the component tree and supplies the value.
 * This makes App.jsx much cleaner.
 */
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};