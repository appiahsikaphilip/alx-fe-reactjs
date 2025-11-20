import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Retrieve the recipe using the ID from the URL params
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found. <button onClick={() => navigate('/')}>Go Home</button></div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h1>{recipe.title}</h1>
      <p>ID: {recipe.id}</p>
      <p>{recipe.description}</p>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel Edit' : 'Edit Recipe'}
        </button>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      {isEditing && <EditRecipeForm recipe={recipe} />}
    </div>
  );
};

export default RecipeDetails;