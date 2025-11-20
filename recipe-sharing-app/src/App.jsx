import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import './App.css'; 

const Home = () => (
    <div style={{ padding: '20px' }}>
        <SearchBar />
        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
            <AddRecipeForm />
            <RecipeList />
        </div>
    </div>
);

function App() {
  return (
    // 1. MUST contain 'BrowserRouter' (aliased as Router)
    <Router> 
      <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🍽️ Recipe Sharing Application</h1>
        
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/">Home</Link>
        </nav>

        {/* 2. MUST contain 'Routes' and 'Route' */}
        <Routes> 
          <Route path="/" element={<Home />} />
          {/* This route handles the RecipeDetails component */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;