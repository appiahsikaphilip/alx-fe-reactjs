import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(id);
      // Navigate back to the main list after deletion
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px', cursor: 'pointer', marginLeft: '10px' }}>
      🗑️ Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;