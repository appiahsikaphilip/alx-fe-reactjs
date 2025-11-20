import React, { useState } from 'react';
// Updated: Import the named export from the same directory
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  // Access the action (addRecipe)
  const addRecipe = useRecipeStore(state => state.addRecipe);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title || !description) {
        alert("Please enter both a title and a description.");
        return;
    }
    
    addRecipe({ 
      id: Date.now(), 
      title, 
      description 
    });
    
    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-recipe-form">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;