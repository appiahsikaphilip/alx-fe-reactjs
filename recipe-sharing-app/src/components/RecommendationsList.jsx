import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);
  
  // Re-generate recommendations whenever the favorites list changes
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);


  return (
    <div style={{ border: '1px solid #28a745', padding: '15px', maxWidth: '300px' }}>
      <h2>💡 Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>We need more recipes or favorites to generate recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px', paddingBottom: '5px', borderBottom: '1px dotted #ccc' }}>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#28a745' }}>
              <h4>{recipe.title}</h4>
            </Link>
            <p style={{ fontSize: '0.8em', margin: 0 }}>{recipe.description.substring(0, 30)}...</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;