import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 

export default function Navbar() {
  
  const { cart } = useCart(); 

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">TechStore ⚡</Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          Cart 🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}