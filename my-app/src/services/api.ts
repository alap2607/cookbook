// Type definitions
export interface Ingredient {
  item: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: 'vegetarian' | 'chicken' | 'quick' | 'spicy';
  cusine: string;
  cookTime: number;
  servings: number;
  imageUrl: string;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateRecipeInput {
  title: string;
  description: string;
  category: 'vegetarian' | 'chicken' | 'quick' | 'spicy';
  cusine: string;
  cookTime: number;
  servings: number;
  imageUrl: string;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
}

export interface UpdateRecipeInput {
  title?: string;
  description?: string;
  category?: 'vegetarian' | 'chicken' | 'quick' | 'spicy';
  cusine?: string;
  cookTime?: number;
  servings?: number;
  imageUrl?: string;
  ingredients?: Ingredient[];
  instructions?: string[];
  tags?: string[];
}

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

// Auth API functions
export interface LoginResponse {
  success: boolean;
  token: string;
  message?: string;
}

export interface ValidateTokenResponse {
  valid: boolean;
}

// Login with password
export async function login(password: string): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });
  return handleResponse<LoginResponse>(response);
}

// Validate auth token
export async function validateToken(token: string): Promise<ValidateTokenResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  return handleResponse<ValidateTokenResponse>(response);
}
