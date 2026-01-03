import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useRecipes } from '../hooks/useRecipes';
import { Sparkles, Heart, X, Clock, Users } from 'lucide-react';

export default function MediaPage() {
  const { recipes, loading, error } = useRecipes();
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; id: number } | null>(null);

  if (loading) {
    return (
      <div className="app" style={{ background: '#FFF8EB' }}>
        <Header />
        <div style={{
          padding: '100px 20px',
          textAlign: 'center',
          fontSize: '1.5rem',
          color: '#B85C3E'
        }}>
          Loading gallery...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app" style={{ background: '#FFF8EB' }}>
        <Header />
        <div style={{
          padding: '100px 20px',
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#E74C3C'
        }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="app" style={{ background: '#FFF8EB' }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #E8D7C3 0%, #D4C4B0 100%)',
        padding: '80px 60px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#B85C3E',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif'
          }}>
            Recipe Gallery
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#5D4E37',
            lineHeight: 1.6
          }}>
            Explore our collection of delicious recipes through beautiful food photography
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{
        padding: '80px 60px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {recipes.map((recipe, index) => (
              <div
                key={recipe.id}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: `fadeIn 0.6s ease-out ${index * 0.05}s backwards`
                }}
                onClick={() => setSelectedImage({ url: recipe.imageUrl, title: recipe.title, id: recipe.id })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  paddingBottom: '75%',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '30px 20px 15px',
                    color: 'white'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: '8px'
                    }}>
                      {recipe.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      fontSize: '0.9rem',
                      opacity: 0.95
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={16} /> {recipe.cookTime} min
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Users size={16} /> {recipe.servings}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            <X size={24} color="#2d2d2d" />
          </button>

          <div style={{
            maxWidth: '90%',
            maxHeight: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(90vh - 100px)',
                objectFit: 'contain',
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            />
            <div style={{
              background: 'white',
              padding: '20px 30px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '10px'
              }}>
                {selectedImage.title}
              </h3>
              <Link
                to={`/recipes/${selectedImage.id}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 25px',
                  background: '#B85C3E',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#8B4513'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#B85C3E'}
              >
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        background: '#5D4E37',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: '1rem' }}>
          <Sparkles size={18} /> Culinaria Fine Foods & Recipes - Making Food Taste Better <Sparkles size={18} />
        </p>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: '10px' }}>
          Made with <Heart size={18} fill="currentColor" /> and finest quality ingredients
        </p>
      </footer>
    </div>
  );
}
