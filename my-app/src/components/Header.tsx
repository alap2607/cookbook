import { Link, useLocation } from 'react-router-dom';
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
        </Link>

        <nav className="header-nav">
          <Link to="/" className={`header-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`header-link ${isActive('/about') ? 'active' : ''}`}>
            About Us
          </Link>
          <Link to="/recipes" className={`header-link ${isActive('/recipes') ? 'active' : ''}`}>
            Menu
          </Link>
          <Link to="/contact" className={`header-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
          <Link to="/media" className={`header-link ${isActive('/media') ? 'active' : ''}`}>
            Reviews
          </Link>
          <Link to="/contact" className="header-cta-button">
            Food Menu
          </Link>
        </nav>
      </div>
    </header>
  );
}
