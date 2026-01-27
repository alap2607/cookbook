import { Heart } from 'lucide-react';
import { useRecipes } from '../hooks/useRecipes';
import { useFavorites } from '../hooks/useFavorites';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import './FavoritesPage.css';

export default function FavoritesPage() {
  const { recipes, loading, error } = useRecipes();
  const { getFavoriteRecipes } = useFavorites();

  const favoriteRecipes = getFavoriteRecipes(recipes);

  return (
    <div className="app favorites-page">
      <Header />

      <section className="favorites-section">
        <div className="favorites-container">
          <h1 className="favorites-title">
            <Heart size={40} fill="#FF8243" stroke="#FF8243" />
            My Favorite Recipes
          </h1>
          <p className="favorites-subtitle">
            {favoriteRecipes.length > 0
              ? `You have ${favoriteRecipes.length} favorite ${favoriteRecipes.length === 1 ? 'recipe' : 'recipes'}`
              : 'No favorites yet'}
          </p>

          {loading ? (
            <div className="loading">Loading recipes...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : favoriteRecipes.length === 0 ? (
            <div className="empty-favorites">
              <Heart size={80} stroke="#FFB89A" strokeWidth={1.5} />
              <h2>No favorites yet!</h2>
              <p>Start exploring recipes and add your favorites by clicking the heart icon.</p>
              <a href="/recipes" className="explore-recipes-btn">
                Explore Recipes
              </a>
            </div>
          ) : (
            <div className="recipe-grid">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
