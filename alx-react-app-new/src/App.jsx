import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Philip Appiah Sika" age={27} bio="I love traveling, coding, and discovering new cities." />
      <Footer />
    </>
  );
}

export default App;
