import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="about-footer">
      <p className="about-footer-title">
        <Sparkles size={18} /> Culinaria Fine Foods & Recipes - Making Food Taste Better <Sparkles size={18} />
      </p>
      <p className="about-footer-subtitle">
        Made with <Heart size={18} fill="currentColor" /> and finest quality ingredients
      </p>
      <p className="about-footer-note">P.S.: If you try a recipe and love it (or even if you didn't!), drop us a comment. Your feedback is the secret sauce to making this cookbook even better!</p>
    </footer>
  );
}
