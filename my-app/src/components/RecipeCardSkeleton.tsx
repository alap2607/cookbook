import './RecipeCardSkeleton.css';

export default function RecipeCardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image shimmer"></div>
      <div className="skeleton-content">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-meta">
          <div className="skeleton-meta-item shimmer"></div>
          <div className="skeleton-meta-item shimmer"></div>
        </div>
        <div className="skeleton-description">
          <div className="skeleton-line shimmer"></div>
          <div className="skeleton-line shimmer"></div>
          <div className="skeleton-line short shimmer"></div>
        </div>
        <div className="skeleton-badge shimmer"></div>
      </div>
    </div>
  );
}
