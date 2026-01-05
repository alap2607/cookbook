import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1 className="header-logo-title">
            Culinaria
          </h1>
          <p className="header-logo-subtitle">
            Fine Foods & Recipes
          </p>
        </Link>

        <nav className="header-nav">
          <Link to="/" className={`header-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`header-link ${isActive('/about') ? 'active' : ''}`}>
            About Us
          </Link>
          <Link to="/recipes" className={`header-link ${isActive('/recipes') ? 'active' : ''}`}>
            Recipes
          </Link>
          <Link to="/contact" className={`header-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
          <Search size={20} color="#5D4E37" className="header-icon" />
          <ShoppingCart size={20} color="#5D4E37" className="header-icon" />
        </nav>
      </div>
    </header>
  );
}
