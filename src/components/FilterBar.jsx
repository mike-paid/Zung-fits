import { useState } from "react";

export default function FilterBar({ onSearch, onSort, onPriceFilter }) {
  const [search, setSearch] = useState("");

  return (
    <div className="filter-bar">
      <input
        className="filter-input"
        placeholder="Search products…"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
      />

      <select
        className="filter-select"
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="price-low">Price ↑</option>
        <option value="price-high">Price ↓</option>
      </select>

      <select
        className="filter-select"
        onChange={(e) => onPriceFilter(e.target.value)}
      >
        <option value="all">All Prices</option>
        <option value="50">Under $50</option>
        <option value="100">Under $100</option>
        <option value="200">Under $200</option>
        <option value="500">Under $500</option>
      </select>
    </div>
  );
}
