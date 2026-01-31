import { useMemo } from "react";
import type { Recipe } from "../services/api";

export interface SearchFilters {
  searchQuery: string;
  categories: string[];
  minCookTime: number;
  maxCookTime: number;
  minServings: number;
  maxServings: number;
  cuisine: string;
  sortBy: "default" | "name-asc" | "name-desc" | "time-asc" | "time-desc" | "servings-asc" | "servings-desc";
}

export function useSearchRecipes(recipes: Recipe[], filters: SearchFilters): Recipe[] {
  return useMemo(() => {
    return recipes.filter((recipe) => {
      // Search query filter (title, description, tags, cuisine, ingredients)
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = recipe.title.toLowerCase().includes(query);
        const matchesDescription = recipe.description.toLowerCase().includes(query);
        const matchesTags = recipe.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesCuisine = recipe.cuisine.toLowerCase().includes(query);
        const matchesIngredients = recipe.ingredients.some((ing) => ing.item.toLowerCase().includes(query));

        if (!(matchesTitle || matchesDescription || matchesTags || matchesCuisine || matchesIngredients)) {
          return false;
        }
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(recipe.category as unknown as string)) {
        return false;
      }

      // Cook time filter
      if (recipe.cookTime < filters.minCookTime || recipe.cookTime > filters.maxCookTime) {
        return false;
      }

      // Servings filter
      if (recipe.servings < filters.minServings || recipe.servings > filters.maxServings) {
        return false;
      }

      // Cuisine filter
      if (filters.cuisine && recipe.cuisine.toLowerCase() !== filters.cuisine.toLowerCase()) {
        return false;
      }

      return true;
    });
  }, [recipes, filters]);
}
