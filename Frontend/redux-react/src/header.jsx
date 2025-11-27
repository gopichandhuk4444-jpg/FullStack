import React from 'react';
import './Header.css'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2023 Recipe Heaven. All rights reserved.</p>  {/* Customize copyright */}
        <div className="footer-links">
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Recipe Heaven</h1> 
        <nav className="header-nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};