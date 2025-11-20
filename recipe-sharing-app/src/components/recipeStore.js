import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],

  // Action 1: Add a new recipe (Existing)
  addRecipe: (newRecipe) => 
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    })),

  // Action 2: Delete a recipe (New)
  deleteRecipe: (id) => 
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
    })),

  // Action 3: Update an existing recipe (New)
  updateRecipe: (updatedRecipe) => 
    set(state => ({
      recipes: state.recipes.map(recipe =>
        // Replace the old recipe with the new data if IDs match
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),

  // Action 4: Set recipes (Existing, for initial load)
  setRecipes: (recipes) => set({ recipes })
}));