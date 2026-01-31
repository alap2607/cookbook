import { useSearchParams, Link } from 'react-router-dom';
// import { Star } from 'lucide-react';
import { useRecipes } from '../hooks/useRecipes';
import { useSearchRecipes } from '../hooks/useSearch';
import type { SearchFilters } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import RecipeCardSkeleton from '../components/RecipeCardSkeleton';
import Header from '../components/Header';
import './RecipesPage.css';
import Footer from '../components/Footer';
import { useState, useEffect, useMemo } from 'react';

export default function RecipesPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { recipes, loading, error } = useRecipes();

  const [filters, setFilters] = useState<SearchFilters>({
    searchQuery: '',
    categories: category ? [category] : [],
    minCookTime: 0,
    maxCookTime: 120,
    minServings: 1,
    maxServings: 10,
    cuisine: '',
    sortBy: 'default'
  });

  // Update category filter when URL changes
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      categories: category ? [category] : []
    }));
  }, [category]);

  const filteredRecipes = useSearchRecipes(recipes, filters);

  // Sort filtered recipes
  const sortedRecipes = useMemo(() => {
    const sorted = [...filteredRecipes];

    switch (filters.sortBy) {
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'time-asc':
        return sorted.sort((a, b) => a.cookTime - b.cookTime);
      case 'time-desc':
        return sorted.sort((a, b) => b.cookTime - a.cookTime);
      case 'servings-asc':
        return sorted.sort((a, b) => a.servings - b.servings);
      case 'servings-desc':
        return sorted.sort((a, b) => b.servings - a.servings);
      case 'default':
      default:
        return sorted;
    }
  }, [filteredRecipes, filters.sortBy]);

  // Extract unique cuisines for filter dropdown
  const availableCuisines = useMemo(() => {
    return [...new Set(recipes.map(r => r.cuisine))].sort();
  }, [recipes]);

  return (
    <div className="app recipes-page">
      <Header />

      {/* Menu Section */}
      <section className="recipes-menu-section">
        <div className="recipes-menu-container">
          <h1 className="recipes-menu-title">Explore Our Recipes</h1>

          {/* Search Bar */}
          <div style={{ marginBottom: '2rem' }}>
            <SearchBar
              value={filters.searchQuery}
              onChange={(value) => setFilters(prev => ({ ...prev, searchQuery: value }))}
              placeholder="Search recipes by name, ingredient, or cuisine..."
            />
          </div>

          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            onFiltersChange={setFilters}
            availableCuisines={availableCuisines}
          />

          {/* Category Pills */}
          <div className="recipes-category-pills">
            <Link
              to="/recipes?category=vegetarian"
              className={category === 'vegetarian' ? "recipe-pill active" : "recipe-pill"}
            >
              Vegetarian
            </Link>
            <Link
              to="/recipes?category=chicken"
              className={category === 'chicken' ? "recipe-pill active" : "recipe-pill"}
            >
              Chicken
            </Link>
            <Link
              to="/recipes?category=quick"
              className={category === 'quick' ? "recipe-pill active" : "recipe-pill"}
            >
              Quick Meals
            </Link>
            <Link
              to="/recipes?category=spicy"
              className={category === 'spicy' ? "recipe-pill active" : "recipe-pill"}
            >
              Spicy
            </Link>
            <Link
              to="/recipes"
              className={!category ? "recipe-pill active" : "recipe-pill"}
            >
              All Recipes
            </Link>
          </div>

          {/* Results Count */}
          {!loading && !error && (
            <div className="recipes-results-count">
              Showing <strong>{filteredRecipes.length}</strong> of <strong>{recipes.length}</strong> recipes
            </div>
          )}

          {/* Recipes Grid */}
          {loading ? (
            <div className="recipes-grid">
              {[...Array(6)].map((_, index) => (
                <RecipeCardSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : filteredRecipes.length === 0 ? (
            <div className="empty-state">
              <p>No recipes found matching your filters.</p>
              <button
                onClick={() => setFilters({
                  searchQuery: '',
                  categories: [],
                  minCookTime: 0,
                  maxCookTime: 120,
                  minServings: 1,
                  maxServings: 10,
                  cuisine: '',
                  sortBy: 'default'
                })}
                className="clear-all-btn"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="recipes-grid">
                {sortedRecipes.map((recipe) => (
                  <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-menu-card">
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
                    {/* <div className="recipe-menu-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 4 ? "#FFB800" : "none"}
                          stroke={i < 4 ? "#FFB800" : "#ddd"}
                          strokeWidth={1.5}
                        />
                      ))} */}
                      {/* <span className="recipe-menu-reviews">({(Number(recipe.id) * 327) % 1000 + 1}k Review)</span> */}
                    {/* </div> */}
                    {/* <span className="recipe-menu-button">
                      View Recipe
                    </span> */}
                  </Link>
                ))}
              </div>

              {category && (
                <div className="recipes-view-all">
                  <Link to="/recipes" className="recipes-view-all-button">
                    View All Recipes
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
