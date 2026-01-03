import Header from '../components/Header';
import { Sparkles, Heart, UtensilsCrossed, Globe, Zap, Leaf, BookOpen, Users, ChefHat } from 'lucide-react';

export default function AboutPage() {
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
            Welcome to Culinaria
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#5D4E37',
            lineHeight: 1.6,
            marginBottom: '30px'
          }}>
            Your personal treasure trove of cooking recipes, designed to bring the joy of flavorful dishes right into your kitchen!
          </p>
        </div>
      </section>

      {/* About This Project */}
      <section style={{
        padding: '80px 60px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '30px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            About This Project
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: 1.8,
            marginBottom: '30px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 40px'
          }}>
            Whether you're a kitchen newbie or a seasoned chef, this site is a haven for anyone who loves experimenting with food, discovering new flavors, or perfecting the classics.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginTop: '50px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: '#B85C3E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <BookOpen size={35} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d2d2d',
                marginBottom: '15px'
              }}>
                Original Recipes
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Every recipe here is crafted with love, tested to perfection, and written in a way that's easy to follow.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: '#B85C3E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Globe size={35} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d2d2d',
                marginBottom: '15px'
              }}>
                Diverse Flavors
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                From traditional Indian spices to global favorites, you'll find recipes that cater to every palate.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: '#B85C3E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Zap size={35} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d2d2d',
                marginBottom: '15px'
              }}>
                Quick & Easy Meals
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Life is busy, but good food doesn't have to wait! Find quick, healthy, and delicious recipes for your hustle days.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: '#B85C3E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Leaf size={35} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d2d2d',
                marginBottom: '15px'
              }}>
                Vegetarian-Friendly
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Your go-to spot for meatless delights and simple chicken recipes that everyone will love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Cookbook */}
      <section style={{
        padding: '80px 60px',
        background: 'linear-gradient(135deg, #E8D7C3 0%, #D4C4B0 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '30px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            Why This Cookbook?
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#5D4E37',
            lineHeight: 1.8,
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 50px'
          }}>
            Cooking is more than just following a recipe; it's about creating memories, experimenting, and, sometimes, laughing at the occasional kitchen mishap. This website is here to inspire you to:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧂</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '10px'
              }}>
                Experiment with Flavors
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                Discover new taste combinations and make each dish your own
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎉</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '10px'
              }}>
                Make Cooking Fun
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                Turn your kitchen into a place of joy and creativity
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>👩‍🍳</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '10px'
              }}>
                Build Confidence
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                Develop your culinary skills with clear, easy-to-follow recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '80px 60px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '50px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            Features of the Website
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }}>
            <div style={{
              display: 'flex',
              gap: '20px',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#B85C3E',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <UtensilsCrossed size={30} color="white" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#2d2d2d',
                  marginBottom: '10px'
                }}>
                  Step-by-Step Instructions
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.6
                }}>
                  Each recipe is broken down into clear, actionable steps to make cooking stress-free.
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '20px',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#B85C3E',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <BookOpen size={30} color="white" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#2d2d2d',
                  marginBottom: '10px'
                }}>
                  Organized Ingredient Lists
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.6
                }}>
                  Easy to shop for—because no one likes to run to the store mid-cooking!
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '20px',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#B85C3E',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ChefHat size={30} color="white" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#2d2d2d',
                  marginBottom: '10px'
                }}>
                  Cooking Tips & Tricks
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.6
                }}>
                  From ingredient substitutions to secret hacks, we share everything that makes cooking easier.
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '20px',
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#B85C3E',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Users size={30} color="white" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#2d2d2d',
                  marginBottom: '10px'
                }}>
                  Search & Categories
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.6
                }}>
                  Easily find recipes by type, cuisine, or ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who's This For */}
      <section style={{
        padding: '80px 60px',
        background: 'linear-gradient(135deg, #E8D7C3 0%, #D4C4B0 100%)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '50px',
            fontFamily: 'Georgia, serif'
          }}>
            Who's This For?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🏠</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '15px'
              }}>
                Home Chefs
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Looking to spice up their weekly menus with exciting new recipes
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>⏰</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '15px'
              }}>
                Busy Bees
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Who want quick, easy meals without sacrificing flavor
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🔬</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#B85C3E',
                marginBottom: '15px'
              }}>
                Curious Cooks
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Who love learning new techniques and trying creative recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section style={{
        padding: '80px 60px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif'
          }}>
            Fun Food Facts
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '50px',
            fontStyle: 'italic'
          }}>
            Because Why Not?
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            textAlign: 'left'
          }}>
            <div style={{
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              borderLeft: '5px solid #B85C3E'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🥕</div>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Did you know carrots were originally purple?
              </p>
            </div>

            <div style={{
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              borderLeft: '5px solid #B85C3E'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌶️</div>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                India is the largest producer of spices in the world—no wonder you'll find tons of spicy inspiration here!
              </p>
            </div>

            <div style={{
              padding: '30px',
              background: '#FFF8EB',
              borderRadius: '15px',
              borderLeft: '5px solid #B85C3E'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🧠</div>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Eating a meal you cooked yourself can actually make it taste better—science says so!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '80px 60px',
        background: 'linear-gradient(135deg, #B85C3E 0%, #8B4513 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '25px',
            fontFamily: 'Georgia, serif'
          }}>
            Let's Get Cooking!
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            marginBottom: '20px',
            opacity: 0.95
          }}>
            Whether you're in the mood for a comforting bowl of dal-chawal 🍛, a classic chicken curry 🐓, or a quick fusion dish, you'll find something here to satisfy your cravings.
          </p>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '40px',
            opacity: 0.9
          }}>
            Bookmark the site, try out a recipe, and let's make cooking the most enjoyable part of your day!
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a href="/recipes" style={{
              display: 'inline-block',
              padding: '15px 40px',
              background: 'white',
              color: '#B85C3E',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'transform 0.3s ease'
            }}>
              Browse Recipes
            </a>
          </div>
          <p style={{
            marginTop: '40px',
            fontSize: '1.3rem',
            fontStyle: 'italic'
          }}>
            ✨ Bon Appétit! ✨
          </p>
        </div>
      </section>

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
        <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8, fontStyle: 'italic' }}>
          P.S.: If you try a recipe and love it (or even if you didn't!), drop us a comment. Your feedback is the secret sauce to making this cookbook even better!
        </p>
      </footer>
    </div>
  );
}
