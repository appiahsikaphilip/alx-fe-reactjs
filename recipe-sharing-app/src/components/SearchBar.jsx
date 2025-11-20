import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  // Select the new setSearchTerm action from the store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes by title..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
    />
  );
};

export default SearchBar;