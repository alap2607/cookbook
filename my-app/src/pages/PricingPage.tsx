import { Link } from "react-router-dom";
import { Check, ChefHat, Star } from "lucide-react";
import Layout from "../components/Layout";
import "./PricingPage.css";

const plans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    period: "Forever",
    description: "Perfect for getting started",
    features: [
      "Browse all recipes",
      "Save up to 10 favorites",
      "Basic search filters",
      "Community recipes",
    ],
    buttonText: "Current Plan",
    popular: false,
    disabled: true,
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$9.99",
    period: "/month",
    description: "Best for home cooks",
    features: [
      "Everything in Free",
      "Unlimited favorites",
      "Advanced search & filters",
      "Meal planning tools",
      "Shopping list generator",
      "No advertisements",
    ],
    buttonText: "Get Started",
    popular: true,
    disabled: false,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$19.99",
    period: "/month",
    description: "For serious food enthusiasts",
    features: [
      "Everything in Pro",
      "Exclusive chef recipes",
      "Nutrition analysis",
      "Personalized recommendations",
      "Priority support",
      "Early access to features",
    ],
    buttonText: "Get Started",
    popular: false,
    disabled: false,
  },
];

export default function PricingPage() {
  return (
    <Layout>
      <div className="pricing-page">
        <div className="pricing-header">
          <h1>Choose the right plan</h1>
          <p>Simple Pricing. No hidden fees. Exclusive features for enthusiasts.</p>
        </div>

        <div className="pricing-toggle">
          <button className="toggle-btn active">Monthly</button>
          <button className="toggle-btn">Yearly</button>
          <span className="save-badge">Save 20%</span>
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={14} fill="currentColor" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="card-header">
                <h2 className="plan-name">{plan.name}</h2>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`plan-button ${plan.popular ? "primary" : ""} ${plan.disabled ? "disabled" : ""}`}
                disabled={plan.disabled}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and Apple Pay for your convenience.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>Yes! Pro and Premium plans come with a 7-day free trial. Cancel anytime during the trial to avoid charges.</p>
            </div>
            <div className="faq-item">
              <h3>Can I switch plans?</h3>
              <p>Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>
          </div>
        </div>

        <div className="pricing-cta">
          <div className="cta-content">
            <div className="cta-icon">
              <ChefHat size={32} color="white" />
            </div>
            <h2>Ready to start cooking?</h2>
            <p>Join thousands of food lovers discovering new recipes every day.</p>
            <Link to="/signup" className="cta-button">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
