import Header from '../components/Header';
import { Sparkles, Heart, UtensilsCrossed, Globe, Zap, BookOpen, Users, ChefHat } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="app about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Welcome to Culinaria
          </h1>
          <p className="about-hero-description">
            Your personal treasure trove of cooking recipes, designed to bring the joy of flavorful dishes right into your kitchen!
          </p>
        </div>
      </section>

      {/* About This Project */}
      <section className="about-project-section">
        <div className="about-section-container">
          <h2 className="about-section-title">
            About This Project
          </h2>

          <p className="about-section-description">
            Whether you're a kitchen newbie or a seasoned chef, this site is a haven for anyone who loves experimenting with food, discovering new flavors, or perfecting the classics.
          </p>

          <div className="about-features-grid">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <BookOpen size={35} color="white" />
              </div>
              <h3 className="about-feature-title">
                Original Recipes
              </h3>
              <p className="about-feature-description">
                Every recipe here is crafted with love, tested to perfection, and written in a way that's easy to follow.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Globe size={35} color="white" />
              </div>
              <h3 className="about-feature-title">
                Diverse Flavors
              </h3>
              <p className="about-feature-description">
                From traditional Indian spices to global favorites, you'll find recipes that cater to every palate.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Zap size={35} color="white" />
              </div>
              <h3 className="about-feature-title">
                Quick & Easy Meals
              </h3>
              <p className="about-feature-description">
                Life is busy, but good food doesn't have to wait! Find quick, healthy, and delicious recipes for your hustle days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Cookbook */}
      <section className="why-cookbook-section">
        <div className="about-section-container">
          <h2 className="about-section-title">
            Why This Cookbook?
          </h2>

          <p className="why-cookbook-description">
            Cooking is more than just following a recipe; it's about creating memories, experimenting, and, sometimes, laughing at the occasional kitchen mishap. This website is here to inspire you to:
          </p>

          <div className="why-cookbook-grid">
            <div className="why-cookbook-card">
              <div className="why-cookbook-emoji">🧂</div>
              <h3 className="why-cookbook-card-title">
                Experiment with Flavors
              </h3>
              <p className="why-cookbook-card-description">
                Discover new taste combinations and make each dish your own
              </p>
            </div>

            <div className="why-cookbook-card">
              <div className="why-cookbook-emoji">🎉</div>
              <h3 className="why-cookbook-card-title">
                Make Cooking Fun
              </h3>
              <p className="why-cookbook-card-description">
                Turn your kitchen into a place of joy and creativity
              </p>
            </div>

            <div className="why-cookbook-card">
              <div className="why-cookbook-emoji">👩‍🍳</div>
              <h3 className="why-cookbook-card-title">
                Build Confidence
              </h3>
              <p className="why-cookbook-card-description">
                Develop your culinary skills with clear, easy-to-follow recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="about-section-container">
          <h2 className="about-section-title">
            Features of the Website
          </h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-box">
                <UtensilsCrossed size={30} color="white" />
              </div>
              <div>
                <h3 className="feature-content-title">
                  Step-by-Step Instructions
                </h3>
                <p className="feature-content-description">
                  Each recipe is broken down into clear, actionable steps to make cooking stress-free.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <BookOpen size={30} color="white" />
              </div>
              <div>
                <h3 className="feature-content-title">
                  Organized Ingredient Lists
                </h3>
                <p className="feature-content-description">
                  Easy to shop for—because no one likes to run to the store mid-cooking!
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <ChefHat size={30} color="white" />
              </div>
              <div>
                <h3 className="feature-content-title">
                  Cooking Tips & Tricks
                </h3>
                <p className="feature-content-description">
                  From ingredient substitutions to secret hacks, we share everything that makes cooking easier.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <Users size={30} color="white" />
              </div>
              <div>
                <h3 className="feature-content-title">
                  Search & Categories
                </h3>
                <p className="feature-content-description">
                  Easily find recipes by type, cuisine, or ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who's This For */}
      <section className="whos-this-for-section">
        <div className="about-section-container">
          <h2 className="about-section-title">
            Who's This For?
          </h2>

          <div className="whos-this-for-grid">
            <div className="whos-this-for-card">
              <div className="whos-this-for-emoji">🏠</div>
              <h3 className="whos-this-for-card-title">
                Home Chefs
              </h3>
              <p className="whos-this-for-card-description">
                Looking to spice up their weekly menus with exciting new recipes
              </p>
            </div>

            <div className="whos-this-for-card">
              <div className="whos-this-for-emoji">⏰</div>
              <h3 className="whos-this-for-card-title">
                Busy Bees
              </h3>
              <p className="whos-this-for-card-description">
                Who want quick, easy meals without sacrificing flavor
              </p>
            </div>

            <div className="whos-this-for-card">
              <div className="whos-this-for-emoji">🔬</div>
              <h3 className="whos-this-for-card-title">
                Curious Cooks
              </h3>
              <p className="whos-this-for-card-description">
                Who love learning new techniques and trying creative recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="fun-facts-section">
        <div className="fun-facts-container">
          <h2 className="about-section-title">
            Fun Food Facts
          </h2>
          <p className="fun-facts-subtitle">
            Because Why Not?
          </p>

          <div className="fun-facts-grid">
            <div className="fun-fact-card">
              <div className="fun-fact-emoji">🥕</div>
              <p className="fun-fact-text">
                Did you know carrots were originally purple?
              </p>
            </div>

            <div className="fun-fact-card">
              <div className="fun-fact-emoji">🌶️</div>
              <p className="fun-fact-text">
                India is the largest producer of spices in the world—no wonder you'll find tons of spicy inspiration here!
              </p>
            </div>

            <div className="fun-fact-card">
              <div className="fun-fact-emoji">🧠</div>
              <p className="fun-fact-text">
                Eating a meal you cooked yourself can actually make it taste better—science says so!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Let's Get Cooking!
          </h2>
          <p className="cta-description">
            Whether you're in the mood for a comforting bowl of dal-chawal 🍛, a classic chicken curry 🐓, or a quick fusion dish, you'll find something here to satisfy your cravings.
          </p>
          <p className="cta-subdescription">
            Bookmark the site, try out a recipe, and let's make cooking the most enjoyable part of your day!
          </p>
          <div className="cta-buttons">
            <a href="/recipes" className="cta-button">
              Browse Recipes
            </a>
          </div>
          <p className="cta-tagline">
            ✨ Bon Appétit! ✨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p className="about-footer-title">
          <Sparkles size={18} /> Culinaria Fine Foods & Recipes - Making Food Taste Better <Sparkles size={18} />
        </p>
        <p className="about-footer-subtitle">
          Made with <Heart size={18} fill="currentColor" /> and finest quality ingredients
        </p>
        <p className="about-footer-note">
          P.S.: If you try a recipe and love it (or even if you didn't!), drop us a comment. Your feedback is the secret sauce to making this cookbook even better!
        </p>
      </footer>
    </div>
  );
}
