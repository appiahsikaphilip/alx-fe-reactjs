import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // trigger search
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
