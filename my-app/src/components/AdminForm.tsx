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
    cusine: "",
    cookTime: 0,
    servings: 1,
    imageUrl: "",
    ingredients: [{ item: "", quantity: 0, unit: "" }],
    instructions: [""],
    tags: []
  });

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
        category: recipe.category,
        cusine: recipe.cusine,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        imageUrl: recipe.imageUrl,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        tags: recipe.tags
      });
    }
  }, [recipe]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (formData.title.length < 3 || formData.title.length > 100) {
      newErrors.title = "Title must be 3-100 characters";
    }

    if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }

    if (!formData.cusine || formData.cusine.trim().length === 0) {
      newErrors.cusine = "Cuisine is required";
    }

    if (formData.cookTime <= 0 || formData.cookTime > 600) {
      newErrors.cookTime = "Cook time must be 1-600 minutes";
    }

    if (formData.servings <= 0 || formData.servings > 20) {
      newErrors.servings = "Servings must be 1-20";
    }

    try {
      new URL(formData.imageUrl);
    } catch {
      newErrors.imageUrl = "Must be a valid URL";
    }

    if (formData.ingredients.length === 0) {
      newErrors.ingredients = "At least one ingredient required";
    } else {
      const hasInvalidIngredient = formData.ingredients.some(
        ing => !ing.item || !ing.unit || ing.quantity <= 0
      );
      if (hasInvalidIngredient) {
        newErrors.ingredients = "All ingredients must have item, quantity, and unit";
      }
    }

    if (formData.instructions.length === 0) {
      newErrors.instructions = "At least one instruction required";
    } else {
      const hasEmptyInstruction = formData.instructions.some(
        inst => !inst || inst.trim().length === 0
      );
      if (hasEmptyInstruction) {
        newErrors.instructions = "All instructions must be non-empty";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        {errors.title && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.title}</div>}
      </div>

      <div className="form-group">
        <label>Description *</label>
        <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        {errors.description && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.description}</div>}
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
          <label>Cuisine *</label>
          <input
            type="text"
            required
            value={formData.cusine}
            onChange={(e) => setFormData({ ...formData, cusine: e.target.value })}
            placeholder="e.g., Indian, Italian, Chinese"
          />
          {errors.cusine && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.cusine}</div>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cook Time (minutes) *</label>
          <input type="number" required min="0" value={formData.cookTime} onChange={(e) => setFormData({ ...formData, cookTime: parseInt(e.target.value) })} />
          {errors.cookTime && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.cookTime}</div>}
        </div>

        <div className="form-group">
          <label>Servings *</label>
          <input type="number" required min="1" value={formData.servings} onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })} />
          {errors.servings && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.servings}</div>}
        </div>
      </div>

      <div className="form-group">
        <label>Image URL *</label>
        <input type="url" required value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} />
        {errors.imageUrl && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.imageUrl}</div>}
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
        {errors.ingredients && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.ingredients}</div>}
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
        {errors.instructions && <div style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '5px' }}>{errors.instructions}</div>}
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
