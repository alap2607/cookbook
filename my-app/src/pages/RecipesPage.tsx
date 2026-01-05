import { useSearchParams, Link } from 'react-router-dom';
import { useRecipes } from '../hooks/useRecipes';
import RecipeList from '../components/RecipeList';
import Header from '../components/Header';
import './RecipesPage.css';

export default function RecipesPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { recipes, loading, error } = useRecipes();

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1) + ' Recipes'
    : 'All Recipes';

  const categoryDescriptions: { [key: string]: string } = {
    vegetarian: 'Delicious plant-based recipes that are both healthy and satisfying',
    chicken: 'Flavorful chicken dishes for every occasion',
    quick: 'Quick and easy recipes ready in 30 minutes or less',
    spicy: 'Bold and spicy flavors for those who like it hot',
    all: 'Explore our complete collection of carefully curated recipes'
  };

  const currentDescription = category ? categoryDescriptions[category] : categoryDescriptions.all;

  return (
    <div className="app recipes-page">
      <Header />

      {/* Hero Banner */}
      <section className="recipes-hero">
        <div className="recipes-hero-content">
          <h1 className="recipes-hero-title">
            {categoryTitle}
          </h1>
          <p className="recipes-hero-description">
            {currentDescription}
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="recipes-filter-section">
        <div className="recipes-filter-container">
          <Link
            to="/recipes"
            className={!category ? "btn-primary" : "btn-secondary"}
            style={{
              ...(category ? {} : { background: '#B85C3E', color: 'white' })
            }}
          >
            All Recipes
          </Link>
          <Link
            to="/recipes?category=vegetarian"
            className={category === 'vegetarian' ? "btn-primary" : "btn-secondary"}
            style={{
              ...(category === 'vegetarian' ? { background: '#B85C3E', color: 'white' } : {})
            }}
          >
            Vegetarian
          </Link>
          <Link
            to="/recipes?category=chicken"
            className={category === 'chicken' ? "btn-primary" : "btn-secondary"}
            style={{
              ...(category === 'chicken' ? { background: '#B85C3E', color: 'white' } : {})
            }}
          >
            Chicken
          </Link>
          <Link
            to="/recipes?category=quick"
            className={category === 'quick' ? "btn-primary" : "btn-secondary"}
            style={{
              ...(category === 'quick' ? { background: '#B85C3E', color: 'white' } : {})
            }}
          >
            Quick Meals
          </Link>
          <Link
            to="/recipes?category=spicy"
            className={category === 'spicy' ? "btn-primary" : "btn-secondary"}
            style={{
              ...(category === 'spicy' ? { background: '#B85C3E', color: 'white' } : {})
            }}
          >
            Spicy
          </Link>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="recipes-grid-section">
        <div className="recipes-grid-container">
          {loading ? (
            <div className="loading">Loading recipes...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <RecipeList recipes={recipes} category={category || undefined} />
          )}
        </div>
      </section>
    </div>
  );
}
