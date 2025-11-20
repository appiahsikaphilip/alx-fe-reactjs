import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Select the filteredRecipes array
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  
  // Also select the original recipes and the search term for initialization logic
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Initializing or Re-filtering when the main 'recipes' array changes (e.g., after adding a new recipe)
  useEffect(() => {
    // If the search term is empty OR if the filtered list is empty but recipes exist, 
    // run the filter once to populate filteredRecipes with all recipes.
    if (searchTerm === '' && recipes.length > 0 && filteredRecipes.length === 0) {
        filterRecipes();
    }
    // Also, if the recipes array changes (e.g., a new recipe is added), re-filter based on the current search term
    if (searchTerm !== '') {
        filterRecipes();
    }
  }, [recipes, searchTerm, filteredRecipes.length, filterRecipes]);


  const recipesToDisplay = searchTerm === '' ? recipes : filteredRecipes;

  return (
    <div className="recipe-list">
      <h2>Recipe List ({recipesToDisplay.length} Total)</h2>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found matching "{searchTerm}".</p>
      ) : (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id} className="recipe-item" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;