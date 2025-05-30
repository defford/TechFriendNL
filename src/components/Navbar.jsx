import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item brand-text">Tech Friend NL</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/services" className="navbar-item">Services</Link>
        <Link to="/about" className="navbar-item">About</Link>
        {/* <Link to="/testimonials" className="navbar-item">Testimonials</Link> */}
        <Link to="/contact" className="navbar-item">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
