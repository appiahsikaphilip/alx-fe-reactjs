import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="Philip" age="25" bio="React learner" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
