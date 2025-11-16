import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipeId);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipeId)}>Remove Favorite</button>
      ) : (
        <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeDetail;
