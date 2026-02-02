import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChefHat, Heart, TrendingUp, Sparkles, Award } from "lucide-react";
import { useRecipes } from "../hooks/useRecipes";
import Layout from "../components/Layout";
import RecipeCardNew from "../components/RecipeCardNew";
import { MEAL_TYPES, APP_EXCLUSIVE_SECTIONS, type AppExclusive } from "../config/categories";
import "./HomePage.css";

const categories = MEAL_TYPES.slice(0, 6);

// Icon mapping for exclusive sections
const getExclusiveIcon = (sectionId: string) => {
  switch (sectionId) {
    case 'chefs-picks': return <ChefHat size={20} />;
    case 'most-loved': return <Heart size={20} />;
    case 'trending': return <TrendingUp size={20} />;
    case 'new-this-week': return <Sparkles size={20} />;
    case 'editors-choice': return <Award size={20} />;
    default: return null;
  }
};

export default function HomePage() {
  const { recipes } = useRecipes();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(recipe =>
    searchQuery === "" ||
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get recipes for exclusive sections
  const getExclusiveRecipes = (sectionId: AppExclusive) => {
    switch (sectionId) {
      case 'chefs-picks':
        return recipes.filter(r => r.appExclusive?.includes('chefs-picks'));
      case 'most-loved':
        // Get top-rated recipes or those marked as most-loved
        return recipes
          .filter(r => r.appExclusive?.includes('most-loved') || (r.rating && r.rating >= 4.7))
          .sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'trending':
        return recipes.filter(r => r.appExclusive?.includes('trending'));
      case 'new-this-week': {
        // Get recipes from last 7 days or marked as new-this-week
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return recipes.filter(r =>
          r.appExclusive?.includes('new-this-week') ||
          new Date(r.createdAt) >= oneWeekAgo
        );
      }
      case 'editors-choice':
        return recipes.filter(r => r.appExclusive?.includes('editors-choice'));
      default:
        return [];
    }
  };

  return (
    <Layout onSearch={setSearchQuery}>
      <div className="home-page">
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">
              Taste the World: Discover diverse cuisines worldwide at your home!
            </h1>
            <Link to="/categories" className="hero-cta">
              <span>Explore More</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=500&fit=crop"
              alt="Delicious food"
            />
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="categories-header">
            <h2 className="categories-title">Categories</h2>
            <Link to="/categories" className="categories-view-all">View all</Link>
          </div>
          <div className="categories-list">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category?mealType=${category.id}`}
                className="category-pill"
              >
                <img src={category.image} alt={category.label} className="category-pill-image" />
                <span>{category.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* App Exclusive Sections */}
        {APP_EXCLUSIVE_SECTIONS.map((section) => {
          const sectionRecipes = getExclusiveRecipes(section.id as AppExclusive);
          if (sectionRecipes.length === 0) return null;
          return (
            <section key={section.id} className="exclusive-section">
              <div className="exclusive-section-header">
                <div className="exclusive-section-title">
                  <span className="exclusive-section-icon" style={{ color: section.color }}>
                    {getExclusiveIcon(section.id)}
                  </span>
                  <h2>{section.label}</h2>
                </div>
                <Link to={`/category?exclusive=${section.id}`} className="exclusive-section-view-all">
                  View all
                </Link>
              </div>
              <div className="exclusive-section-grid">
                {sectionRecipes.slice(0, 4).map((recipe) => (
                  <RecipeCardNew key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Recipes Section */}
        <section className="recipes-section">
          <h2 className="recipes-title">Recipes from your connections</h2>
          <div className="recipes-grid">
            {filteredRecipes.slice(0, 6).map((recipe) => (
              <RecipeCardNew key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {filteredRecipes.length > 6 && (
            <div className="recipes-more">
              <Link to="/recipes" className="recipes-more-link">
                View all recipes
              </Link>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
