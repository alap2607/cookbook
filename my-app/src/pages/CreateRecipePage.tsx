import { useState } from "react";
import { Link } from "react-router-dom";
import { Upload, Plus, Minus, Image, ChefHat, Clock, Users, X } from "lucide-react";
import Layout from "../components/Layout";
import "./CreateRecipePage.css";

interface Ingredient {
  quantity: string;
  unit: string;
  item: string;
}

export default function CreateRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { quantity: "", unit: "", item: "" }
  ]);
  const [instructions, setInstructions] = useState<string[]>([""]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { quantity: "", unit: "", item: "" }]);
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index));
    }
  };

  const updateIngredient = (index: number, field: keyof Ingredient, value: string) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    if (instructions.length > 1) {
      setInstructions(instructions.filter((_, i) => i !== index));
    }
  };

  const updateInstruction = (index: number, value: string) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, description, category, cookTime, servings, ingredients, instructions });
  };

  return (
    <Layout>
      <div className="create-recipe-page">
        <div className="create-header">
          <h1>Add a recipe</h1>
          <p>Share your culinary creation with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="create-form">
          <div className="form-layout">
            {/* Left Column - Media Upload */}
            <div className="form-left">
              <div className="upload-section">
                <label className="upload-area">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleImageChange}
                    hidden
                  />
                  {imagePreview ? (
                    <div className="preview-container">
                      <img src={imagePreview} alt="Preview" className="image-preview" />
                      <button
                        type="button"
                        className="remove-preview"
                        onClick={(e) => {
                          e.preventDefault();
                          setImagePreview(null);
                        }}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-icon">
                        <Upload size={32} />
                      </div>
                      <span className="upload-title">Upload the video</span>
                      <span className="upload-subtitle">or drag and drop</span>
                      <span className="upload-hint">PNG, JPG, MP4 up to 50MB</span>
                    </div>
                  )}
                </label>

                <div className="upload-alternatives">
                  <button type="button" className="alt-upload-btn">
                    <Image size={20} />
                    <span>Add Photo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Form Fields */}
            <div className="form-right">
              {/* Basic Info */}
              <div className="form-section">
                <div className="form-field">
                  <label>Recipe Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Give your recipe a name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your recipe..."
                    rows={3}
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>
                      <ChefHat size={16} />
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="">Select category</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="chicken">Chicken</option>
                      <option value="quick">Quick</option>
                      <option value="spicy">Spicy</option>
                      <option value="dessert">Dessert</option>
                      <option value="soup">Soup</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>
                      <Clock size={16} />
                      Cook Time (min)
                    </label>
                    <input
                      type="number"
                      value={cookTime}
                      onChange={(e) => setCookTime(e.target.value)}
                      placeholder="30"
                      min="1"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>
                      <Users size={16} />
                      Servings
                    </label>
                    <input
                      type="number"
                      value={servings}
                      onChange={(e) => setServings(e.target.value)}
                      placeholder="4"
                      min="1"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="form-section">
                <h3>Ingredients</h3>
                <div className="ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-row">
                      <input
                        type="text"
                        value={ingredient.quantity}
                        onChange={(e) => updateIngredient(index, "quantity", e.target.value)}
                        placeholder="Qty"
                        className="ingredient-qty"
                      />
                      <input
                        type="text"
                        value={ingredient.unit}
                        onChange={(e) => updateIngredient(index, "unit", e.target.value)}
                        placeholder="Unit"
                        className="ingredient-unit"
                      />
                      <input
                        type="text"
                        value={ingredient.item}
                        onChange={(e) => updateIngredient(index, "item", e.target.value)}
                        placeholder="Ingredient"
                        className="ingredient-item"
                      />
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeIngredient(index)}
                        disabled={ingredients.length === 1}
                      >
                        <Minus size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <button type="button" className="add-btn" onClick={addIngredient}>
                  <Plus size={18} />
                  <span>Add Ingredient</span>
                </button>
              </div>

              {/* Instructions */}
              <div className="form-section">
                <h3>Instructions</h3>
                <div className="instructions-list">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="instruction-row">
                      <span className="step-number">{index + 1}</span>
                      <textarea
                        value={instruction}
                        onChange={(e) => updateInstruction(index, e.target.value)}
                        placeholder={`Step ${index + 1}...`}
                        rows={2}
                      />
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeInstruction(index)}
                        disabled={instructions.length === 1}
                      >
                        <Minus size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <button type="button" className="add-btn" onClick={addInstruction}>
                  <Plus size={18} />
                  <span>Add Step</span>
                </button>
              </div>

              {/* Submit */}
              <div className="form-actions">
                <Link to="/" className="cancel-btn">Cancel</Link>
                <button type="submit" className="submit-btn">
                  Publish Recipe
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
