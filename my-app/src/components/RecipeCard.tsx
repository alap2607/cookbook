import { Link } from "react-router-dom";
import { Clock, Users, Heart } from "lucide-react";
import type { Recipe } from "../services/api";
import { useFavorites } from "../hooks/useFavorites";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  return (
    <Link to={`/recipes/${recipe.id}`} className="glass-recipe-card">
      <button
        className={`recipe-card-favorite ${isFavorite(recipe.id) ? 'active' : ''}`}
        onClick={handleFavoriteClick}
        title={isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart size={20} fill={isFavorite(recipe.id) ? "#FF8243" : "none"} stroke={isFavorite(recipe.id) ? "#FF8243" : "#fff"} />
      </button>
      <div className="glass-card-background">
        <img src={recipe.imageUrl} alt={recipe.title} className="glass-card-bg-image" />
      </div>
      <div className="glass-card-overlay">
        <div className="glass-panel">
          <h3 className="glass-card-title">{recipe.title}</h3>
          <div className="glass-meta-icons">
            <div className="glass-meta-item">
              <Clock size={20} strokeWidth={2} />
              <span>{recipe.cookTime} min</span>
            </div>
            <div className="glass-meta-item">
              <Users size={20} strokeWidth={2} />
              <span>{recipe.servings} people</span>
            </div>
          </div>
          <div className="glass-card-description">
            <p>{recipe.description}</p>
          </div>
          <div className="glass-category-badge">{recipe.category}</div>
        </div>
      </div>
    </Link>
  );
}
