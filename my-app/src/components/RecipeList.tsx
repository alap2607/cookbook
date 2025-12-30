import type { Recipe } from "../services/api";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
  recipes: Recipe[];
  category?: string;
}

export default function RecipeList({ recipes, category }: RecipeListProps) {
  const filteredRecipes = category ? recipes.filter((recipe) => recipe.category === category) : recipes;

  if (filteredRecipes.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "var(--dark-text)", opacity: 0.7 }}>
        <p>No recipes found.</p>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
