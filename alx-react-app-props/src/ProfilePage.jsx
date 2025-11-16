import React, { UseContext } from "react";
import { UserContext } from '../context/UserContextProvider';


const ProfilePage = () => {
    const userData = useContext(UserContext);
    console.log (userData);
    return <h3>ProfilePage</h3>;

};

export default ProfilePage;