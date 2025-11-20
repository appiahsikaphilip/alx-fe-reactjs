import UserInfo from './UserInfo';

// Step 4: Removed { userData } prop
function ProfilePage() {
  return (
    <div style={{ margin: '15px', padding: '15px', border: '1px solid #ccc' }}>
      <h3>ProfilePage.jsx (Intermediate)</h3>
      <p>This component no longer passes 'userData' down.</p>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;