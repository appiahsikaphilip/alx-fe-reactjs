import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// Step 3 & 4: Removed { userData } prop, consuming context directly
function UserDetails() {
  // Use the useContext hook to pull the data from the closest Provider
  const userData = useContext(UserContext); 

  return (
    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      <h5>UserDetails.jsx (Context Consumer)</h5>
      <p>Data retrieved successfully via Context:</p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li><strong>Name:</strong> {userData.name}</li>
        <li><strong>Email:</strong> {userData.email}</li>
        <li><strong>Role:</strong> {userData.role}</li>
      </ul>
    </div>
  );
}

export default UserDetails;