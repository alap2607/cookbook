import type {
  MealType,
  Cuisine,
  DietPreference,
  DifficultyLevel,
  HealthTag,
  Occasion,
  CookingMethod,
  AppExclusive,
} from '../config/categories';

export interface Ingredient {
  subheading: string;
  item: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  category: string;
  id: string;
  title: string;
  description: string;

  // Primary classification
  mealType: MealType;
  cuisine: Cuisine;

  // Diet & preferences (can have multiple)
  dietPreferences: DietPreference[];

  // Time & difficulty
  cookTime: number;
  prepTime?: number;
  difficulty: DifficultyLevel;

  // Health & lifestyle tags
  healthTags?: HealthTag[];

  // Occasion
  occasions?: Occasion[];

  // Cooking method
  cookingMethod?: CookingMethod;

  // App exclusive flags
  appExclusive?: AppExclusive[];

  // Existing fields
  servings: number;
  imageUrl: string;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];

  // Metadata
  rating?: number;
  reviewCount?: number;
  authorId?: string;
  isFeatured?: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface CreateRecipeInput {
  title: string;
  description: string;
  mealType: MealType;
  cuisine: Cuisine;
  dietPreferences: DietPreference[];
  difficulty: DifficultyLevel;
  cookTime: number;
  prepTime?: number;
  healthTags?: HealthTag[];
  occasions?: Occasion[];
  cookingMethod?: CookingMethod;
  servings: number;
  imageUrl: string;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
}

export interface UpdateRecipeInput {
  title?: string;
  description?: string;
  mealType?: MealType;
  cuisine?: Cuisine;
  dietPreferences?: DietPreference[];
  difficulty?: DifficultyLevel;
  cookTime?: number;
  prepTime?: number;
  healthTags?: HealthTag[];
  occasions?: Occasion[];
  cookingMethod?: CookingMethod;
  servings?: number;
  imageUrl?: string;
  ingredients?: Ingredient[];
  instructions?: string[];
  tags?: string[];
}
