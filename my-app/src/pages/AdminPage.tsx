import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useRecipes, useRecipe } from "../hooks/useRecipes";
import AdminForm from "../components/AdminForm";
import Header from "../components/Header";
import type { CreateRecipeInput } from "../services/api";
import * as api from "../services/api";
import { LogOut } from "lucide-react";

export default function AdminPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const editId = searchParams.get("edit");
  const [showForm, setShowForm] = useState(!!editId);
  const { recipes, loading, error, refetch } = useRecipes();
  const { recipe: editRecipe } = useRecipe(editId || undefined);

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
      await api.deleteRecipe(id);
      refetch();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (showForm) {
    return (
      <div className="app">
        <Header />
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
      <Header />
      <section style={{ padding: "40px 20px", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h1 className="section-title" style={{ margin: 0 }}>
              Recipe Management
            </h1>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={() => setShowForm(true)} className="btn-primary">
                Add New Recipe
              </button>
              <button
                onClick={handleLogout}
                className="btn-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {loading ? (
            <div className="loading">Loading recipes...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="admin-table">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--medium-gray)", textAlign: "left" }}>
                    <th style={{ padding: "15px" }}>Image</th>
                    <th style={{ padding: "15px" }}>Title</th>
                    <th style={{ padding: "15px" }}>Category</th>
                    <th style={{ padding: "15px" }}>Cook Time</th>
                    <th style={{ padding: "15px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe) => (
                    <tr key={recipe.id} style={{ borderBottom: "1px solid var(--medium-gray)" }}>
                      <td style={{ padding: "15px" }}>
                        <img src={recipe.imageUrl} alt={recipe.title} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }} />
                      </td>
                      <td style={{ padding: "15px" }}>{recipe.title}</td>
                      <td style={{ padding: "15px" }}>
                        <span className="recipe-tag">{recipe.category}</span>
                      </td>
                      <td style={{ padding: "15px" }}>{recipe.cookTime} mins</td>
                      <td style={{ padding: "15px" }}>
                        <button onClick={() => navigate(`/admin?edit=${recipe.id}`)} className="btn-secondary" style={{ marginRight: "10px", padding: "8px 16px" }}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(recipe.id)} className="btn-primary" style={{ padding: "8px 16px", backgroundColor: "var(--primary-color)" }}>
                          Delete
                        </button>
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
