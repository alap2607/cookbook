import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ChefHat,
  Flame,
  Drumstick,
  UtensilsCrossed,
  Salad,
  Zap,
  Sparkles,
  Heart,
  Search,
  TrendingUp,
  Clock,
  Users,
  BookOpen,
  Award,
  Calendar,
  Eye,
  Camera,
  ArrowUp
} from "lucide-react";
import { useRecipes } from '../hooks/useRecipes';
import RecipeList from '../components/RecipeList';
import Header from '../components/Header';

export default function HomePage() {
  const { recipes, loading, error } = useRecipes();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get recipe of the week (first recipe)
  const recipeOfTheWeek = recipes[0];

  // Get latest recipes (last 3)
  const latestRecipes = recipes.slice(-3).reverse();

  // Handle scroll for "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recipes?search=${searchQuery}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'Spring';
    if (month >= 5 && month <= 7) return 'Summer';
    if (month >= 8 && month <= 10) return 'Fall';
    return 'Winter';
  };

  return (
    <div className="app">
      <Header />

      {/* Enhanced Hero Section with Search */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-content">
          <h1 className="hero-title">Siri's Kitchen</h1>
          <p className="hero-tagline">Where Passion Meets Flavor</p>
          <p className="hero-description">Welcome to my culinary journey! I'm passionate about creating delicious vegetarian dishes and flavorful chicken recipes that bring joy to every table.</p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} style={{
            marginTop: '25px',
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
            maxWidth: '500px'
          }}>
            <div style={{
              flex: 1,
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search size={20} style={{
                position: 'absolute',
                left: '15px',
                color: 'rgba(255, 255, 255, 0.7)'
              }} />
              <input
                type="text"
                placeholder="Search for recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px 12px 45px',
                  borderRadius: '50px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  outline: 'none'
                }}
              />
            </div>
            <button type="submit" className="cta-button" style={{ padding: '12px 30px' }}>
              Search
            </button>
          </form>

          <Link to="/recipes" className="cta-button">Explore All Recipes</Link>
        </div>
        <div className="hero-image-placeholder">
          <ChefHat size={90} strokeWidth={1.5} />
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{
        padding: '60px 20px',
        background: 'linear-gradient(135deg, var(--first-color), var(--second-color))',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              <BookOpen size={50} style={{ margin: '0 auto 15px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>
                {recipes.length}+
              </h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Tested Recipes</p>
            </div>
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s', animationFillMode: 'backwards' }}>
              <Users size={50} style={{ margin: '0 auto 15px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>
                10K+
              </h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Happy Cooks</p>
            </div>
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s', animationFillMode: 'backwards' }}>
              <Salad size={50} style={{ margin: '0 auto 15px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>
                4
              </h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Categories</p>
            </div>
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.3s', animationFillMode: 'backwards' }}>
              <Award size={50} style={{ margin: '0 auto 15px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>
                4.8★
              </h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe of the Week */}
      {recipeOfTheWeek && !loading && (
        <section style={{
          padding: '80px 20px',
          background: 'var(--light-gray)',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-yellow), var(--third-color))',
              padding: '8px 20px',
              borderRadius: '30px',
              display: 'inline-block',
              marginBottom: '30px',
              fontWeight: 'bold',
              color: 'var(--dark-text)',
              boxShadow: '0 4px 15px rgba(252, 255, 130, 0.4)'
            }}>
              <Award size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              RECIPE OF THE WEEK
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '50px',
              alignItems: 'center',
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '50px' }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  color: 'var(--primary-color)',
                  marginBottom: '20px'
                }}>
                  {recipeOfTheWeek.title}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--dark-text)',
                  marginBottom: '25px',
                  lineHeight: '1.6'
                }}>
                  {recipeOfTheWeek.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={20} color="var(--second-color)" />
                    <span>{recipeOfTheWeek.cookTime} mins</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={20} color="var(--second-color)" />
                    <span>{recipeOfTheWeek.servings} servings</span>
                  </div>
                  <div style={{
                    background: 'var(--accent-blue)',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {recipeOfTheWeek.category}
                  </div>
                </div>
                <Link
                  to={`/recipes/${recipeOfTheWeek.id}`}
                  className="cta-button"
                  style={{
                    background: 'linear-gradient(135deg, var(--first-color), var(--second-color))',
                    display: 'inline-block'
                  }}
                >
                  Cook This Now →
                </Link>
              </div>
              <div style={{
                height: '500px',
                background: `url(${recipeOfTheWeek.imageUrl}) center/cover`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--first-color)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}>
                  ⭐ Featured
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '60px' }}>How It Works</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--first-color), var(--second-color))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 20px rgba(253, 89, 89, 0.3)'
              }}>
                <BookOpen size={40} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--primary-color)',
                marginBottom: '15px'
              }}>
                1. Browse
              </h3>
              <p style={{ color: 'var(--dark-text)', lineHeight: '1.6' }}>
                Explore our collection of delicious recipes organized by category and difficulty
              </p>
            </div>
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s', animationFillMode: 'backwards' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--second-color), var(--third-color))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 20px rgba(255, 156, 109, 0.3)'
              }}>
                <UtensilsCrossed size={40} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--second-color)',
                marginBottom: '15px'
              }}>
                2. Cook
              </h3>
              <p style={{ color: 'var(--dark-text)', lineHeight: '1.6' }}>
                Follow our easy step-by-step instructions with clear ingredient lists
              </p>
            </div>
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s', animationFillMode: 'backwards' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--accent-yellow), var(--accent-blue))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 20px rgba(252, 255, 130, 0.3)'
              }}>
                <Heart size={40} color="white" fill="white" />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--accent-yellow)',
                marginBottom: '15px'
              }}>
                3. Enjoy
              </h3>
              <p style={{ color: 'var(--dark-text)', lineHeight: '1.6' }}>
                Share your culinary creations with family and friends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about">
        <div className="about-content">
          <h2 className="section-title">About Siri's Kitchen</h2>
          <div className="about-grid">
            <div className="about-image-placeholder">
              <UtensilsCrossed size={80} strokeWidth={1.5} color="white" />
            </div>
            <div className="about-text">
              <p>Cooking isn't just a hobby for me—it's a passion that brings people together. At Siri's Kitchen, I believe that food is love made visible, and every recipe tells a story.</p>
              <p>
                From traditional Indian spices to global favorites, I create recipes that are both authentic and accessible. Whether you're looking for quick weeknight meals or dishes to impress your
                guests, you'll find something special here.
              </p>
              <p>My focus is on vegetarian delights and simple chicken recipes that don't compromise on flavor. Every dish is tested, perfected, and shared with love from my kitchen to yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Recipes Section */}
      {latestRecipes.length > 0 && !loading && (
        <section style={{ padding: '80px 20px', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <div>
                <h2 className="section-title" style={{ margin: 0 }}>Latest Recipes</h2>
                <p style={{ color: 'var(--dark-text)', opacity: 0.7, marginTop: '10px' }}>
                  Fresh from the kitchen
                </p>
              </div>
              <Calendar size={40} color="var(--second-color)" />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {latestRecipes.map((recipe, index) => (
                <Link
                  key={recipe.id}
                  to={`/recipes/${recipe.id}`}
                  style={{
                    textDecoration: 'none',
                    position: 'relative',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    height: '200px',
                    background: `url(${recipe.imageUrl}) center/cover`,
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'var(--accent-yellow)',
                      color: 'var(--dark-text)',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                    }}>
                      ✨ NEW
                    </div>
                  </div>
                  <div style={{ padding: '20px', background: 'white' }}>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      marginBottom: '10px'
                    }}>
                      {recipe.title}
                    </h3>
                    <p style={{
                      color: 'var(--dark-text)',
                      opacity: 0.8,
                      fontSize: '0.9rem',
                      marginBottom: '15px'
                    }}>
                      {recipe.description.substring(0, 80)}...
                    </p>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: 'var(--dark-text)' }}>
                      <span>⏱ {recipe.cookTime} mins</span>
                      <span>🍽 {recipe.servings} servings</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seasonal/Trending Section */}
      {recipes.length > 0 && !loading && (
        <section style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, var(--accent-blue), var(--fourth-color))',
          color: 'var(--dark-text)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <TrendingUp size={50} style={{ margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              Perfect for {getCurrentSeason()}
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
              Seasonal favorites to warm your heart
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {recipes.slice(0, 4).map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipes/${recipe.id}`}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{
                    height: '150px',
                    background: `url(${recipe.imageUrl}) center/cover`
                  }} />
                  <div style={{ padding: '15px', textAlign: 'left' }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px' }}>
                      {recipe.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--dark-text)', opacity: 0.7 }}>
                      {recipe.cookTime} min
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instagram-Style Photo Gallery */}
      {recipes.length >= 6 && !loading && (
        <section style={{ padding: '80px 20px', background: 'var(--light-gray)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <Camera size={50} style={{ margin: '0 auto 20px', color: 'var(--second-color)' }} />
            <h2 className="section-title" style={{ marginBottom: '15px' }}>From Our Kitchen</h2>
            <p style={{ color: 'var(--dark-text)', opacity: 0.7, marginBottom: '50px', fontSize: '1.1rem' }}>
              Beautiful moments captured in every dish
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {recipes.slice(0, 8).map((recipe, index) => (
                <Link
                  key={recipe.id}
                  to={`/recipes/${recipe.id}`}
                  style={{
                    position: 'relative',
                    paddingBottom: '100%',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    animation: `fadeIn 0.6s ease-out ${index * 0.05}s backwards`
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `url(${recipe.imageUrl}) center/cover`,
                    transition: 'transform 0.3s ease',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      padding: '20px 15px 15px',
                      color: 'white',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                      <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{recipe.title}</p>
                      <p style={{ fontSize: '0.75rem', marginTop: '5px' }}>
                        <Eye size={14} style={{ display: 'inline', marginRight: '5px' }} />
                        View Recipe
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Recipes Section */}
      <section className="featured">
        <h2 className="section-title">Featured Recipes</h2>
        {loading ? (
          <div className="loading">Loading recipes...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <RecipeList recipes={recipes.slice(0, 4)} />
        )}
      </section>

      {/* Recipe Categories Section */}
      <section className="categories">
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-grid">
          <Link to="/recipes?category=vegetarian" className="category-card vegetarian" style={{ textDecoration: 'none' }}>
            <div className="category-icon">
              <Salad size={55} strokeWidth={1.5} color="white" />
            </div>
            <h3>Vegetarian Dishes</h3>
            <p>Delicious meatless meals full of flavor</p>
          </Link>
          <Link to="/recipes?category=chicken" className="category-card chicken" style={{ textDecoration: 'none' }}>
            <div className="category-icon">
              <Drumstick size={55} strokeWidth={1.5} color="white" />
            </div>
            <h3>Chicken Recipes</h3>
            <p>Simple and flavorful chicken dishes</p>
          </Link>
          <Link to="/recipes?category=quick" className="category-card quick" style={{ textDecoration: 'none' }}>
            <div className="category-icon">
              <Zap size={55} strokeWidth={1.5} color="white" />
            </div>
            <h3>Quick Meals</h3>
            <p>Ready in 30 minutes or less</p>
          </Link>
          <Link to="/recipes?category=spicy" className="category-card spicy" style={{ textDecoration: 'none' }}>
            <div className="category-icon">
              <Flame size={55} strokeWidth={1.5} color="white" />
            </div>
            <h3>Spicy Favorites</h3>
            <p>For those who love the heat</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <Sparkles size={18} /> Siri's Kitchen - Cooking with Passion <Sparkles size={18} />
        </p>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          Made with <Heart size={18} fill="currentColor" /> and lots of spices
        </p>
      </footer>

      {/* Floating Action Button - Cook with Me */}
      <button
        onClick={() => {
          document.querySelector('.featured')?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--first-color), var(--second-color))',
          color: 'white',
          border: 'none',
          boxShadow: '0 8px 25px rgba(253, 89, 89, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 35px rgba(253, 89, 89, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(253, 89, 89, 0.4)';
        }}
        title="View Featured Recipes"
      >
        <ChefHat size={28} />
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--accent-yellow)',
            color: 'var(--dark-text)',
            border: 'none',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
          }}
          title="Back to Top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
