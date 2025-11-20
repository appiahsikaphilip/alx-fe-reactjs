import UserDetails from './UserDetails';

// Step 4: Removed { userData } prop
function UserInfo() {
  return (
    <div style={{ margin: '15px', padding: '15px', border: '1px solid #ddd' }}>
      <h4>UserInfo.jsx (Intermediate)</h4>
      <UserDetails />
    </div>
  );
}

export default UserInfo;