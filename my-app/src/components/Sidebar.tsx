import { Link, useLocation } from "react-router-dom";
import {
  Home,
  LayoutGrid,
  PlusCircle,
  ChefHat,
} from "lucide-react";
import "./Sidebar.css";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: <Home size={20} /> },
  { path: "/categories", label: "Categories", icon: <LayoutGrid size={20} /> },
  { path: "/create", label: "Create", icon: <PlusCircle size={20} /> },
];

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <Link to="/" className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <ChefHat size={24} color="white" />
          </div>
          <span className="sidebar-logo-text">Culinaria</span>
        </Link>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${isActive(item.path) ? "active" : ""}`}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              <span className="sidebar-nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

      </div>
    </aside>
  );
}
