import { Link } from "react-router-dom";

export default function Categories() {
  const categories = ["Phones", "Accessories", "Outfits", "Jewellery", "Deals"];

  return (
    <div className="page-container">
      <h1 className="page-title">Categories</h1>

      <div className="categories-list">
        {categories.map((cat) => (
          <Link key={cat} className="category-card" to="/products">
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
