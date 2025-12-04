import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === parseInt(id));
        setRecipe(selected);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-xl">Loading recipe...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-xl shadow-lg mb-8"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Summary */}
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        {recipe.summary}
      </p>

      {/* Ingredients Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Back Button */}
      <a
        href="/"
        className="text-blue-600 hover:text-blue-800 font-medium underline"
      >
        ← Back to Home
      </a>
    </div>
  );
}

export default RecipeDetail;
