import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Friendly Neighborhood Tech Support</h1>
        <p>Fast, reliable, and local tech help for Grand Falls-Windsor.</p>
        {/* CTA button can be part of Hero or a separate CTA component instance */}
        <Link to="/contact" className="hero-cta-button">Get Help Now</Link>
      </div>
    </section>
  );
}

export default Hero;
