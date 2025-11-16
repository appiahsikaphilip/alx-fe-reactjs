import { createContext, useState } from "react";

export const UserContext = createContext();


const UserContextProvider = createContext({children}) => {
    const [userDetails, setUserDetails] = useState(true)

return (
    <UserContext.Provider value = {userDetails}>
        {children}
    </UserContext.Provider>
);
};

export default UserContextProvider;
