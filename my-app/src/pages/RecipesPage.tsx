import { useSearchParams, Link } from 'react-router-dom';
import { useRecipes } from '../hooks/useRecipes';
import RecipeList from '../components/RecipeList';
import Header from '../components/Header';

export default function RecipesPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { recipes, loading, error } = useRecipes();

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1) + ' Recipes'
    : 'All Recipes';

  return (
    <div className="app">
      <Header />
      <section className="recipes-page" style={{ padding: '40px 20px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 className="section-title">{categoryTitle}</h1>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link to="/recipes" className={!category ? "btn-primary" : "btn-secondary"}>
                All
              </Link>
              <Link to="/recipes?category=vegetarian" className={category === 'vegetarian' ? "btn-primary" : "btn-secondary"}>
                Vegetarian
              </Link>
              <Link to="/recipes?category=chicken" className={category === 'chicken' ? "btn-primary" : "btn-secondary"}>
                Chicken
              </Link>
              <Link to="/recipes?category=quick" className={category === 'quick' ? "btn-primary" : "btn-secondary"}>
                Quick
              </Link>
              <Link to="/recipes?category=spicy" className={category === 'spicy' ? "btn-primary" : "btn-secondary"}>
                Spicy
              </Link>
            </div>
          </div>

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
