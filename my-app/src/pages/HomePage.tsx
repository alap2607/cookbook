import { Link } from "react-router-dom";
import { Truck, Clock, Star } from "lucide-react";
import { useRecipes } from "../hooks/useRecipes";
import Header from "../components/Header";
import "./HomePage.css";
import Footer from "../components/Footer";

export default function HomePage() {
  const { recipes } = useRecipes();

  return (
    <div className="app">
      <Header />

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Welcome to Culinaria & Enjoy Delicious Food</h1>

            <div className="home-hero-buttons">
              {/* <Link to="/contact" className="home-hero-button primary">
                Reserve Table
              </Link>
              <Link to="/recipes" className="home-hero-button secondary">
                Order Online
              </Link> */}
            </div>

            <div className="home-hero-features">
              <div className="home-hero-feature">
                <a href="/recipes" className="cta-button">
                  Browse Recipes
                </a>
              </div>
            </div>
          </div>

          <div className="home-hero-image-section">
            <div className="home-hero-circle-bg"></div>
            {recipes.length > 0 && <img src={recipes[2].imageUrl} alt={recipes[2].title} className="home-hero-main-image" />}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="home-popular-section">
        <div className="home-popular-container">
          <h2 className="home-popular-title">Our Popular Dishes</h2>

          <div className="home-popular-dishes">
            {recipes.slice(0, 6).map((recipe) => (
              <div key={recipe.id} className="home-dish-card">
                <div className="home-dish-image-wrapper">
                  <img src={recipe.imageUrl} alt={recipe.title} className="home-dish-image" />
                </div>
                <h3 className="home-dish-title">{recipe.title}</h3>
                <div className="home-dish-meta">
                  <span>{recipe.cookTime * 10} Cal</span>
                  <span>{recipe.servings * 12}.8 °C</span>
                </div>
                <div className="home-dish-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "#FFB800" : "none"} stroke={i < 4 ? "#FFB800" : "#ddd"} strokeWidth={1.5} />
                  ))}
                  <span className="home-dish-reviews">({((Number(recipe.id) * 327) % 1000) + 1}k Review)</span>
                </div>
                <Link to={`/recipes/${recipe.id}`} className="home-dish-button">
                  View Recipe
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
