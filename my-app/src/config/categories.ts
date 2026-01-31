// Category Type Definitions
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'desserts' | 'drinks';

export type Cuisine =
  | 'indian' | 'south-indian' | 'north-indian'
  | 'continental' | 'italian' | 'mexican' | 'asian' | 'fusion';

export type DietPreference =
  | 'vegetarian' | 'vegan' | 'eggetarian' | 'chicken'
  | 'gluten-free' | 'dairy-free' | 'keto' | 'low-carb';

export type TimeCategory = 'under-15' | 'under-30' | 'one-pot' | 'weekend-special';

export type HealthTag =
  | 'weight-loss' | 'high-protein' | 'kids-friendly'
  | 'diabetic-friendly' | 'heart-healthy';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type Occasion =
  | 'festival' | 'party' | 'lunchbox' | 'potluck' | 'comfort-food';

export type CookingMethod =
  | 'pressure-cooker' | 'instant-pot' | 'air-fryer' | 'oven-baked' | 'no-cook' | 'stovetop' | 'steamed';

export type AppExclusive =
  | 'chef\'s-picks' | 'most-loved' | 'trending' | 'new-this-week' | 'chef\'s-choice';

// Category Configuration Interface
export interface CategoryConfig {
  id: string;
  label: string;
  icon?: string;
  image?: string;
  color?: string;
}

// Meal Types
export const MEAL_TYPES: CategoryConfig[] = [
  { id: 'breakfast', label: 'Breakfast', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=100&h=100&fit=crop', color: '#F59E0B' },
  { id: 'lunch', label: 'Lunch', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop', color: '#10B981' },
  { id: 'dinner', label: 'Dinner', image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=100&h=100&fit=crop', color: '#6366F1' },
  { id: 'snacks', label: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=100&h=100&fit=crop', color: '#8B5CF6' },
  { id: 'desserts', label: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop', color: '#EC4899' },
  { id: 'drinks', label: 'Drinks & Smoothies', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=100&h=100&fit=crop', color: '#06B6D4' },
];

// Cuisines
export const CUISINES: CategoryConfig[] = [
  { id: 'indian', label: 'Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop' },
  { id: 'south-indian', label: 'South Indian', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=100&h=100&fit=crop' },
  { id: 'north-indian', label: 'North Indian', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=100&h=100&fit=crop' },
  { id: 'continental', label: 'Continental', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop' },
  { id: 'italian', label: 'Italian', image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=100&h=100&fit=crop' },
  { id: 'mexican', label: 'Mexican', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=100&h=100&fit=crop' },
  { id: 'asian', label: 'Asian', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100&h=100&fit=crop' },
  { id: 'fusion', label: 'Fusion', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop' },
];

// Diet Preferences
export const DIET_PREFERENCES: CategoryConfig[] = [
  { id: 'vegetarian', label: 'Vegetarian', color: '#10B981' },
  { id: 'vegan', label: 'Vegan', color: '#22C55E' },
  { id: 'eggetarian', label: 'Eggetarian', color: '#FBBF24' },
  { id: 'chicken', label: 'Chicken', color: '#F59E0B' },
  { id: 'gluten-free', label: 'Gluten-Free', color: '#A78BFA' },
  { id: 'dairy-free', label: 'Dairy-Free', color: '#60A5FA' },
  { id: 'keto', label: 'Keto', color: '#F472B6' },
  { id: 'low-carb', label: 'Low Carb', color: '#34D399' },
];

// Time Categories
export const TIME_CATEGORIES: CategoryConfig[] = [
  { id: 'under-15', label: 'Under 15 min' },
  { id: 'under-30', label: '30-minute meals' },
  { id: 'one-pot', label: 'One-pot recipes' },
  { id: 'weekend-special', label: 'Weekend specials' },
];

// Health & Lifestyle Tags
export const HEALTH_TAGS: CategoryConfig[] = [
  { id: 'weight-loss', label: 'Weight Loss', color: '#10B981' },
  { id: 'high-protein', label: 'High Protein', color: '#EF4444' },
  { id: 'kids-friendly', label: 'Kids-Friendly', color: '#F59E0B' },
  { id: 'diabetic-friendly', label: 'Diabetic-Friendly', color: '#3B82F6' },
  { id: 'heart-healthy', label: 'Heart Healthy', color: '#EC4899' },
];

// Difficulty Levels
export const DIFFICULTY_LEVELS: CategoryConfig[] = [
  { id: 'beginner', label: 'Beginner', color: '#10B981' },
  { id: 'intermediate', label: 'Intermediate', color: '#F59E0B' },
  { id: 'advanced', label: 'Advanced', color: '#EF4444' },
];

// Occasions
export const OCCASIONS: CategoryConfig[] = [
  { id: 'festival', label: 'Festival Specials' },
  { id: 'party', label: 'Party Recipes' },
  { id: 'lunchbox', label: 'Lunchbox Ideas' },
  { id: 'potluck', label: 'Potluck Dishes' },
  { id: 'comfort-food', label: 'Comfort Food' },
];

// Cooking Methods
export const COOKING_METHODS: CategoryConfig[] = [
  { id: 'pressure-cooker', label: 'Pressure Cooker' },
  { id: 'instant-pot', label: 'Instant Pot' },
  { id: 'air-fryer', label: 'Air Fryer' },
  { id: 'oven-baked', label: 'Oven-Baked' },
  { id: 'no-cook', label: 'No-Cook' },
  { id: 'stovetop', label: 'Stovetop' },
  { id: 'steamed', label: 'Steamed' },
];

// App Exclusive Sections
export const APP_EXCLUSIVE_SECTIONS: CategoryConfig[] = [
  { id: 'chefs-picks', label: "Chef's Picks", icon: 'ChefHat', color: '#E53E6A' },
  { id: 'most-loved', label: 'Most Loved', icon: 'Heart', color: '#EF4444' },
  { id: 'trending', label: 'Trending', icon: 'TrendingUp', color: '#F59E0B' },
  { id: 'new-this-week', label: 'New This Week', icon: 'Sparkles', color: '#8B5CF6' },
  { id: 'editors-choice', label: "Editor's Choice", icon: 'Award', color: '#3B82F6' },
];

// Ingredient-based categories (for tags)
export const INGREDIENT_CATEGORIES: CategoryConfig[] = [
  { id: 'paneer', label: 'Paneer Recipes' },
  { id: 'chicken', label: 'Chicken Recipes' },
  { id: 'millet', label: 'Millet-Based' },
  { id: 'rice', label: 'Rice Dishes' },
  { id: 'lentils', label: 'Lentils & Dal' },
];

// Helper functions
export const getCategoryLabel = (categories: CategoryConfig[], id: string): string => {
  return categories.find(c => c.id === id)?.label || id;
};

export const getCategoryColor = (categories: CategoryConfig[], id: string): string => {
  return categories.find(c => c.id === id)?.color || '#E53E6A';
};

export const getDietColor = (diet: DietPreference): string => {
  return DIET_PREFERENCES.find(d => d.id === diet)?.color || '#E53E6A';
};

export const getDifficultyColor = (difficulty: DifficultyLevel): string => {
  return DIFFICULTY_LEVELS.find(d => d.id === difficulty)?.color || '#F59E0B';
};

export const getHealthTagLabel = (tag: HealthTag): string => {
  return HEALTH_TAGS.find(h => h.id === tag)?.label || tag;
};
