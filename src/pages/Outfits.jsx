import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Outfits() {
  const outfits = products.filter((p) => p.type === "outfit");

  return (
    <div className="page-container">
      <h1 className="page-title">Outfit Collections</h1>
      <p className="page-sub">Curated looks inspired by H&M</p>

      <div className="grid">
        {outfits.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
