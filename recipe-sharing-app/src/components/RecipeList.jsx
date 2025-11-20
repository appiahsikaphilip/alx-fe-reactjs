// Updated: Use the NAMED import from the local directory
import { useRecipeStore } from './recipeStore'; 

const RecipeList = () => {
  // Access the state (recipes)
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Be the first!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;