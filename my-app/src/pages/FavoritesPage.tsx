import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, FolderPlus, MoreVertical } from 'lucide-react';
import { useRecipes } from '../hooks/useRecipes';
import { useFavorites } from '../hooks/useFavorites';
import Layout from '../components/Layout';
import RecipeCardNew from '../components/RecipeCardNew';
import './FavoritesPage.css';

interface Collection {
  id: string;
  name: string;
  recipeIds: string[];
}

export default function FavoritesPage() {
  const { recipes, loading, error } = useRecipes();
  const { getFavoriteRecipes, getFavoriteIds, removeFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateCollection, setShowCreateCollection] = useState(false);
  const [collections] = useState<Collection[]>([
    { id: '1', name: 'Sweet Cravings', recipeIds: [] },
    { id: '2', name: 'Quick Dinners', recipeIds: [] },
  ]);

  const favoriteRecipes = getFavoriteRecipes(recipes);
  const favoriteIds = getFavoriteIds();

  const filteredRecipes = favoriteRecipes.filter(recipe =>
    searchQuery === '' ||
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemoveAll = () => {
    favoriteIds.forEach(id => removeFavorite(id));
  };

  return (
    <Layout onSearch={setSearchQuery}>
      <div className="favorites-page">
        {/* Header */}
        <div className="favorites-header">
          <div className="favorites-header-left">
            <Heart size={28} className="favorites-icon" fill="#E53E6A" stroke="#E53E6A" />
            <div>
              <h1 className="favorites-title">My Favorites</h1>
              <p className="favorites-count">
                {favoriteRecipes.length} {favoriteRecipes.length === 1 ? 'recipe' : 'recipes'} saved
              </p>
            </div>
          </div>
          <div className="favorites-header-actions">
            <button
              className="create-collection-btn"
              onClick={() => setShowCreateCollection(true)}
            >
              <FolderPlus size={18} />
              <span>New Collection</span>
            </button>
            {favoriteRecipes.length > 0 && (
              <button className="more-options-btn">
                <MoreVertical size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Collections */}
        {collections.length > 0 && (
          <section className="collections-section">
            <h2 className="section-title">Collections</h2>
            <div className="collections-grid">
              {collections.map((collection) => (
                <div key={collection.id} className="collection-card">
                  <div className="collection-preview">
                    <FolderPlus size={24} />
                  </div>
                  <div className="collection-info">
                    <h3>{collection.name}</h3>
                    <span>{collection.recipeIds.length} recipes</span>
                  </div>
                </div>
              ))}
              <button
                className="collection-card add-collection"
                onClick={() => setShowCreateCollection(true)}
              >
                <FolderPlus size={24} />
                <span>Add Collection</span>
              </button>
            </div>
          </section>
        )}

        {/* Favorites Grid */}
        <section className="favorites-recipes-section">
          <div className="section-header">
            <h2 className="section-title">All Favorites</h2>
            {favoriteRecipes.length > 0 && (
              <button className="clear-all-btn" onClick={handleRemoveAll}>
                <Trash2 size={16} />
                <span>Clear all</span>
              </button>
            )}
          </div>

          {loading ? (
            <div className="favorites-loading">Loading recipes...</div>
          ) : error ? (
            <div className="favorites-error">{error}</div>
          ) : filteredRecipes.length === 0 ? (
            <div className="favorites-empty">
              <div className="empty-icon">
                <Heart size={48} strokeWidth={1.5} />
              </div>
              <h2>No favorites yet</h2>
              <p>Start exploring recipes and add your favorites by clicking the heart icon.</p>
              <Link to="/recipes" className="explore-btn">
                Explore Recipes
              </Link>
            </div>
          ) : (
            <div className="favorites-grid">
              {filteredRecipes.map((recipe) => (
                <RecipeCardNew key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </section>

        {/* Create Collection Modal */}
        {showCreateCollection && (
          <div className="modal-overlay" onClick={() => setShowCreateCollection(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h3>Create New Collection</h3>
              <input
                type="text"
                placeholder="Collection name"
                className="modal-input"
                autoFocus
              />
              <div className="modal-actions">
                <button
                  className="modal-cancel"
                  onClick={() => setShowCreateCollection(false)}
                >
                  Cancel
                </button>
                <button className="modal-create">
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
