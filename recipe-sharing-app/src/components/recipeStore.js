import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  
  // NEW STATE PROPERTIES for filtering
  searchTerm: '',
  filteredRecipes: [], // This array will hold the results shown to the user

  // Existing CRUD Actions
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => 
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),
  setRecipes: (recipes) => set({ recipes }),

  // NEW Filtering Actions
  
  /**
   * Sets the new search term and immediately triggers the filtering.
   * This is the action called from the SearchBar component.
   */
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // IMPORTANT: Call filterRecipes immediately after setting the term
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        // Filter logic: Check if title contains the search term (case-insensitive)
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  /**
   * Optional: This action can be used to manually trigger filtering, 
   * but we integrate the logic directly into setSearchTerm for responsiveness.
   */
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Initialize filteredRecipes to equal all recipes when the store loads/updates
  // You might want to run this after a fetch or update.
  // We'll update how filtering is initialized in the RecipeList.
}));