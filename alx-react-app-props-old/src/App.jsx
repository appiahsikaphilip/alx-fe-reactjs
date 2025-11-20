// src/App.jsx
import { UserProvider } from "./UserContext";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <UserProvider>
      <Header />
      <main>
        <UserProfile />
      </main>
      <Footer />
    </UserProvider>
  );
}

export default App;
