// Category Type Definitions
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'desserts' | 'drinks' | 'bakery';

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
  { id: 'bakery', label: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop', color: '#D97706' },
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
  { id: 'vegetarian', label: 'Vegetarian', color: '#10B981', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
  { id: 'vegan', label: 'Vegan', color: '#22C55E', image: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=400&h=300&fit=crop' },
  { id: 'eggetarian', label: 'Eggetarian', color: '#FBBF24', image: 'https://images.unsplash.com/photo-1482049016gy-f12eb04acddb?w=400&h=300&fit=crop' },
  { id: 'chicken', label: 'Chicken', color: '#F59E0B', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop' },
  { id: 'gluten-free', label: 'Gluten-Free', color: '#A78BFA', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop' },
  { id: 'dairy-free', label: 'Dairy-Free', color: '#60A5FA', image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop' },
  { id: 'keto', label: 'Keto', color: '#F472B6', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop' },
  { id: 'low-carb', label: 'Low Carb', color: '#34D399', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
];

// Time Categories
export const TIME_CATEGORIES: CategoryConfig[] = [
  { id: 'under-15', label: 'Under 15 min', image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop', color: '#EF4444' },
  { id: 'under-30', label: '30-minute meals', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop', color: '#F59E0B' },
  { id: 'one-pot', label: 'One-pot recipes', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop', color: '#8B5CF6' },
  { id: 'weekend-special', label: 'Weekend specials', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', color: '#EC4899' },
];

// Health & Lifestyle Tags
export const HEALTH_TAGS: CategoryConfig[] = [
  { id: 'weight-loss', label: 'Weight Loss', color: '#10B981', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop' },
  { id: 'high-protein', label: 'High Protein', color: '#EF4444', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop' },
  { id: 'kids-friendly', label: 'Kids-Friendly', color: '#F59E0B', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop' },
  { id: 'diabetic-friendly', label: 'Diabetic-Friendly', color: '#3B82F6', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
  { id: 'heart-healthy', label: 'Heart Healthy', color: '#EC4899', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop' },
];

// Difficulty Levels
export const DIFFICULTY_LEVELS: CategoryConfig[] = [
  { id: 'beginner', label: 'Beginner', color: '#10B981' },
  { id: 'intermediate', label: 'Intermediate', color: '#F59E0B' },
  { id: 'advanced', label: 'Advanced', color: '#EF4444' },
];

// Occasions
export const OCCASIONS: CategoryConfig[] = [
  { id: 'festival', label: 'Festival Specials', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', color: '#F59E0B' },
  { id: 'party', label: 'Party Recipes', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop', color: '#EC4899' },
  { id: 'lunchbox', label: 'Lunchbox Ideas', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop', color: '#10B981' },
  { id: 'potluck', label: 'Potluck Dishes', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', color: '#6366F1' },
  { id: 'comfort-food', label: 'Comfort Food', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop', color: '#8B5CF6' },
];

// Cooking Methods
export const COOKING_METHODS: CategoryConfig[] = [
  { id: 'pressure-cooker', label: 'Pressure Cooker', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop', color: '#6366F1' },
  { id: 'instant-pot', label: 'Instant Pot', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', color: '#3B82F6' },
  { id: 'air-fryer', label: 'Air Fryer', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop', color: '#F59E0B' },
  { id: 'oven-baked', label: 'Oven-Baked', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop', color: '#EF4444' },
  { id: 'no-cook', label: 'No-Cook', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop', color: '#10B981' },
  { id: 'stovetop', label: 'Stovetop', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', color: '#EC4899' },
  { id: 'steamed', label: 'Steamed', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop', color: '#06B6D4' },
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
