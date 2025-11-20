// src/App.jsx
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <UserProvider>
      <Header />
      <UserProfile />
      <Footer />
    </UserProvider>
  );
}

export default App;
