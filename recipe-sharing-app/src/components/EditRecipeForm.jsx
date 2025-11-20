import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      ...recipe,
      title,
      description,
    };

    updateRecipe(updatedRecipe);
    navigate(`/recipes/${recipe.id}`); // Navigate back to the detail page
  };

  return (
    <div style={{ border: '1px solid orange', padding: '15px', marginTop: '20px' }}>
      <h3>✏️ Edit Recipe</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;