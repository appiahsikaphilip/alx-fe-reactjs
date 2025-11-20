import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  // Select all recipes and the list of favorite IDs
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);
  
  // Map favorite IDs back to the full recipe objects
  const favoriteRecipes = favoriteIds
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // Filter out any undefined recipes (if IDs are invalid)

  return (
    <div style={{ border: '1px solid #007bff', padding: '15px', maxWidth: '300px' }}>
      <h2>⭐️ My Favorites ({favoriteRecipes.length})</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px', paddingBottom: '5px', borderBottom: '1px dotted #ccc' }}>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              <h4>{recipe.title}</h4>
            </Link>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;