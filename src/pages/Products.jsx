import { useState } from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

export default function Products() {
  const [filtered, setFiltered] = useState(products);

  // SEARCH FILTER
  const handleSearch = (query) => {
    setFiltered(
      products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // SORTING FILTER
  const handleSort = (value) => {
    let sorted = [...filtered];

    if (value === "newest") sorted.sort((a, b) => b.id - a.id);
    if (value === "oldest") sorted.sort((a, b) => a.id - b.id);
    if (value === "price-low") sorted.sort((a, b) => a.price - b.price);
    if (value === "price-high") sorted.sort((a, b) => b.price - a.price);

    setFiltered(sorted);
  };

  // PRICE FILTER
  const handlePriceFilter = (value) => {
    if (value === "all") {
      setFiltered(products);
      return;
    }
    setFiltered(products.filter((p) => p.price <= Number(value)));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">All Products</h1>

      <FilterBar
        onSearch={handleSearch}
        onSort={handleSort}
        onPriceFilter={handlePriceFilter}
      />

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
