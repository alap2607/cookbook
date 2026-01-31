// Import types from centralized type definitions
import type { Recipe, CreateRecipeInput, UpdateRecipeInput } from '../types/recipe';
export type { Recipe, Ingredient, CreateRecipeInput, UpdateRecipeInput } from '../types/recipe';

const API_BASE_URL = '/api';

// Helper function to handle API errors
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      error: 'An error occurred',
      code: 'UNKNOWN_ERROR',
      status: response.status,
    }));
    throw new Error(error.error || `HTTP error ${response.status}`);
  }
  return response.json();
}

// Get all recipes
export async function getAllRecipes(): Promise<Recipe[]> {
  const response = await fetch(`${API_BASE_URL}/recipes`);
  return handleResponse<Recipe[]>(response);
}

// Get single recipe by ID
export async function getRecipeById(id: string): Promise<Recipe> {
  const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
  return handleResponse<Recipe>(response);
}

// Create new recipe
export async function createRecipe(recipeData: CreateRecipeInput): Promise<Recipe> {
  const response = await fetch(`${API_BASE_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipeData),
  });
  return handleResponse<Recipe>(response);
}

// Update recipe
export async function updateRecipe(id: string, updates: UpdateRecipeInput): Promise<Recipe> {
  const response = await fetch(`${API_BASE_URL}/recipes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  return handleResponse<Recipe>(response);
}

// Delete recipe
export async function deleteRecipe(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/recipes/${id}`, {
    method: 'DELETE',
  });
  await handleResponse<{ message: string; id: string }>(response);
}
