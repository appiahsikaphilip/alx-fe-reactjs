// src/App.jsx
import React from "react";
import { UserProvider } from "./UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <UserProvider>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile />
      <Footer />
    </UserProvider>
  );
}

export default App;
