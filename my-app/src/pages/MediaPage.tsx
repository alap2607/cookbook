import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useRecipes } from "../hooks/useRecipes";
import { Sparkles, Heart, X, Clock, Users } from "lucide-react";
import './MediaPage.css';

export default function MediaPage() {
  const { recipes, loading, error } = useRecipes();
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; id: string } | null>(null);

  if (loading) {
    return (
      <div className="app media-page">
        <Header />
        <div className="media-loading-container">
          Loading gallery...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app media-page">
        <Header />
        <div className="media-error-container">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="app media-page">
      <Header />

      {/* Hero Section */}
      <section className="media-hero">
        <div className="media-hero-content">
          <h1 className="media-hero-title">
            Recipe Gallery
          </h1>
          <p className="media-hero-description">
            Explore our collection of delicious recipes through beautiful food photography
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="media-gallery-section">
        <div className="media-gallery-container">
          <div className="media-gallery-grid">
            {recipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="media-gallery-item"
                onClick={() => setSelectedImage({ url: recipe.imageUrl, title: recipe.title, id: recipe.id })}
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.05}s backwards`
                }}
              >
                <div className="media-gallery-image-wrapper">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="media-gallery-image"
                  />
                  <div className="media-gallery-overlay">
                    <h3 className="media-gallery-recipe-title">
                      {recipe.title}
                    </h3>
                    <div className="media-gallery-recipe-meta">
                      <span className="media-gallery-meta-item">
                        <Clock size={16} /> {recipe.cookTime} min
                      </span>
                      <span className="media-gallery-meta-item">
                        <Users size={16} /> {recipe.servings}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="media-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="media-lightbox-close-button"
          >
            <X size={24} color="#2d2d2d" />
          </button>

          <div
            className="media-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="media-lightbox-image"
            />
            <div className="media-lightbox-info">
              <h3 className="media-lightbox-title">
                {selectedImage.title}
              </h3>
              <Link
                to={`/recipes/${selectedImage.id}`}
                className="media-lightbox-link"
              >
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="media-footer">
        <p className="media-footer-title">
          <Sparkles size={18} /> Culinaria Fine Foods & Recipes - Making Food Taste Better <Sparkles size={18} />
        </p>
        <p className="media-footer-subtitle">
          Made with <Heart size={18} fill="currentColor" /> and finest quality ingredients
        </p>
      </footer>
    </div>
  );
}
