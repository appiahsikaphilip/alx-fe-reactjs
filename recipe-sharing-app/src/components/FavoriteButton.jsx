import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: isFavorite ? 'gold' : 'lightgray',
    border: '1px solid gray',
    cursor: 'pointer',
    marginLeft: '10px'
  };

  return (
    <button onClick={toggleFavorite} style={buttonStyle}>
      {isFavorite ? '⭐️ Favorited' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;