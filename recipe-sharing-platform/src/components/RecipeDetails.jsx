import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center">Loading recipe...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {recipe.summary}
      </p>

      <a
        href="/"
        className="text-blue-600 hover:text-blue-800 font-medium underline"
      >
        ← Back to Home
      </a>
    </div>
  );
}

export default RecipeDetails;
