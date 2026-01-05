import { useParams } from 'react-router-dom';
import { useRecipe } from '../hooks/useRecipes';
import RecipeDetail from '../components/RecipeDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { recipe, loading, error } = useRecipe(id);

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="loading">Loading recipe...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="error">{error}</div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="app">
        <Header />
        <div className="error">Recipe not found</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <RecipeDetail recipe={recipe} />
    </div>
  );
  <div><Footer /></div>
}
