import { Link } from "react-router-dom";
import type { Recipe } from "../services/api";
import { Clock, Users } from "lucide-react";

interface RecipeDetailProps {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <div className="recipe-detail">
      <div className="recipe-detail-header">
        <img src={recipe.imageUrl} alt={recipe.title} className="recipe-detail-image" />
        <div className="recipe-detail-info">
          <h1>{recipe.title}</h1>
          <p className="recipe-detail-description">{recipe.description}</p>
          <div className="recipe-meta">
            <div className="recipe-meta-item">
              <Clock size={20} />
              <span>{recipe.cookTime} mins</span>
            </div>
            <div className="recipe-meta-item">
              <Users size={20} />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          <div className="recipe-tags">
            {recipe.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <strong>
                  {ingredient.quantity} {ingredient.unit}
                </strong>{" "}
                {ingredient.item}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="recipe-actions">
        <Link to="/recipes" className="btn-secondary">
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}
