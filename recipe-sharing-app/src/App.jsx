import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm
import RecipeList from './components/RecipeList';       // Import RecipeList
import './App.css'; 
// The rest of your imports (if any)

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🍽️ Recipe Sharing Application</h1>
      <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
}

export default App;