import { useParams, Link } from "react-router-dom";
import { useRecipe } from "../hooks/useRecipes";
import { Clock, Carrot, Heart, Share2, MessageCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
// import { useFavorites } from "../hooks/useFavorites";
import Layout from "../components/Layout";
import "./RecipeDetailPage.css";

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { recipe, loading, error } = useRecipe(id);
  // const { isFavorite, toggleFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<"favorite" | "comments">("favorite");
  const [portions, setPortions] = useState(4);

  if (loading) {
    return (
      <Layout>
        <div className="recipe-detail-loading">
          <div className="loading-spinner"></div>
          <p>Loading recipe...</p>
        </div>
      </Layout>
    );
  }

  if (error || !recipe) {
    return (
      <Layout>
        <div className="recipe-detail-error">
          <p>{error || "Recipe not found"}</p>
          <Link to="/recipes" className="back-link">
            Back to Recipes
          </Link>
        </div>
      </Layout>
    );
  }

  const baseServings = recipe.servings;
  const getScaledQuantity = (quantity: number) => {
    const scaled = (quantity / baseServings) * portions;
    return Number.isInteger(scaled) ? scaled : scaled.toFixed(1);
  };

  // const rating = (4 + (parseInt(recipe.id) % 10) / 10).toFixed(1);

  return (
    <Layout>
      <div className="recipe-detail-page">
        {/* Breadcrumb */}
        <nav className="recipe-breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={16} />
          <Link to="/category">Category</Link>
          <ChevronRight size={16} />
          <Link to={`/category?type=${recipe.category}`}>{recipe.category}</Link>
          <ChevronRight size={16} />
          <span className="current">{recipe.title}</span>
        </nav>

        <div className="recipe-detail-content">
          {/* Left Column - Image and Actions */}
          <div className="recipe-detail-left">
            <div className="recipe-image-container">
              <img src={recipe.imageUrl} alt={recipe.title} className="recipe-main-image" />
              {/* <button className={`recipe-bookmark-btn ${isFavorite(recipe.id) ? "active" : ""}`} onClick={() => toggleFavorite(recipe.id)}>
                <Bookmark size={20} fill={isFavorite(recipe.id) ? "currentColor" : "none"} />
              </button> */}
            </div>

            {/* Action Tabs */}
            <div className="recipe-action-tabs">
              <button className={`action-tab ${activeTab === "favorite" ? "active" : ""}`} onClick={() => setActiveTab("favorite")}>
                <Heart size={18} />
                <span>Favorite</span>
              </button>
              <button className="action-tab">
                <Share2 size={18} />
                <span>Share</span>
              </button>
              <button className={`action-tab ${activeTab === "comments" ? "active" : ""}`} onClick={() => setActiveTab("comments")}>
                <MessageCircle size={18} />
                <span>Comments</span>
              </button>
            </div>

            {/* Quick Info */}
            <div className="recipe-quick-info">
              <div className="quick-info-item">
                <Clock size={18} />
                <span>{recipe.cookTime} min</span>
              </div>
              <div className="quick-info-item">
                <Carrot size={18} />
                <span>{recipe.ingredients.length} Ingredients</span>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="recipe-detail-right">
            <div className="recipe-header">
              <span className="recipe-category-badge">{recipe.category}</span>
              <h1 className="recipe-title">{recipe.title}</h1>

              {/* <div className="recipe-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(parseFloat(rating)) ? '#FFB800' : 'none'}
                    stroke="#FFB800"
                  />
                ))}
                <span className="rating-value">({rating})</span>
                <span className="review-count">12 Reviews</span>
              </div> */}
              {/* description */}
              <p className="recipe-description">{recipe.description}</p>
            </div>

            {/* Portions Selector */}
            <div className="portions-section">
              <h3>Portions</h3>
              <div className="portions-controls">
                <button className="portion-btn" onClick={() => portions > 1 && setPortions(portions - 1)}>
                  -
                </button>
                <span className="portion-value">{portions}</span>
                <button className="portion-btn" onClick={() => setPortions(portions + 1)}>
                  +
                </button>
              </div>
            </div>

            {/* Ingredients and Instructions Side by Side */}
            <div className="recipe-content-grid">
              {/* Ingredients */}
              <div className="ingredients-section">
                <h2>🧾 Ingredients</h2>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      {/* Render subheading ONLY */}
                      {ingredient.subheading && <h4 className="ingredient-subheading">{ingredient.subheading}</h4>}

                      {/* Render ingredient ONLY if item exists */}
                      {ingredient.item && (
                        <>
                          <span className="ingredient-bullet"></span>
                          <span className="ingredient-text">
                            {ingredient.quantity !== null && `${getScaledQuantity(ingredient.quantity)} ${ingredient.unit} `}
                            {ingredient.item}
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div className="instructions-section">
                <h2>👩‍🍳 Step-by-Step Method</h2>
                <ol className="instructions-list">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item">
                      {typeof instruction === 'object' && instruction !== null && 'subheading' in instruction ? (
                        <h4 className="instruction-subheading">{(instruction as { subheading: string }).subheading}</h4>

                      ) : (
                        <>

                      {/* <span className="instruction-number">{index +1}</span> */}
                          <span className="instruction-text">{typeof instruction === 'string' ? instruction : ''}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
