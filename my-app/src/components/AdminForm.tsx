import { useState, useEffect } from "react";
import type { Recipe, CreateRecipeInput, Ingredient } from "../services/api";

interface AdminFormProps {
  recipe?: Recipe;
  onSubmit: (data: CreateRecipeInput) => Promise<void>;
  onCancel: () => void;
}

export default function AdminForm({ recipe, onSubmit, onCancel }: AdminFormProps) {
  const [formData, setFormData] = useState<CreateRecipeInput>({
    title: "",
    description: "",
    category: "vegetarian",
    cookTime: 0,
    servings: 1,
    imageUrl: "",
    ingredients: [{ item: "", quantity: 0, unit: "" }],
    instructions: [""],
    tags: []
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
        category: recipe.category,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        imageUrl: recipe.imageUrl,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        tags: recipe.tags
      });
    }
  }, [recipe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setSubmitting(false);
    }
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { item: "", quantity: 0, unit: "" }]
    });
  };

  const removeIngredient = (index: number) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((_, i) => i !== index)
    });
  };

  const updateIngredient = (index: number, field: keyof Ingredient, value: string | number) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addInstruction = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, ""]
    });
  };

  const removeInstruction = (index: number) => {
    setFormData({
      ...formData,
      instructions: formData.instructions.filter((_, i) => i !== index)
    });
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = value;
    setFormData({ ...formData, instructions: newInstructions });
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>{recipe ? "Edit Recipe" : "Add New Recipe"}</h2>

      <div className="form-group">
        <label>Title *</label>
        <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      </div>

      <div className="form-group">
        <label>Description *</label>
        <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Category *</label>
          <select required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}>
            <option value="vegetarian">Vegetarian</option>
            <option value="chicken">Chicken</option>
            <option value="quick">Quick</option>
            <option value="spicy">Spicy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cook Time (minutes) *</label>
          <input type="number" required min="0" value={formData.cookTime} onChange={(e) => setFormData({ ...formData, cookTime: parseInt(e.target.value) })} />
        </div>

        <div className="form-group">
          <label>Servings *</label>
          <input type="number" required min="1" value={formData.servings} onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })} />
        </div>
      </div>

      <div className="form-group">
        <label>Image URL *</label>
        <input type="url" required value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} />
      </div>

      <div className="form-section">
        <h3>Ingredients</h3>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="form-row">
            <input type="text" placeholder="Item" value={ingredient.item} onChange={(e) => updateIngredient(index, "item", e.target.value)} />
            <input type="number" placeholder="Quantity" value={ingredient.quantity} onChange={(e) => updateIngredient(index, "quantity", parseFloat(e.target.value))} />
            <input type="text" placeholder="Unit" value={ingredient.unit} onChange={(e) => updateIngredient(index, "unit", e.target.value)} />
            <button type="button" onClick={() => removeIngredient(index)} className="btn-remove">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient} className="btn-secondary">
          Add Ingredient
        </button>
      </div>

      <div className="form-section">
        <h3>Instructions</h3>
        {formData.instructions.map((instruction, index) => (
          <div key={index} className="form-row">
            <textarea placeholder={`Step ${index + 1}`} value={instruction} onChange={(e) => updateInstruction(index, e.target.value)} />
            <button type="button" onClick={() => removeInstruction(index)} className="btn-remove">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addInstruction} className="btn-secondary">
          Add Step
        </button>
      </div>

      <div className="form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" value={formData.tags.join(", ")} onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",").map((t) => t.trim()) })} />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Saving..." : recipe ? "Update Recipe" : "Create Recipe"}
        </button>
      </div>
    </form>
  );
}
