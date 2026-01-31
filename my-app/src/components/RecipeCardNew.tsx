import { Link } from "react-router-dom";
import { Heart, Star, Clock, Carrot, UtensilsCrossed } from "lucide-react";
import type { Recipe } from "../services/api";
import { useFavorites } from "../hooks/useFavorites";
import { HEALTH_TAGS, DIFFICULTY_LEVELS, getDietColor } from "../config/categories";
import "./RecipeCardNew.css";

interface RecipeCardNewProps {
  recipe: Recipe;
}

// Mock authors for display
const mockAuthors = [
  { name: "Jimmie Joe", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Eleanor Voss", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { name: "Jackson Blythe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  { name: "Maria Chen", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  { name: "David Kim", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
];

export default function RecipeCardNew({ recipe }: RecipeCardNewProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Generate consistent author based on recipe id
  const authorIndex = parseInt(recipe.id) % mockAuthors.length;
  const author = mockAuthors[authorIndex];

  // Generate rating based on recipe id (4.0 - 5.0 range)
  const rating = (4 + (parseInt(recipe.id) % 10) / 10).toFixed(1);

  // Get ingredients count
  const ingredientsCount = recipe.ingredients?.length || 0;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  // Get diet preference color
  const getDietBadgeColor = () => {
    if (!recipe.dietPreferences || recipe.dietPreferences.length === 0) return null;
    return getDietColor(recipe.dietPreferences[0]);
  };

  // Get difficulty badge
  const getDifficultyBadge = () => {
    if (!recipe.difficulty) return null;
    const diffConfig = DIFFICULTY_LEVELS.find(d => d.id === recipe.difficulty);
    return diffConfig;
  };

  // Get health tag badges (max 2)
  const getHealthBadges = () => {
    if (!recipe.healthTags || recipe.healthTags.length === 0) return [];
    return recipe.healthTags.slice(0, 2).map(tag => {
      const config = HEALTH_TAGS.find(h => h.id === tag);
      return config;
    }).filter(Boolean);
  };

  const dietColor = getDietBadgeColor();
  const difficultyBadge = getDifficultyBadge();
  const healthBadges = getHealthBadges();

  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card-new">
      <div className="recipe-card-new-image-wrapper">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="recipe-card-new-image"
        />
        <button
          className={`recipe-card-new-favorite ${isFavorite(recipe.id) ? "active" : ""}`}
          onClick={handleFavoriteClick}
          title={isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={18}
            fill={isFavorite(recipe.id) ? "#E53E6A" : "none"}
            stroke={isFavorite(recipe.id) ? "#E53E6A" : "#fff"}
          />
        </button>
      </div>

      <div className="recipe-card-new-content">
        {/* Badges */}
        <div className="recipe-card-new-badges">
          {recipe.cookTime <= 30 && (
            <span className="recipe-badge recipe-badge-time">
              <Clock size={10} />
              {recipe.cookTime <= 15 ? "Under 15 min" : "Under 30 min"}
            </span>
          )}
          {healthBadges.map((badge) => (
            <span
              key={badge?.id}
              className="recipe-badge recipe-badge-health"
              style={{ backgroundColor: `${badge?.color}15`, color: badge?.color }}
            >
              {badge?.label}
            </span>
          ))}
          {difficultyBadge && (
            <span
              className="recipe-badge recipe-badge-difficulty"
              style={{ backgroundColor: `${difficultyBadge.color}15`, color: difficultyBadge.color }}
            >
              {difficultyBadge.label}
            </span>
          )}
        </div>

        <div className="recipe-card-new-author">
          <img
            src={author.avatar}
            alt={author.name}
            className="recipe-card-new-author-avatar"
          />
          <span className="recipe-card-new-author-name">By {author.name}</span>
        </div>

        <h3 className="recipe-card-new-title">{recipe.title}</h3>

        <div className="recipe-card-new-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(parseFloat(rating)) ? "#FFB800" : "none"}
              stroke="#FFB800"
            />
          ))}
          <span className="recipe-card-new-rating-value">({rating})</span>
        </div>

        <div className="recipe-card-new-meta">
          <div className="recipe-card-new-meta-item">
            <Clock size={14} />
            <span>{recipe.cookTime} min</span>
          </div>
          <div className="recipe-card-new-meta-item">
            <Carrot size={14} />
            <span>{ingredientsCount} Ingredients</span>
          </div>
          {recipe.dietPreferences && recipe.dietPreferences.length > 0 && (
            <div
              className="recipe-card-new-category"
              style={{ backgroundColor: `${dietColor}15`, color: dietColor || "#E53E6A" }}
            >
              <UtensilsCrossed size={12} />
              <span>{recipe.dietPreferences[0]}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
