import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChefHat, ArrowRight, ArrowLeft } from "lucide-react";
import "./OnboardingPage.css";

const cuisines = [
  { id: "indian", label: "Indian", flag: "🇮🇳" },
  { id: "mexican", label: "Mexican", flag: "🇲🇽" },
  { id: "italian", label: "Italian", flag: "🇮🇹" },
  { id: "japanese", label: "Japanese", flag: "🇯🇵" },
  { id: "chinese", label: "Chinese", flag: "🇨🇳" },
  { id: "french", label: "French", flag: "🇫🇷" },
  { id: "thai", label: "Thai", flag: "🇹🇭" },
  { id: "spanish", label: "Spanish", flag: "🇪🇸" },
  { id: "middle-eastern", label: "Middle Eastern", flag: "🌍" },
  { id: "greek", label: "Greek", flag: "🇬🇷" },
  { id: "vietnamese", label: "Vietnamese", flag: "🇻🇳" },
  { id: "korean", label: "Korean", flag: "🇰🇷" },
];

export default function OnboardingPage() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleCuisine = (cuisineId: string) => {
    setSelectedCuisines(prev =>
      prev.includes(cuisineId)
        ? prev.filter(id => id !== cuisineId)
        : [...prev, cuisineId]
    );
  };

  const handleNext = () => {
    // Save preferences and navigate to home
    localStorage.setItem("preferredCuisines", JSON.stringify(selectedCuisines));
    navigate("/");
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-container">
        <Link to="/" className="onboarding-logo">
          <div className="onboarding-logo-icon">
            <ChefHat size={24} color="white" />
          </div>
          <span className="onboarding-logo-text">Cookbook</span>
        </Link>

        <div className="onboarding-content">
          <h1 className="onboarding-title">Select cuisine you are interested in</h1>
          <p className="onboarding-subtitle">
            Select more than 1 (one) cuisine that suits your taste. You will be shown
            more of the cuisines you choose.
          </p>

          <div className="cuisines-grid">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.id}
                className={`cuisine-option ${selectedCuisines.includes(cuisine.id) ? "selected" : ""}`}
                onClick={() => toggleCuisine(cuisine.id)}
              >
                <span className="cuisine-flag">{cuisine.flag}</span>
                <span className="cuisine-label">{cuisine.label}</span>
              </button>
            ))}
          </div>

          <div className="onboarding-actions">
            <Link to="/" className="back-btn">
              <ArrowLeft size={18} />
              <span>Back</span>
            </Link>
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={selectedCuisines.length === 0}
            >
              <span>Next</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="onboarding-progress">
            <span className="progress-dot active"></span>
            <span className="progress-dot"></span>
            <span className="progress-dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
