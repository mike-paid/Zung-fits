// ...existing code...
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const overlay = location.pathname === "/"; // true on home
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showWearsMenu, setShowWearsMenu] = useState(false);
  return (
    <div className="navbar-container"  >
      <nav className={`navbar ${overlay ? "navbar--overlay" : ""}`}>
      <div className="navicon1">

        <div
          className="profile-wrapper"
          onMouseEnter={() => setShowProfileMenu(true)}
          onMouseLeave={() => setShowProfileMenu(false)}
        >
          <Link to="/" className="nav-icon" aria-label="Profile" title="Account">
            <svg
              className="icon"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

          {showProfileMenu && (
            <div className="profile-dropdown">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/account">My Account</Link>
              <Link to="/orders">Orders</Link>
            </div>
          )}
        </div>
    
      
      <div className="navicon2">
        <Link to="/" className="nav-icon" aria-label="Cart" title="Cart">
          <svg className="icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 6h15l-1.5 9h-12z"></path>
            <circle cx="9" cy="20" r="1"></circle>
            <circle cx="18" cy="20" r="1"></circle>
          </svg>
        </Link>
      <div className="Wears-wrapper"
             onMouseEnter={() => setShowWearsMenu(true)}
             onMouseLeave={() => setShowWearsMenu(false)}
      >
              <Link to="/popular" className="nav-link">Wears</Link>
              {showWearsMenu && (
                <div className="Wears-dropdown">
                  <Link to="/Popular">Popular</Link>
                  <Link to="/accessories">Street-wear</Link>
                  <Link to="/shoes">Shoes</Link>
                </div>
              )}
      </div>
        <Link to="/shop" className="nav-link">About us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>


    </div>
    </nav >
    </div>
  );
}
// ...existing code...