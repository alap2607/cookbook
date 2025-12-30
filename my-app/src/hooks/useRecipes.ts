import { useState, useEffect } from "react";
import type { Recipe } from "../services/api";
import * as api from "../services/api";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getAllRecipes();
      setRecipes(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, loading, error, refetch: fetchRecipes };
}

export function useRecipe(id: string | undefined) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getRecipeById(id);
        setRecipe(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return { recipe, loading, error };
}
