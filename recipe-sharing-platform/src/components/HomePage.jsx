import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>

              <p className="text-gray-600 mb-4">{recipe.summary}</p>

              {/* ⭐ Using React Router Link instead of <a> */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Recipe →
              </Link>
              {/* ⭐ END */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
