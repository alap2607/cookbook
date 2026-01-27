import { useState, useEffect } from 'react';
import type { Recipe } from '../services/api';

const FAVORITES_KEY = 'culinaria_favorites';

// Load favorites from localStorage
function loadFavorites(): Set<string> {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Set(Array.isArray(parsed) ? parsed : []);
    }
  } catch (error) {
    console.error('Error loading favorites:', error);
  }
  return new Set();
}

// Save favorites to localStorage
function saveFavorites(favorites: Set<string>): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
}

export interface UseFavoritesReturn {
  favorites: Set<string>;
  isFavorite: (id: string) => boolean;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (id: string) => void;
  getFavoriteRecipes: (allRecipes: Recipe[]) => Recipe[];
}

export function useFavorites(): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  // Sync across tabs using storage event
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === FAVORITES_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setFavorites(new Set(Array.isArray(parsed) ? parsed : []));
        } catch (error) {
          console.error('Error syncing favorites:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const isFavorite = (id: string): boolean => {
    return favorites.has(id);
  };

  const addFavorite = (id: string): void => {
    setFavorites(prev => new Set(prev).add(id));
  };

  const removeFavorite = (id: string): void => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const toggleFavorite = (id: string): void => {
    if (favorites.has(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const getFavoriteRecipes = (allRecipes: Recipe[]): Recipe[] => {
    return allRecipes.filter(recipe => favorites.has(recipe.id));
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    getFavoriteRecipes
  };
}
