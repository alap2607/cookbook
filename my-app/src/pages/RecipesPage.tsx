import { useSearchParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useRecipes } from '../hooks/useRecipes';
import Header from '../components/Header';
import './RecipesPage.css';
import Footer from '../components/Footer';

export default function RecipesPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { recipes, loading, error } = useRecipes();

  const filteredRecipes = category
    ? recipes.filter(recipe => recipe.category === category)
    : recipes;

  return (
    <div className="app recipes-page">
      <Header />

      {/* Menu Section */}
      <section className="recipes-menu-section">
        <div className="recipes-menu-container">
          <h1 className="recipes-menu-title">Explore Our Recipes</h1>

          {/* Category Pills */}
          <div className="recipes-category-pills">
            <Link
              to="/recipes?category=vegetarian"
              className={category === 'vegetarian' ? "recipe-pill active" : "recipe-pill"}
            >
              Indian
            </Link>
            <Link
              to="/recipes?category=chicken"
              className={category === 'chicken' ? "recipe-pill active" : "recipe-pill"}
            >
              Mexican
            </Link>
            <Link
              to="/recipes?category=quick"
              className={category === 'quick' ? "recipe-pill active" : "recipe-pill"}
            >
              Italian
            </Link>
            <Link
              to="/recipes?category=spicy"
              className={category === 'spicy' ? "recipe-pill active" : "recipe-pill"}
            >
              Japanese
            </Link>
            <Link
              to="/recipes"
              className={!category ? "recipe-pill active" : "recipe-pill"}
            >
              {recipes.length}+ Items
            </Link>
          </div>

          {/* Recipes Grid */}
          {loading ? (
            <div className="loading">Loading recipes...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <div className="recipes-grid">
                {filteredRecipes.map((recipe) => (
                  <div key={recipe.id} className="recipe-menu-card">
                    <div className="recipe-menu-image-wrapper">
                      <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="recipe-menu-image"
                      />
                    </div>
                    <h3 className="recipe-menu-title">{recipe.title}</h3>
                    <div className="recipe-menu-meta">
                      <span>{recipe.cookTime * 10} Cal</span>
                      {/* <span>{recipe.servings * 12}.8 °C</span> */}
                    </div>
                    <div className="recipe-menu-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 4 ? "#FFB800" : "none"}
                          stroke={i < 4 ? "#FFB800" : "#ddd"}
                          strokeWidth={1.5}
                        />
                      ))}
                      {/* <span className="recipe-menu-reviews">({(Number(recipe.id) * 327) % 1000 + 1}k Review)</span> */}
                    </div>
                    <Link to={`/recipes/${recipe.id}`} className="recipe-menu-button">
                      View Recipe
                    </Link>
                  </div>
                ))}
              </div>

              {category && (
                <div className="recipes-view-all">
                  <Link to="/recipes" className="recipes-view-all-button">
                    View All The {category.charAt(0).toUpperCase() + category.slice(1)} Items
                  </Link>
                </div>  
              )}
            </>
          )}
        </div>
      </section>
      <div><Footer /></div>
    </div>
  );
}
