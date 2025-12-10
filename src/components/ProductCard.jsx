import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      {product.badge && (
        <span className="product-badge">{product.badge}</span>
      )}

      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>

      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="btn btn-outline">
          View
        </Link>
        <button className="btn btn-primary btn-icon">
          Add 🛒
        </button>
      </div>
    </article>
  );
}
