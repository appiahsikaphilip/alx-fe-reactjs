import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  // 1. Get the recipe ID from the URL path
  const { id } = useParams();
  const recipeId = parseInt(id); // Convert the URL string ID to an integer

  const navigate = useNavigate();
  
  // Local state to toggle the visibility of the Edit form
  const [isEditing, setIsEditing] = useState(false);

  // 2. Select the recipe from the store based on the ID
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  // Handle case where the recipe ID is invalid or recipe was deleted
  if (!recipe) {
    return (
      <div style={{ padding: '20px', border: '1px solid red', maxWidth: '600px', margin: '20px auto' }}>
        <h2>Recipe Not Found</h2>
        <p>The recipe you are looking for does not exist or may have been deleted.</p>
        <button onClick={() => navigate('/')} style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1>
        {/* Recipe Title */}
        {recipe.title}
        {/* Favorite Button */}
        <FavoriteButton recipeId={recipe.id} /> 
      </h1>
      
      <p style={{ fontStyle: 'italic', color: '#666' }}>ID: {recipe.id}</p>
      
      <div style={{ lineHeight: '1.6' }}>
        <h3>Description:</h3>
        <p>{recipe.description}</p>
      </div>
      
      {/* Action Buttons */}
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          style={{ padding: '8px', backgroundColor: isEditing ? 'gray' : 'orange', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {isEditing ? 'Cancel Editing' : '✏️ Edit Recipe'}
        </button>
        {/* Delete Button (handles deletion and navigation internally) */}
        <DeleteRecipeButton id={recipe.id} />
      </div>

      {/* Conditional Rendering of the Edit Form */}
      {isEditing && <EditRecipeForm recipe={recipe} />}
    </div>
  );
};

export default RecipeDetails;