import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useRecipes, useRecipe } from "../hooks/useRecipes";
import AdminForm from "../components/AdminForm";
import type { CreateRecipeInput } from "../services/api";
import * as api from "../services/api";
import { LogOut } from "lucide-react";
import './AdminPage.css';

export default function AdminPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const editId = searchParams.get("edit");
  const [showForm, setShowForm] = useState(!!editId);
  const { recipes, loading, error, refetch } = useRecipes();
  const { recipe: editRecipe } = useRecipe(editId || undefined);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    setShowForm(!!editId);
  }, [editId]);

  const handleCreate = async (data: CreateRecipeInput) => {
    await api.createRecipe(data);
    setShowForm(false);
    refetch();
    navigate("/admin");
  };

  const handleUpdate = async (data: CreateRecipeInput) => {
    if (editId) {
      await api.updateRecipe(editId, data);
      setShowForm(false);
      refetch();
      navigate("/admin");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setDeletingId(id);
      try {
        await api.deleteRecipe(id);
        refetch();
      } catch (error) {
        console.error("Failed to delete recipe:", error);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (showForm) {
    return (
      <div className="app">
        <AdminForm
          recipe={editRecipe || undefined}
          onSubmit={editId ? handleUpdate : handleCreate}
          onCancel={() => {
            setShowForm(false);
            navigate("/admin");
          }}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <section className="admin-header-section">
        <div className="admin-header-container">
          <div className="admin-header-content">
            <div className="admin-header-info">
              <h1>Recipe Management</h1>
              <p>Create, edit, and manage your recipe collection</p>
            </div>
            <div className="admin-header-actions">
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary admin-add-button"
              >
                + Add New Recipe
              </button>
              <button
                onClick={handleLogout}
                className="btn-secondary admin-logout-button"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="admin-content-section">
        <div className="admin-content-container">
          {loading ? (
            <div className="loading">Loading recipes...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : recipes.length === 0 ? (
            <div className="admin-empty-state">
              <p>No recipes yet. Start by adding your first recipe!</p>
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary admin-empty-button"
              >
                + Add First Recipe
              </button>
            </div>
          ) : (
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Cusine</th>
                    <th>Category</th>
                    <th>Cook Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                      <td>
                        <img
                          src={recipe.imageUrl}
                          alt={recipe.title}
                          className="admin-recipe-image"
                        />
                      </td>
                      <td className="admin-recipe-title">
                        {recipe.title}
                      </td>
                      <td>
                        <span className="admin-badge">
                          {recipe.cusine}
                        </span>
                      </td>
                      <td>
                        <span className="admin-badge">
                          {recipe.category}
                        </span>
                      </td>
                      <td className="admin-cook-time">
                        {recipe.cookTime} mins
                      </td>
                      <td>
                        <div className="admin-actions">
                          <button
                            onClick={() => navigate(`/admin?edit=${recipe.id}`)}
                            className="btn-secondary admin-edit-button"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(recipe.id)}
                            disabled={deletingId === recipe.id}
                            className="admin-delete-button"
                          >
                            {deletingId === recipe.id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
