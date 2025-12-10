import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Deals() {
  const deals = products.filter((p) => p.badge);

  return (
    <div className="page-container">
      <h1 className="page-title">Special Deals</h1>
      <p className="page-sub">Exclusive limited-time offers</p>

      <div className="grid">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
