import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css'; 

const Home = () => (
    <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
        <AddRecipeForm />
        <RecipeList />
    </div>
);

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🍽️ Recipe Sharing Application</h1>
        
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/">Home</Link>
        </nav>

        <Routes>
          {/* Main route displays the Add Form and the Recipe List */}
          <Route path="/" element={<Home />} />
          
          {/* Detailed route for viewing individual recipes */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;