import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, Heart } from "lucide-react";
import { useRecipes } from '../hooks/useRecipes';
import Header from '../components/Header';
import './HomePage.css';

export default function HomePage() {
  const { recipes } = useRecipes();
  const [selectedCategory, setSelectedCategory] = useState('vegetarian');

  // Category content
  const categoryContent = {
    vegetarian: {
      title: 'Vegetarian Delights',
      description: 'Discover our collection of delicious vegetarian recipes that celebrate fresh ingredients and bold flavors. From traditional Indian dishes to creative fusion cuisine, these recipes prove that vegetarian cooking is anything but boring.',
      description2: 'Each recipe is crafted with love and tested to perfection, ensuring you get restaurant-quality results in your own kitchen. Whether you\'re a long-time vegetarian or just exploring meatless options, you\'ll find something to love here.',
      badge1: '🥗 Vegetarian Recipes',
      badge2: '⚡ Quick & Easy Options',
      badge3: '🌶️ Spicy & Mild Variants',
      filterKey: 'vegetarian'
    },
    chicken: {
      title: 'Chicken Classics',
      description: 'Explore our collection of flavorful chicken recipes that are simple yet impressive. From tender grilled chicken to rich curries, these recipes showcase the versatility of chicken in both traditional and contemporary styles.',
      description2: 'Perfect for family dinners or special occasions, each chicken recipe is designed to be easy to follow while delivering amazing taste. Learn the secrets to perfectly cooked, juicy chicken every time.',
      badge1: '🍗 Chicken Recipes',
      badge2: '🔥 Grilled & Roasted',
      badge3: '🍛 Curries & Stews',
      filterKey: 'chicken'
    },
    quick: {
      title: 'Quick & Easy Meals',
      description: 'Short on time but don\'t want to compromise on taste? Our quick recipes are designed for busy lifestyles without sacrificing flavor. Ready in 30 minutes or less, these dishes are perfect for weeknight dinners.',
      description2: 'From simple stir-fries to one-pot wonders, discover how you can create delicious, wholesome meals even on your busiest days. Smart cooking techniques and clever ingredient combinations make it all possible.',
      badge1: '⚡ Under 30 Minutes',
      badge2: '👨‍🍳 Easy to Follow',
      badge3: '🥘 One-Pot Meals',
      filterKey: 'quick'
    },
    spicy: {
      title: 'Spicy Favorites',
      description: 'For those who love the heat! Our spicy recipe collection features bold, fiery flavors that will excite your taste buds. From traditional Indian spices to international hot sauces, we\'ve got the perfect level of spice for you.',
      description2: 'Each recipe comes with adjustable heat levels, so you can customize the spice to your preference. Learn which spices create the best flavor profiles and how to balance heat with other taste elements.',
      badge1: '🌶️ Spicy Dishes',
      badge2: '🔥 Adjustable Heat',
      badge3: '🇮🇳 Indian Spices',
      filterKey: 'spicy'
    }
  };

  return (
    <div className="app">
      <Header />

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">
              Find 100 ways to make your food taste better
            </h1>

            <p className="home-hero-description">
              From pure spices to whole ones, sprinklers to blended spices, Culinaria covers the entire spectrum of home and professional cooking in India & around the world.
            </p>

            <Link to="/recipes" className="home-hero-button">
              EXPLORE RECIPES
            </Link>
          </div>

          <div className="home-hero-images">
            {recipes.slice(0, 4).map((recipe) => (
              <div key={recipe.id} className="home-hero-image-wrapper">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="home-hero-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Collections Section */}
      <section className="home-collections-section">
        <div className="home-collections-container">
          <h2 className="home-collections-title">
            Browse Our Recipe Collections
          </h2>

          {/* Recipe Category Tabs */}
          <div className="home-category-tabs">
            <button
              onClick={() => setSelectedCategory('vegetarian')}
              className={`home-category-tab ${selectedCategory === 'vegetarian' ? 'active' : ''}`}
            >
              Vegetarian
            </button>
            <button
              onClick={() => setSelectedCategory('chicken')}
              className={`home-category-tab ${selectedCategory === 'chicken' ? 'active' : ''}`}
            >
              Chicken
            </button>
            <button
              onClick={() => setSelectedCategory('quick')}
              className={`home-category-tab ${selectedCategory === 'quick' ? 'active' : ''}`}
            >
              Quick Meals
            </button>
            <button
              onClick={() => setSelectedCategory('spicy')}
              className={`home-category-tab ${selectedCategory === 'spicy' ? 'active' : ''}`}
            >
              Spicy
            </button>
          </div>

          {/* Featured Category Content */}
          <div className="home-category-content">
            <div className="home-category-text">
              <h3>
                {categoryContent[selectedCategory as keyof typeof categoryContent].title}
              </h3>
              <p>
                {categoryContent[selectedCategory as keyof typeof categoryContent].description}
              </p>
              <p>
                {categoryContent[selectedCategory as keyof typeof categoryContent].description2}
              </p>
              <div className="home-category-badges">
                <div className="home-category-badge">
                  {categoryContent[selectedCategory as keyof typeof categoryContent].badge1}
                </div>
                <div className="home-category-badge">
                  {categoryContent[selectedCategory as keyof typeof categoryContent].badge2}
                </div>
                <div className="home-category-badge">
                  {categoryContent[selectedCategory as keyof typeof categoryContent].badge3}
                </div>
              </div>
              <Link
                to={`/recipes?category=${categoryContent[selectedCategory as keyof typeof categoryContent].filterKey}`}
                className="home-category-link"
              >
                Explore {categoryContent[selectedCategory as keyof typeof categoryContent].title}
              </Link>
            </div>

            <div className="home-category-image-container">
              {(() => {
                const currentCategory = categoryContent[selectedCategory as keyof typeof categoryContent].filterKey;
                const filteredRecipes = recipes.filter(r => r.category === currentCategory);
                const featuredRecipe = filteredRecipes[0];

                return featuredRecipe && (
                  <div className="home-category-image-wrapper">
                    <img
                      src={featuredRecipe.imageUrl}
                      alt={categoryContent[selectedCategory as keyof typeof categoryContent].title}
                      className="home-category-image"
                    />
                    <div className="home-category-image-overlay">
                      <h4 className="home-category-image-title">
                        {featuredRecipe.title}
                      </h4>
                      <p className="home-category-image-subtitle">
                        Featured {categoryContent[selectedCategory as keyof typeof categoryContent].title} Recipe
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p className="home-footer-title">
          <Sparkles size={18} /> Sprinkle Herbs & Spices - Making Food Taste Better <Sparkles size={18} />
        </p>
        <p className="home-footer-subtitle">
          Made with <Heart size={18} fill="currentColor" /> and finest quality spices
        </p>
      </footer>
    </div>
  );
}
