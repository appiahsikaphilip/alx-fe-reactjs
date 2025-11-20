import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Be the first!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            {/* Make the title a clickable link to the details page */}
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