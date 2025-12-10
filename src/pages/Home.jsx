import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Zung-fits</h1>
          <p>Curated outfits, trending essentials, and top-tech — all in one place.</p>
          <Link to="/products" className="btn hero-btn">
            Shop Now →
          </Link>
        </div>

        <div className="hero-image">
          <img src="/images/hero.png" alt="Hero outfit" />
        </div>
      </section>

      <section className="home-links">
        <Link to="/outfits" className="home-card">Outfits</Link>
        <Link to="/popular" className="home-card">Popular</Link>
        <Link to="/deals" className="home-card">Deals</Link>
        <Link to="/products" className="home-card">All Products</Link>
      </section>
    </div>
  );
}
