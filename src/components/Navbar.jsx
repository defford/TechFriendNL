import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file for styling

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          className="navbar-burger" 
          aria-label="menu" 
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span aria-hidden="true">☰</span>
        </button>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item brand-text" onClick={() => setIsMobileMenuOpen(false)}>Tech Friend NL</Link>
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
          <Link to="/" className="navbar-item" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/services" className="navbar-item" onClick={toggleMobileMenu}>Services</Link>
          <Link to="/about" className="navbar-item" onClick={toggleMobileMenu}>About</Link>
          {/* <Link to="/testimonials" className="navbar-item" onClick={toggleMobileMenu}>Testimonials</Link> */}
          <Link to="/contact" className="navbar-item" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
