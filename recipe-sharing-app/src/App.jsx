import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/favorites">Favorites</Link> |{" "}
          <Link to="/recommendations">Recommendations</Link> |{" "}
          <Link to="/add">Add Recipe</Link>
        </nav>

        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
