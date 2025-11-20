import { create } from 'zustand';

// Use a NAMED export 'useRecipeStore' and ensure 'setRecipes' is present
export const useRecipeStore = create(set => ({
  recipes: [],

  addRecipe: (newRecipe) => 
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    })),

  setRecipes: (recipes) => set({ recipes })
}));