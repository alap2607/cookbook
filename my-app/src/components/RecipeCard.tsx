import { Link } from "react-router-dom";
import type { Recipe } from "../services/api";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="recipe-image-placeholder">
        <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      </div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <span className="recipe-tag">{recipe.category}</span>
    </Link>
  );
}
