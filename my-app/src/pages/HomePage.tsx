import { Link } from 'react-router-dom';
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('vegetarian');

  // Get recipe of the week (first recipe)
  const recipeOfTheWeek = recipes[0];

  // Get latest recipes (last 3)
  const latestRecipes = recipes.slice(-3).reverse();

  // Category content
  const categoryContent = {
    vegetarian: {
      title: 'Vegetarian Delights',
      description: 'Discover our collection of delicious vegetarian recipes that celebrate fresh ingredients and bold flavors. From traditional Indian dishes to creative fusion cuisine, these recipes prove that vegetarian cooking is anything but boring.',
      description2: 'Each recipe is crafted with love and tested to perfection, ensuring you get restaurant-quality results in your own kitchen. Whether you\'re a long-time vegetarian or just exploring meatless options, you\'ll find something to love here.',
      badge1: '🥗 Vegetarian Recipes',
      badge2: '⚡ Quick & Easy Options',
      badge3: '🌶️ Spicy & Mild Variants',
      filterKey: 'vegetarian'
    },
    chicken: {
      title: 'Chicken Classics',
      description: 'Explore our collection of flavorful chicken recipes that are simple yet impressive. From tender grilled chicken to rich curries, these recipes showcase the versatility of chicken in both traditional and contemporary styles.',
      description2: 'Perfect for family dinners or special occasions, each chicken recipe is designed to be easy to follow while delivering amazing taste. Learn the secrets to perfectly cooked, juicy chicken every time.',
      badge1: '🍗 Chicken Recipes',
      badge2: '🔥 Grilled & Roasted',
      badge3: '🍛 Curries & Stews',
      filterKey: 'chicken'
    },
    quick: {
      title: 'Quick & Easy Meals',
      description: 'Short on time but don\'t want to compromise on taste? Our quick recipes are designed for busy lifestyles without sacrificing flavor. Ready in 30 minutes or less, these dishes are perfect for weeknight dinners.',
      description2: 'From simple stir-fries to one-pot wonders, discover how you can create delicious, wholesome meals even on your busiest days. Smart cooking techniques and clever ingredient combinations make it all possible.',
      badge1: '⚡ Under 30 Minutes',
      badge2: '👨‍🍳 Easy to Follow',
      badge3: '🥘 One-Pot Meals',
      filterKey: 'quick'
    },
    spicy: {
      title: 'Spicy Favorites',
      description: 'For those who love the heat! Our spicy recipe collection features bold, fiery flavors that will excite your taste buds. From traditional Indian spices to international hot sauces, we\'ve got the perfect level of spice for you.',
      description2: 'Each recipe comes with adjustable heat levels, so you can customize the spice to your preference. Learn which spices create the best flavor profiles and how to balance heat with other taste elements.',
      badge1: '🌶️ Spicy Dishes',
      badge2: '🔥 Adjustable Heat',
      badge3: '🇮🇳 Indian Spices',
      filterKey: 'spicy'
    },
    indian: {
      title: 'Indian Cuisine',
      description: 'Dive into the rich and diverse world of Indian cooking. Our authentic recipes bring you the flavors of different regions of India, from North Indian curries to South Indian delicacies, each with its unique taste and aroma.',
      description2: 'Learn traditional cooking techniques, understand the importance of spice blends, and discover how to create restaurant-quality Indian food at home. These time-tested recipes have been passed down through generations.',
      badge1: '🇮🇳 Authentic Indian',
      badge2: '🌿 Traditional Spices',
      badge3: '🍛 Regional Varieties',
      filterKey: 'indian'
    },
    healthy: {
      title: 'Healthy Options',
      description: 'Eating healthy doesn\'t mean boring food! Our nutritious recipes are packed with vitamins, minerals, and flavor. Whether you\'re counting calories or just want to eat cleaner, these recipes make healthy eating enjoyable.',
      description2: 'From protein-rich meals to fiber-packed dishes, discover how to nourish your body while satisfying your taste buds. Each recipe includes nutritional highlights to help you make informed choices.',
      badge1: '🥗 Nutritious & Tasty',
      badge2: '💪 High Protein',
      badge3: '🌱 Whole Foods',
      filterKey: 'healthy'
    }
  };

  // Handle scroll for "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #E8D7C3 0%, #D4C4B0 100%)',
        padding: '60px 60px',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '80px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ flex: 1, maxWidth: '500px' }}>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '25px',
              color: '#B85C3E',
              fontFamily: 'Georgia, serif'
            }}>
              Find 100 ways to make your food taste better
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#5D4E37',
              lineHeight: 1.6,
              marginBottom: '30px'
            }}>
              From pure spices to whole ones, sprinklers to blended spices, Culinaria covers the entire spectrum of home and professional cooking in India & around the world.
            </p>

            <Link to="/recipes" style={{
              display: 'inline-block',
              padding: '14px 40px',
              background: '#B85C3E',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.3s ease'
            }}>
              EXPLORE RECIPES
            </Link>
          </div>

          <div style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            maxWidth: '600px'
          }}>
            {recipes.slice(0, 4).map((recipe) => (
              <div key={recipe.id} style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                height: '200px'
              }}>
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Collections Section */}
      <section style={{
        background: 'white',
        padding: '80px 60px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif'
          }}>
            Browse Our Recipe Collections
          </h2>

          {/* Recipe Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '60px',
            borderBottom: '2px solid #E8D7C3',
            paddingBottom: '15px',
            flexWrap: 'wrap'
          }}>
            <button onClick={() => setSelectedCategory('vegetarian')} style={{
              background: 'none',
              border: 'none',
              color: selectedCategory === 'vegetarian' ? '#B85C3E' : '#5D4E37',
              fontSize: '1rem',
              fontWeight: selectedCategory === 'vegetarian' ? 600 : 500,
              cursor: 'pointer',
              borderBottom: selectedCategory === 'vegetarian' ? '3px solid #B85C3E' : 'none',
              paddingBottom: '15px',
              transition: 'all 0.3s ease'
            }}>
              Vegetarian
            </button>
            <button onClick={() => setSelectedCategory('chicken')} style={{
              background: 'none',
              border: 'none',
              color: selectedCategory === 'chicken' ? '#B85C3E' : '#5D4E37',
              fontSize: '1rem',
              fontWeight: selectedCategory === 'chicken' ? 600 : 500,
              cursor: 'pointer',
              borderBottom: selectedCategory === 'chicken' ? '3px solid #B85C3E' : 'none',
              paddingBottom: '15px',
              transition: 'all 0.3s ease'
            }}>
              Chicken
            </button>
            <button onClick={() => setSelectedCategory('quick')} style={{
              background: 'none',
              border: 'none',
              color: selectedCategory === 'quick' ? '#B85C3E' : '#5D4E37',
              fontSize: '1rem',
              fontWeight: selectedCategory === 'quick' ? 600 : 500,
              cursor: 'pointer',
              borderBottom: selectedCategory === 'quick' ? '3px solid #B85C3E' : 'none',
              paddingBottom: '15px',
              transition: 'all 0.3s ease'
            }}>
              Quick Meals
            </button>
            <button onClick={() => setSelectedCategory('spicy')} style={{
              background: 'none',
              border: 'none',
              color: selectedCategory === 'spicy' ? '#B85C3E' : '#5D4E37',
              fontSize: '1rem',
              fontWeight: selectedCategory === 'spicy' ? 600 : 500,
              cursor: 'pointer',
              borderBottom: selectedCategory === 'spicy' ? '3px solid #B85C3E' : 'none',
              paddingBottom: '15px',
              transition: 'all 0.3s ease'
            }}>
              Spicy
            </button>
            <button onClick={() => setSelectedCategory('indian')} style={{
              background: 'none',
              border: 'none',
              color: selectedCategory === 'indian' ? '#B85C3E' : '#5D4E37',
              fontSize: '1rem',
              fontWeight: selectedCategory === 'indian' ? 600 : 500,
              cursor: 'pointer',
              borderBottom: selectedCategory === 'indian' ? '3px solid #B85C3E' : 'none',
              paddingBottom: '15px',
              transition: 'all 0.3s ease'
            }}>
              Indian Cuisine
            </button>
            <button onClick={() => setSelectedCategory('healthy')} style={{
              background: 'none',
              border: 'none',
              color: selectedCategory === 'healthy' ? '#B85C3E' : '#5D4E37',
              fontSize: '1rem',
              fontWeight: selectedCategory === 'healthy' ? 600 : 500,
              cursor: 'pointer',
              borderBottom: selectedCategory === 'healthy' ? '3px solid #B85C3E' : 'none',
              paddingBottom: '15px',
              transition: 'all 0.3s ease'
            }}>
              Healthy Options
            </button>
          </div>

          {/* Featured Category Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            textAlign: 'left'
          }}>
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2d2d2d',
                marginBottom: '20px',
                fontFamily: 'Georgia, serif'
              }}>
                {categoryContent[selectedCategory as keyof typeof categoryContent].title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '20px'
              }}>
                {categoryContent[selectedCategory as keyof typeof categoryContent].description}
              </p>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '20px'
              }}>
                {categoryContent[selectedCategory as keyof typeof categoryContent].description2}
              </p>
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '30px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  background: '#FFF8EB',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  color: '#5D4E37',
                  fontWeight: 600
                }}>
                  {categoryContent[selectedCategory as keyof typeof categoryContent].badge1}
                </div>
                <div style={{
                  background: '#FFF8EB',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  color: '#5D4E37',
                  fontWeight: 600
                }}>
                  {categoryContent[selectedCategory as keyof typeof categoryContent].badge2}
                </div>
                <div style={{
                  background: '#FFF8EB',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  color: '#5D4E37',
                  fontWeight: 600
                }}>
                  {categoryContent[selectedCategory as keyof typeof categoryContent].badge3}
                </div>
              </div>
              <Link
                to={`/recipes?category=${categoryContent[selectedCategory as keyof typeof categoryContent].filterKey}`}
                style={{
                  display: 'inline-block',
                  marginTop: '30px',
                  padding: '14px 35px',
                  background: '#B85C3E',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#8B4513'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#B85C3E'}
              >
                Explore {categoryContent[selectedCategory as keyof typeof categoryContent].title}
              </Link>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {(() => {
                const currentCategory = categoryContent[selectedCategory as keyof typeof categoryContent].filterKey;
                const filteredRecipes = currentCategory === 'indian' || currentCategory === 'healthy'
                  ? recipes
                  : recipes.filter(r => r.category === currentCategory);
                const featuredRecipe = filteredRecipes[0];

                return featuredRecipe && (
                  <div style={{
                    position: 'relative',
                    width: '400px',
                    height: '400px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                  }}>
                    <img
                      src={featuredRecipe.imageUrl}
                      alt={categoryContent[selectedCategory as keyof typeof categoryContent].title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      padding: '30px 20px 20px',
                      color: 'white'
                    }}>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '5px' }}>
                        {featuredRecipe.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        Featured {categoryContent[selectedCategory as keyof typeof categoryContent].title} Recipe
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Recipe of the Week */}
      {false && recipeOfTheWeek && !loading && (
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
      {false && (
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
      )}

      {/* About Me Section */}
      {false && (
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
      )}

      {/* Latest Recipes Section */}
      {false && latestRecipes.length > 0 && !loading && (
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
      {false && recipes.length > 0 && !loading && (
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
      {false && recipes.length >= 6 && !loading && (
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
      {false && (
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
      )}

      {/* Recipe Categories Section */}
      {false && (
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
      )}

      {/* Footer */}
      <footer style={{
        background: '#5D4E37',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: '1rem' }}>
          <Sparkles size={18} /> Sprinkle Herbs & Spices - Making Food Taste Better <Sparkles size={18} />
        </p>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: '10px' }}>
          Made with <Heart size={18} fill="currentColor" /> and finest quality spices
        </p>
      </footer>

      {/* Floating Action Button - Cook with Me */}
      {false && (
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
      )}

      {/* Scroll to Top Button */}
      {false && showScrollTop && (
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
