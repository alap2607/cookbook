import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, ChevronRight, X, ChevronDown, Search } from "lucide-react";
import { useRecipes } from "../hooks/useRecipes";
import Layout from "../components/Layout";
import RecipeCardNew from "../components/RecipeCardNew";
import {
  MEAL_TYPES,
  CUISINES,
  DIET_PREFERENCES,
  TIME_CATEGORIES,
  DIFFICULTY_LEVELS,
  HEALTH_TAGS,
  OCCASIONS,
  COOKING_METHODS,
  APP_EXCLUSIVE_SECTIONS,
  type DietPreference,
  type AppExclusive,
} from "../config/categories";
import "./CategoryPage.css";

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { recipes, loading } = useRecipes();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    mealType: true,
    cuisine: false,
    diet: false,
    time: false,
    difficulty: false,
    health: false,
  });

  // Get filter values from URL
  const selectedMealType = searchParams.get("mealType") || "";
  const selectedCuisine = searchParams.get("cuisine") || "";
  const selectedDiet = searchParams.getAll("diet");
  const selectedTime = searchParams.get("time") || "";
  const selectedDifficulty = searchParams.get("difficulty") || "";
  const selectedHealth = searchParams.getAll("health");
  const selectedExclusive = searchParams.get("exclusive") || "";
  const selectedOccasion = searchParams.get("occasion") || "";
  const selectedMethod = searchParams.get("method") || "";

  // Check if viewing "All Recipes" (no primary category selected)
  // Primary categories are: mealType, cuisine, exclusive, occasion, method
  // Refinement filters (diet, difficulty, time, health) don't change the view mode
  const isAllRecipes = !selectedMealType && !selectedCuisine && !selectedExclusive &&
    !selectedOccasion && !selectedMethod;

  // Get current category for header
  const getCurrentCategory = () => {
    // Primary categories (these change the view mode)
    if (selectedExclusive) {
      return APP_EXCLUSIVE_SECTIONS.find(s => s.id === selectedExclusive);
    }
    if (selectedMealType) {
      return MEAL_TYPES.find(m => m.id === selectedMealType);
    }
    if (selectedCuisine) {
      return CUISINES.find(c => c.id === selectedCuisine);
    }
    if (selectedOccasion) {
      return OCCASIONS.find(o => o.id === selectedOccasion);
    }
    if (selectedMethod) {
      return COOKING_METHODS.find(m => m.id === selectedMethod);
    }
    // If no primary category selected, show "All Recipes" (even with refinement filters)
    return { id: "all", label: "All Recipes", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" };
  };

  const currentCategory = getCurrentCategory();

  // Filter recipes
  const filteredRecipes = recipes.filter(recipe => {
    // Meal type filter
    if (selectedMealType && recipe.mealType !== selectedMealType) {
      return false;
    }

    // Cuisine filter
    if (selectedCuisine && recipe.cuisine !== selectedCuisine) {
      return false;
    }

    // Diet preferences filter (any match)
    if (selectedDiet.length > 0) {
      const hasMatchingDiet = selectedDiet.some(diet =>
        recipe.dietPreferences?.includes(diet as DietPreference)
      );
      if (!hasMatchingDiet) return false;
    }

    // Time-based filter
    if (selectedTime) {
      switch (selectedTime) {
        case "under-15":
          if (recipe.cookTime > 15) return false;
          break;
        case "under-30":
          if (recipe.cookTime > 30) return false;
          break;
        case "one-pot":
          // Check if recipe has one-pot tag or method
          break;
        case "weekend-special":
          if (recipe.cookTime < 45) return false;
          break;
      }
    }

    // Difficulty filter (only for All Recipes)
    if (isAllRecipes && selectedDifficulty && recipe.difficulty !== selectedDifficulty) {
      return false;
    }

    // Health tags filter (any match)
    if (selectedHealth.length > 0) {
      const hasMatchingHealth = selectedHealth.some(tag =>
        recipe.healthTags?.includes(tag as typeof recipe.healthTags[number])
      );
      if (!hasMatchingHealth) return false;
    }

    // App exclusive filter
    if (selectedExclusive) {
      if (!recipe.appExclusive?.includes(selectedExclusive as AppExclusive)) {
        return false;
      }
    }

    // Occasion filter
    if (selectedOccasion) {
      if (!recipe.occasions?.includes(selectedOccasion as typeof recipe.occasions[number])) {
        return false;
      }
    }

    // Cooking method filter
    if (selectedMethod && recipe.cookingMethod !== selectedMethod) {
      return false;
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = recipe.title.toLowerCase().includes(query);
      const matchesDescription = recipe.description?.toLowerCase().includes(query);
      const matchesIngredients = recipe.ingredients?.some(ing =>
        ing.item.toLowerCase().includes(query)
      );
      const matchesTags = recipe.tags?.some(tag =>
        tag.toLowerCase().includes(query)
      );
      if (!matchesTitle && !matchesDescription && !matchesIngredients && !matchesTags) {
        return false;
      }
    }

    return true;
  });

  const updateFilter = (key: string, value: string, isMulti = false) => {
    const params = new URLSearchParams(searchParams);

    if (isMulti) {
      const currentValues = params.getAll(key);
      if (currentValues.includes(value)) {
        // Remove value
        params.delete(key);
        currentValues.filter(v => v !== value).forEach(v => params.append(key, v));
      } else {
        // Add value
        params.append(key, value);
      }
    } else {
      if (value === "" || params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery("");
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const activeFilterCount = [
    selectedMealType,
    selectedCuisine,
    ...selectedDiet,
    selectedTime,
    selectedDifficulty,
    ...selectedHealth,
    selectedExclusive,
  ].filter(Boolean).length;

  return (
    <Layout>
      <div className="category-page">
        {/* Category Header */}
        <section
          className="category-header"
          style={{
            backgroundImage: `url(${currentCategory?.image || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"})`,
          }}
        >
          <div className="category-header-overlay">
            <nav className="category-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={16} />
              <Link to="/categories">Categories</Link>
              {currentCategory && currentCategory.id !== "all" && (
                <>
                  <ChevronRight size={16} />
                  <span className="current">{currentCategory.label}</span>
                </>
              )}
            </nav>
            <h1 className="category-title">{currentCategory?.label || "All Recipes"}</h1>
          </div>
        </section>

        {/* Search Bar for specific category */}
        {!isAllRecipes && (
          <div className="category-search-bar">
            <div className="category-search-input-wrapper">
              <Search size={20} className="category-search-icon" />
              <input
                type="text"
                placeholder={`Search in ${currentCategory?.label || "recipes"}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="category-search-input"
              />
              {searchQuery && (
                <button
                  className="category-search-clear"
                  onClick={() => setSearchQuery("")}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <span className="results-count">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"}
            </span>
          </div>
        )}

        {/* Filters Bar - Only for All Recipes */}
        {isAllRecipes && (
          <div className="category-filters-bar">
            <button
              className={`filter-toggle-btn ${showFilters ? "active" : ""}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="filter-count">{activeFilterCount}</span>
              )}
            </button>

            {/* Quick Filter Pills */}
            <div className="quick-filter-pills">
              {DIET_PREFERENCES.slice(0, 4).map((diet) => (
                <button
                  key={diet.id}
                  className={`quick-filter-pill ${selectedDiet.includes(diet.id) ? "active" : ""}`}
                  onClick={() => updateFilter("diet", diet.id, true)}
                >
                  {diet.label}
                </button>
              ))}
              {DIFFICULTY_LEVELS.map((diff) => (
                <button
                  key={diff.id}
                  className={`quick-filter-pill ${selectedDifficulty === diff.id ? "active" : ""}`}
                  onClick={() => updateFilter("difficulty", diff.id)}
                  style={selectedDifficulty === diff.id ? { backgroundColor: diff.color, borderColor: diff.color, color: "white" } : {}}
                >
                  {diff.label}
                </button>
              ))}
            </div>

            {activeFilterCount > 0 && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                <X size={16} />
                <span>Clear all</span>
              </button>
            )}
          </div>
        )}

        {/* Main Content */}
        <div className={`category-main ${isAllRecipes && showFilters ? "with-filters" : ""}`}>
          {/* Filter Sidebar - Only for All Recipes */}
          {isAllRecipes && showFilters && (
            <aside className="filter-sidebar">
              {/* Meal Type */}
              <div className="filter-group">
                <button
                  className="filter-group-header"
                  onClick={() => toggleSection("mealType")}
                >
                  <span>Meal Type</span>
                  <ChevronDown
                    size={16}
                    className={expandedSections.mealType ? "rotated" : ""}
                  />
                </button>
                {expandedSections.mealType && (
                  <div className="filter-group-content">
                    {MEAL_TYPES.map((meal) => (
                      <label key={meal.id} className="filter-checkbox">
                        <input
                          type="radio"
                          name="mealType"
                          checked={selectedMealType === meal.id}
                          onChange={() => updateFilter("mealType", meal.id)}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{meal.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Cuisine */}
              <div className="filter-group">
                <button
                  className="filter-group-header"
                  onClick={() => toggleSection("cuisine")}
                >
                  <span>Cuisine</span>
                  <ChevronDown
                    size={16}
                    className={expandedSections.cuisine ? "rotated" : ""}
                  />
                </button>
                {expandedSections.cuisine && (
                  <div className="filter-group-content">
                    {CUISINES.map((cuisine) => (
                      <label key={cuisine.id} className="filter-checkbox">
                        <input
                          type="radio"
                          name="cuisine"
                          checked={selectedCuisine === cuisine.id}
                          onChange={() => updateFilter("cuisine", cuisine.id)}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{cuisine.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Diet Preferences */}
              <div className="filter-group">
                <button
                  className="filter-group-header"
                  onClick={() => toggleSection("diet")}
                >
                  <span>Diet</span>
                  <ChevronDown
                    size={16}
                    className={expandedSections.diet ? "rotated" : ""}
                  />
                </button>
                {expandedSections.diet && (
                  <div className="filter-group-content">
                    {DIET_PREFERENCES.map((diet) => (
                      <label key={diet.id} className="filter-checkbox multi">
                        <input
                          type="checkbox"
                          checked={selectedDiet.includes(diet.id)}
                          onChange={() => updateFilter("diet", diet.id, true)}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{diet.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Time */}
              <div className="filter-group">
                <button
                  className="filter-group-header"
                  onClick={() => toggleSection("time")}
                >
                  <span>Cook Time</span>
                  <ChevronDown
                    size={16}
                    className={expandedSections.time ? "rotated" : ""}
                  />
                </button>
                {expandedSections.time && (
                  <div className="filter-group-content">
                    {TIME_CATEGORIES.map((time) => (
                      <label key={time.id} className="filter-checkbox">
                        <input
                          type="radio"
                          name="time"
                          checked={selectedTime === time.id}
                          onChange={() => updateFilter("time", time.id)}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{time.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Difficulty */}
              <div className="filter-group">
                <button
                  className="filter-group-header"
                  onClick={() => toggleSection("difficulty")}
                >
                  <span>Difficulty</span>
                  <ChevronDown
                    size={16}
                    className={expandedSections.difficulty ? "rotated" : ""}
                  />
                </button>
                {expandedSections.difficulty && (
                  <div className="filter-group-content">
                    {DIFFICULTY_LEVELS.map((diff) => (
                      <label key={diff.id} className="filter-checkbox">
                        <input
                          type="radio"
                          name="difficulty"
                          checked={selectedDifficulty === diff.id}
                          onChange={() => updateFilter("difficulty", diff.id)}
                        />
                        <span className="checkbox-custom" style={{ borderColor: diff.color }}></span>
                        <span>{diff.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Health Tags */}
              <div className="filter-group">
                <button
                  className="filter-group-header"
                  onClick={() => toggleSection("health")}
                >
                  <span>Health & Lifestyle</span>
                  <ChevronDown
                    size={16}
                    className={expandedSections.health ? "rotated" : ""}
                  />
                </button>
                {expandedSections.health && (
                  <div className="filter-group-content">
                    {HEALTH_TAGS.map((tag) => (
                      <label key={tag.id} className="filter-checkbox multi">
                        <input
                          type="checkbox"
                          checked={selectedHealth.includes(tag.id)}
                          onChange={() => updateFilter("health", tag.id, true)}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{tag.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          )}

          {/* Results */}
          <div className="category-results">
            {isAllRecipes && (
              <div className="results-header">
                <span className="results-count">
                  {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
                </span>
              </div>
            )}

            {loading ? (
              <div className="category-loading">Loading recipes...</div>
            ) : filteredRecipes.length === 0 ? (
              <div className="category-empty">
                <p>No recipes found{searchQuery ? ` for "${searchQuery}"` : ""}.</p>
                {(searchQuery || !isAllRecipes) && (
                  <button className="reset-btn" onClick={() => setSearchQuery("")}>
                    Clear search
                  </button>
                )}
                {isAllRecipes && activeFilterCount > 0 && (
                  <button className="reset-btn" onClick={clearFilters}>
                    Reset filters
                  </button>
                )}
              </div>
            ) : (
              <div className="category-grid">
                {filteredRecipes.map((recipe) => (
                  <RecipeCardNew key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
