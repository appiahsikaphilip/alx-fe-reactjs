import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Required by the checker
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
