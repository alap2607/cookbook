import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const getLinkStyle = (path: string) => ({
    textDecoration: 'none',
    color: isActive(path) ? '#8B4513' : '#5D4E37',
    fontSize: '0.95rem',
    fontWeight: 500,
    borderBottom: isActive(path) ? '2px solid #8B4513' : 'none',
    paddingBottom: '4px'
  });

  return (
    <header style={{
      background: '#E8D7C3',
      borderBottom: 'none',
      padding: '20px 60px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: '#8B4513'
          }}
        >
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            margin: 0,
            fontFamily: 'Georgia, serif',
            color: '#8B4513',
            letterSpacing: '1px'
          }}>
            Culinaria
          </h1>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '2px',
            color: '#8B4513'
          }}>
            Fine Foods & Recipes
          </p>
        </Link>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '35px'
        }}>
          <Link to="/" style={getLinkStyle('/')}>
            Home
          </Link>
          <Link to="/about" style={getLinkStyle('/about')}>
            About Us
          </Link>
          <Link to="/recipes" style={getLinkStyle('/recipes')}>
            Recipes
          </Link>
          <Link to="/media" style={getLinkStyle('/media')}>
            Media
          </Link>
          <Link to="/contact" style={getLinkStyle('/contact')}>
            Contact
          </Link>
          <Search size={20} color="#5D4E37" style={{ cursor: 'pointer' }} />
          <ShoppingCart size={20} color="#5D4E37" style={{ cursor: 'pointer' }} />
        </nav>
      </div>
    </header>
  );
}
