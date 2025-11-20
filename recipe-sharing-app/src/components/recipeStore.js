import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [
    // Mock Data added for testing Recommendations/Favorites (remove or replace with real data loading)
    { id: 1, title: "Classic Lasagna", description: "Layered pasta with meat and cheese.", ingredients: ["pasta", "beef", "cheese"] },
    { id: 2, title: "Vegan Tacos", description: "Healthy plant-based tacos.", ingredients: ["beans", "lettuce", "salsa"] },
    { id: 3, title: "Chicken Curry", description: "Spicy chicken with rice.", ingredients: ["chicken", "rice", "curry paste"] },
    { id: 4, title: "Tomato Soup", description: "Simple, comforting tomato soup.", ingredients: ["tomato", "cream", "basil"] },
    { id: 5, title: "Fruit Smoothie", description: "Quick and easy breakfast.", ingredients: ["banana", "milk", "berries"] },
  ],
  searchTerm: '',
  filteredRecipes: [],

  // NEW STATE PROPERTIES
  favorites: [1, 3], // Initialize with some favorite IDs for testing
  recommendations: [],

  // Existing CRUD and Filtering Actions... (omitted for brevity)

  // NEW FAVORITES ACTIONS
  addFavorite: (recipeId) => set(state => {
    // Prevent duplicates
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // NEW RECOMMENDATION ACTION
  generateRecommendations: () => set(state => {
    // Mock implementation: recommend recipes that are NOT favorites 
    // and randomly include some that are favorites (as similar items).
    const nonFavoriteRecipes = state.recipes.filter(recipe => 
        !state.favorites.includes(recipe.id)
    );
    
    // Simple mock logic: grab 2 non-favorites and 1 random recipe if available
    const recs = [
        ...nonFavoriteRecipes.slice(0, 2),
        state.recipes[Math.floor(Math.random() * state.recipes.length)]
    ].filter(Boolean); // Remove null/undefined if recipes is short
    
    // Use a unique filter on IDs to ensure no duplicates in recommendations
    const uniqueRecs = Array.from(new Set(recs.map(r => r.id)))
        .map(id => recs.find(r => r.id === id))
        .filter(r => r && !state.favorites.includes(r.id)); // Ensure recommended are NOT current favorites

    return { recommendations: uniqueRecs.slice(0, 3) };
  }),
  
  // Existing setSearchTerm and filterRecipes actions remain here
  // ...
}));