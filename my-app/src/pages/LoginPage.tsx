import { useState, type FormEvent } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Lock, AlertCircle, Eye, EyeOff } from "lucide-react";
import './LoginPage.css';
import Footer from "../components/Footer";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page they tried to visit, default to /admin
  const from = (location.state as any)?.from || "/admin";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError("Invalid password. Please try again.");
        setPassword("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <section className="login-section">
        <div className="login-container">
          <div className="login-header">
            <div className="login-icon-wrapper">
              <Lock size={45} color="white" strokeWidth={2.5} />
            </div>
            <h1 className="login-title">
              Admin Login
            </h1>
            <p className="login-description">
              Enter your password to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="login-password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  disabled={loading}
                  className="login-password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="login-password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="login-error">
                <AlertCircle size={22} strokeWidth={2.5} />
                <span className="login-error-text">{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn-primary login-submit-button"
              disabled={loading}
              style={{
                background: loading ? "#F5D5CC" : "#E8BDB1"
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="login-back-link-wrapper">
              <Link to="/" className="login-back-link">
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </section>
      <div><Footer /></div>
    </div>
  );
}
