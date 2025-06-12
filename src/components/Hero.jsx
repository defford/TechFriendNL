import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Having problems with your computer or phone?</h1>
        <p className="hero-description">
          Local, friendly tech help in Grand Falls-Windsor. No jargon, no judgment, just solutions that work.
        </p>
        <div className="hero-cta-container">
          <Link to="/contact" className="hero-cta-button secondary">
            Get Free Estimate
          </Link>
        </div>
        <p className="hero-trust-signal">
          ✓ Same-day help available &nbsp;&nbsp; ✓ Most fixes $40-80 &nbsp;&nbsp; ✓ Free phone consultation
        </p>
      </div>
    </section>
  );
}

export default Hero;
