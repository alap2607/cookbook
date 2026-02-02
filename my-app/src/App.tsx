import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import CategoryPage from './pages/CategoryPage';
import CategoriesPage from './pages/CategoriesPage';
import CreateRecipePage from './pages/CreateRecipePage';
import OnboardingPage from './pages/OnboardingPage';
import PricingPage from './pages/PricingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/recipes",
    element: <RecipesPage />,
  },
  {
    path: "/recipes/:id",
    element: <RecipeDetailPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/create",
    element: <CreateRecipePage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
