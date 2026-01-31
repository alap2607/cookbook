import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  LayoutGrid,
  PlusCircle,
  ChefHat,
  UtensilsCrossed,
  Globe,
  ChevronDown
} from "lucide-react";
import { MEAL_TYPES, CUISINES } from "../config/categories";
import "./Sidebar.css";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: <Home size={20} /> },
  { path: "/category", label: "Category", icon: <LayoutGrid size={20} /> },
  { path: "/create", label: "Create", icon: <PlusCircle size={20} /> },
];

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mealTypeExpanded, setMealTypeExpanded] = useState(false);
  const [cuisineExpanded, setCuisineExpanded] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <Link to="/" className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <ChefHat size={24} color="white" />
          </div>
          <span className="sidebar-logo-text">Culinaria</span>
        </Link>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${isActive(item.path) ? "active" : ""}`}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              <span className="sidebar-nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Category Navigation Sections */}
        <div className="sidebar-sections">
          {/* Meal Type Section */}
          <div className="sidebar-section">
            <button
              className={`sidebar-section-header ${mealTypeExpanded ? "expanded" : ""}`}
              onClick={() => setMealTypeExpanded(!mealTypeExpanded)}
            >
              <span className="sidebar-section-icon">
                <UtensilsCrossed size={18} />
              </span>
              <span className="sidebar-section-label">Meal Type</span>
              <ChevronDown
                size={16}
                className={`sidebar-section-chevron ${mealTypeExpanded ? "rotated" : ""}`}
              />
            </button>
            {mealTypeExpanded && (
              <div className="sidebar-section-content">
                {MEAL_TYPES.map((meal) => (
                  <Link
                    key={meal.id}
                    to={`/category?mealType=${meal.id}`}
                    className="sidebar-sub-item"
                  >
                    {meal.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Cuisine Section */}
          <div className="sidebar-section">
            <button
              className={`sidebar-section-header ${cuisineExpanded ? "expanded" : ""}`}
              onClick={() => setCuisineExpanded(!cuisineExpanded)}
            >
              <span className="sidebar-section-icon">
                <Globe size={18} />
              </span>
              <span className="sidebar-section-label">Cuisine</span>
              <ChevronDown
                size={16}
                className={`sidebar-section-chevron ${cuisineExpanded ? "rotated" : ""}`}
              />
            </button>
            {cuisineExpanded && (
              <div className="sidebar-section-content">
                {CUISINES.map((cuisine) => (
                  <Link
                    key={cuisine.id}
                    to={`/category?cuisine=${cuisine.id}`}
                    className="sidebar-sub-item"
                  >
                    {cuisine.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
