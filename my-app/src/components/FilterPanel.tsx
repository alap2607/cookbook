import { useState } from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';
import type { SearchFilters } from '../hooks/useSearch';
import './FilterPanel.css';

interface FilterPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  availableCuisines: string[];
}

export default function FilterPanel({ filters, onFiltersChange, availableCuisines }: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryOptions = [
    { value: 'vegetarian', label: 'Vegetarian', color: '#27AE60' },
    { value: 'chicken', label: 'Chicken', color: '#FF8243' },
    { value: 'quick', label: 'Quick Meals', color: '#3498DB' },
    { value: 'spicy', label: 'Spicy', color: '#E74C3C' }
  ];

  const handleCategoryToggle = (category: string) => {
    const categories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    onFiltersChange({ ...filters, categories });
  };

  const handleClearFilters = () => {
    onFiltersChange({
      searchQuery: '',
      categories: [],
      minCookTime: 0,
      maxCookTime: 120,
      minServings: 1,
      maxServings: 10,
      cuisine: '',
      sortBy: 'default'
    });
  };

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'time-asc', label: 'Cook Time (Low to High)' },
    { value: 'time-desc', label: 'Cook Time (High to Low)' },
    { value: 'servings-asc', label: 'Servings (Low to High)' },
    { value: 'servings-desc', label: 'Servings (High to Low)' }
  ];

  const activeFilterCount =
    filters.categories.length +
    (filters.minCookTime > 0 ? 1 : 0) +
    (filters.maxCookTime < 120 ? 1 : 0) +
    (filters.minServings > 1 ? 1 : 0) +
    (filters.maxServings < 10 ? 1 : 0) +
    (filters.cuisine ? 1 : 0);

  return (
    <>
      {/* Filter Button */}
      <button className="filter-toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        <Filter size={20} />
        <span>Filters</span>
        {activeFilterCount > 0 && (
          <span className="filter-count-badge">{activeFilterCount}</span>
        )}
      </button>

      {/* Backdrop */}
      {isExpanded && (
        <div className="filter-backdrop" onClick={() => setIsExpanded(false)} />
      )}

      {/* Filter Modal */}
      <div className={`filter-panel ${isExpanded ? 'filter-panel-open' : ''}`}>
        <div className="filter-header">
          <div className="filter-header-left">
            <Filter size={20} />
            <h3>Filters</h3>
            {activeFilterCount > 0 && (
              <span className="filter-count-badge">{activeFilterCount}</span>
            )}
          </div>
          <div className="filter-header-right">
            {activeFilterCount > 0 && (
              <button
                className="clear-filters-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearFilters();
                }}
              >
                Clear All
              </button>
            )}
            <button className="close-filter-btn" onClick={() => setIsExpanded(false)}>
              ✕
            </button>
          </div>
        </div>

        <div className="filter-content">
          {/* Category Filters */}
          <div className="filter-group">
            <label className="filter-label">Categories</label>
            <div className="category-checkboxes">
              {categoryOptions.map((option) => (
                <label key={option.value} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(option.value)}
                    onChange={() => handleCategoryToggle(option.value)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom" style={{ borderColor: option.color }}>
                    {filters.categories.includes(option.value) && (
                      <span className="checkbox-check" style={{ backgroundColor: option.color }}>✓</span>
                    )}
                  </span>
                  <span className="checkbox-text">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Cook Time Range */}
          <div className="filter-group">
            <label className="filter-label">Cook Time (minutes)</label>
            <div className="range-inputs">
              <div className="range-input-group">
                <label htmlFor="minCookTime" className="range-input-label">Min</label>
                <input
                  id="minCookTime"
                  type="number"
                  min="0"
                  max="120"
                  value={filters.minCookTime}
                  onChange={(e) => onFiltersChange({ ...filters, minCookTime: Number(e.target.value) })}
                  className="range-input"
                />
              </div>
              <span className="range-separator">-</span>
              <div className="range-input-group">
                <label htmlFor="maxCookTime" className="range-input-label">Max</label>
                <input
                  id="maxCookTime"
                  type="number"
                  min="0"
                  max="120"
                  value={filters.maxCookTime}
                  onChange={(e) => onFiltersChange({ ...filters, maxCookTime: Number(e.target.value) })}
                  className="range-input"
                />
              </div>
            </div>
          </div>

          {/* Servings Range */}
          <div className="filter-group">
            <label className="filter-label">Servings</label>
            <div className="range-inputs">
              <div className="range-input-group">
                <label htmlFor="minServings" className="range-input-label">Min</label>
                <input
                  id="minServings"
                  type="number"
                  min="1"
                  max="10"
                  value={filters.minServings}
                  onChange={(e) => onFiltersChange({ ...filters, minServings: Number(e.target.value) })}
                  className="range-input"
                />
              </div>
              <span className="range-separator">-</span>
              <div className="range-input-group">
                <label htmlFor="maxServings" className="range-input-label">Max</label>
                <input
                  id="maxServings"
                  type="number"
                  min="1"
                  max="10"
                  value={filters.maxServings}
                  onChange={(e) => onFiltersChange({ ...filters, maxServings: Number(e.target.value) })}
                  className="range-input"
                />
              </div>
            </div>
          </div>

          {/* Cuisine Filter */}
          <div className="filter-group">
            <label htmlFor="cuisine" className="filter-label">Cuisine</label>
            <div className="select-wrapper">
              <select
                id="cuisine"
                value={filters.cuisine}
                onChange={(e) => onFiltersChange({ ...filters, cuisine: e.target.value })}
                className="cuisine-select"
              >
                <option value="">All Cuisines</option>
                {availableCuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort By */}
          <div className="filter-group">
            <label htmlFor="sortBy" className="filter-label">
              <ArrowUpDown size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Sort By
            </label>
            <div className="select-wrapper">
              <select
                id="sortBy"
                value={filters.sortBy}
                onChange={(e) => onFiltersChange({ ...filters, sortBy: e.target.value as SearchFilters['sortBy'] })}
                className="cuisine-select"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Apply Button for Mobile */}
        <div className="filter-actions">
          <button className="apply-filters-btn" onClick={() => setIsExpanded(false)}>
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}
