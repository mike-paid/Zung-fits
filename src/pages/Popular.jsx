import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Popular() {
  const popularItems = products.slice(0, 3);

  return (
    <div className="page-container">
      <h1 className="page-title">Popular Products</h1>
      <p className="page-sub">Trending this week</p>

      <div className="grid">
        {popularItems.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
