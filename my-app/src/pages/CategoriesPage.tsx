import { Link } from "react-router-dom";
import { ChevronRight, UtensilsCrossed } from "lucide-react";
import Layout from "../components/Layout";
import {
  MEAL_TYPES,
  CUISINES,
  DIET_PREFERENCES,
  TIME_CATEGORIES,
  HEALTH_TAGS,
  OCCASIONS,
  COOKING_METHODS,
  type CategoryConfig,
} from "../config/categories";
import "./CategoriesPage.css";

// Category group definition
interface CategoryGroup {
  id: string;
  title: string;
  filterKey: string;
  categories: CategoryConfig[];
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  { id: "mealType", title: "Meal Types", filterKey: "mealType", categories: MEAL_TYPES },
  { id: "cuisine", title: "Cuisines", filterKey: "cuisine", categories: CUISINES },
  { id: "diet", title: "Diet Preferences", filterKey: "diet", categories: DIET_PREFERENCES },
  { id: "time", title: "Cook Time", filterKey: "time", categories: TIME_CATEGORIES },
  { id: "health", title: "Health & Lifestyle", filterKey: "health", categories: HEALTH_TAGS },
  { id: "occasion", title: "Occasions", filterKey: "occasion", categories: OCCASIONS },
  { id: "method", title: "Cooking Methods", filterKey: "method", categories: COOKING_METHODS },
];

export default function CategoriesPage() {
  return (
    <Layout>
      <div className="categories-page">
        {/* Page Header */}
        <section className="categories-header">
          <nav className="categories-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span className="current">Categories</span>
          </nav>
          <h1 className="categories-page-title">Explore Categories</h1>
          <p className="categories-subtitle">
            Discover recipes organized by meal type, cuisine, diet, and more
          </p>
        </section>

        {/* All Recipes Card */}
        <section className="all-recipes-section">
          <Link to="/category" className="all-recipes-card">
            <div className="all-recipes-icon">
              <UtensilsCrossed size={32} />
            </div>
            <div className="all-recipes-content">
              <h2>All Recipes</h2>
              <p>Browse our complete collection of recipes</p>
            </div>
            <ChevronRight size={24} className="all-recipes-arrow" />
          </Link>
        </section>

        {/* Category Groups */}
        {CATEGORY_GROUPS.map((group) => (
          <section key={group.id} className="category-group">
            <div className="category-group-header">
              <h2 className="category-group-title">{group.title}</h2>
            </div>
            <div className="category-cards-grid">
              {group.categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category?${group.filterKey}=${category.id}`}
                  className="category-card"
                  style={{
                    "--card-color": category.color || "#E53E6A",
                  } as React.CSSProperties}
                >
                  <div className="category-card-image">
                    {category.image ? (
                      <img src={category.image} alt={category.label} />
                    ) : (
                      <div className="category-card-placeholder" style={{ backgroundColor: category.color || "#E53E6A" }}>
                        <UtensilsCrossed size={32} />
                      </div>
                    )}
                    <div className="category-card-overlay" />
                  </div>
                  <div className="category-card-content">
                    <h3>{category.label}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
