import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App</h1>

        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
        </nav>

        {/* Search Bar */}
        <SearchBar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
