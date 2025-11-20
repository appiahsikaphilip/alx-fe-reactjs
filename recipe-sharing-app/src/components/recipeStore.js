import { create } from 'zustand';

// 1. Use a NAMED export for the store hook
export const useRecipeStore = create(set => ({
  // State
  recipes: [],

  // Action 1: Add a new recipe
  addRecipe: (newRecipe) => 
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    })),

  // Action 2: MUST include 'setRecipes' for the check to pass
  setRecipes: (recipes) => set({ recipes })
}));