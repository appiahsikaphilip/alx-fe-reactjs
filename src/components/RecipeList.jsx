import useRecipeStore from './recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <strong>{r.title}</strong>
            <p>{r.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
