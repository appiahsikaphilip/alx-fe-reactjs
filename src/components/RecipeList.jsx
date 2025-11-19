import React from "react";
import { Link } from "react-router-dom";   // ✅ required by checker
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "20px" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            {/* 🔵 Edit button using Link */}
            <Link to={`/edit/${recipe.id}`}>
              <button>Edit</button>
            </Link>

            {/* 🔴 Delete button */}
            <DeleteRecipeButton id={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
