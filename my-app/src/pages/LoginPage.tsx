import { useState, type FormEvent } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import { Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

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
      <Header />
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          background: "var(--light-gray)"
        }}
      >
        <div
          style={{
            maxWidth: "450px",
            width: "100%",
            background: "var(--white)",
            padding: "50px 40px",
            borderRadius: "15px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "35px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, var(--primary-color), var(--primary-dark))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px"
              }}
            >
              <Lock size={40} color="white" />
            </div>
            <h1
              style={{
                fontSize: "2rem",
                color: "var(--primary-color)",
                marginBottom: "10px"
              }}
            >
              Admin Login
            </h1>
            <p style={{ color: "var(--dark-text)", opacity: 0.7 }}>Enter password to access admin panel</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div style={{ position: "relative" }}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  disabled={loading}
                  style={{ paddingRight: "45px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--dark-text)",
                    opacity: 0.6,
                    transition: "opacity 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div
                style={{
                  background: "#fff0f0",
                  border: "2px solid var(--primary-color)",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--primary-dark)"
                }}
              >
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", marginBottom: "20px" }}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div style={{ textAlign: "center" }}>
              <Link to="/" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
