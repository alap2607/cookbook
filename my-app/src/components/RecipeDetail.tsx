import { Link } from "react-router-dom";
import type { Recipe } from "../services/api";
import { Clock, Users, Flame, ChevronLeft, Heart, MoreVertical } from "lucide-react";
import { useState } from "react";
import "./RecipeDetail.css";

interface RecipeDetailProps {
  recipe: Recipe;
}

// interface Ingredient {
//   quantity: number;
//   unit: string;
//   item: string;
// }

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  const [portions, setPortions] = useState(recipe.servings);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIncrementPortions = () => setPortions(portions + 1);
  const handleDecrementPortions = () => {
    if (portions > 1) setPortions(portions - 1);
  };
  const baseServings = recipe.servings;
  const getScaledQuantity = (quantity: number) => {
    const scaled = (quantity / baseServings) * portions;
    return Number.isInteger(scaled) ? scaled : scaled.toFixed(1);
  };

  // Calculate a complexity rating (4 stars based on cook time)
  const complexity = Math.min(5, Math.ceil(recipe.cookTime / 15));

  return (
    <div className="recipe-detail-container">
      {/* Left Panel - Pink/Rose Background */}
      <div className="recipe-detail-left">
        <div className="recipe-breadcrumb">
          <Link to="/recipes" className="breadcrumb-back">
            <ChevronLeft size={20} />
          </Link>
          {/* <span className="breadcrumb-text">
            {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)} &gt; Chef's &gt; {recipe.cusine} &gt; {recipe.title}
          </span> */}
        </div>

        <div className="recipe-header-info">
          {/* <p className="recipe-chef">Chef Gordon Ramsay</p> */}
          <h1 className="recipe-title-main">{recipe.title}</h1>

          <div className="recipe-complexity">
            <span className="complexity-label">Complexity</span>
            <div className="complexity-stars">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < complexity ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="recipe-image-circle">
          <img src={recipe.imageUrl} alt={recipe.title} />
        </div>

        <button className="btn-add-cookbook">Add to my cooking book</button>

        <button className={`btn-favorite ${isFavorite ? "active" : ""}`} onClick={() => setIsFavorite(!isFavorite)}>
          <Heart size={24} fill={isFavorite ? "#fff" : "none"} />
        </button>
      </div>

      {/* Right Panel - White Background */}
      <div className="recipe-detail-right">
        <button className="btn-menu">
          <MoreVertical size={24} />
        </button>

        {/* Info Pills */}
        <div className="recipe-info-pills">
          <div className="info-pill">
            <Clock size={20} className="pill-icon" />
            <div>
              <p className="pill-label">Cooking</p>
              <p className="pill-value">{recipe.cookTime} min</p>
            </div>
          </div>
          <div className="info-pill">
            <Users size={20} className="pill-icon" />
            <div>
              <p className="pill-label">Portions</p>
              <p className="pill-value">{recipe.servings}</p>
            </div>
          </div>
          <div className="info-pill">
            <Flame size={20} className="pill-icon" />
            <div>
              <p className="pill-label">Calories</p>
              <p className="pill-value">350</p>
            </div>
          </div>
        </div>

        {/* Portions Selector */}
        <div className="portions-section">
          <h3>Portions</h3>
          <div className="portions-selector">
            <button onClick={handleDecrementPortions} className="portion-btn">
              -
            </button>
            <span className="portion-display">{portions}</span>
            <button onClick={handleIncrementPortions} className="portion-btn">
              +
            </button>
          </div>
        </div>

        {/* Ingredients */}
        <div className="ingredients-section">
          <h3>Ingredients</h3>
          <ul className="ingredients-list-detail">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {getScaledQuantity(ingredient.quantity)} {ingredient.unit} {ingredient.item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tempering Ingredients
        <div className="ingredients-section">
          <h3>For Tempering</h3>
          <ul className="ingredients-list-detail">
            {recipe.temperingingredients.map((temperingingredients: Ingredient, index: number) => (
              <li key={index}>
                {getScaledQuantity(temperingingredients.quantity)} {temperingingredients.unit} {temperingingredients.item}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Cooking Instructions */}
        <div className="instructions-section">
          <h3>Cooking instructions</h3>
          <ul className="instructions-list-detail">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>

        {/* Nutritional Values Label */}
        <div className="nutritional-label">Nutritional values</div>
      </div>
    </div>
  );
}
