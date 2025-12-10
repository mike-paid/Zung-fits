import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="brand">
            <img
              src="/zungfits-logo.png"
              className="brand-logo"
              alt="Zung-fits"
            />
            <span className="brand-text">Zung-fits</span>
          </Link>
        </div>

        <nav className="navbar-links desktop-only">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/popular">Popular</NavLink>
          <NavLink to="/outfits">Outfits</NavLink>
          <NavLink to="/deals">Deals</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/cart">🛒 Cart</NavLink>
        </nav>

        <button className="menu-btn mobile-only" onClick={() => setOpen(true)}>
          ☰
        </button>
      </header>

      <aside className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
        <NavLink to="/popular" onClick={() => setOpen(false)}>Popular</NavLink>
        <NavLink to="/outfits" onClick={() => setOpen(false)}>Outfits</NavLink>
        <NavLink to="/deals" onClick={() => setOpen(false)}>Deals</NavLink>
        <NavLink to="/categories" onClick={() => setOpen(false)}>Categories</NavLink>
        <NavLink to="/cart" onClick={() => setOpen(false)}>Cart</NavLink>
      </aside>

      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}
