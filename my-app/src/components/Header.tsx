import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(90deg, #fef9f5 0%, #fff 100%)',
      borderBottom: '2px solid var(--light-gray)',
      padding: '15px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(253, 89, 89, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--primary-color)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '45px',
            height: '45px',
            background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ChefHat size={26} color="white" strokeWidth={2} />
          </div>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: 0,
              fontFamily: 'Georgia, serif'
            }}>
              Siri's Kitchen
            </h1>
            <p style={{
              fontSize: '0.75rem',
              color: 'var(--dark-text)',
              margin: 0,
              fontStyle: 'italic',
              opacity: 0.7
            }}>
              Cooking with Passion
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
