import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Frustrated with Your Computer or Phone?</h1>
        <p className="hero-subtitle">
          <strong>We Fix What's Driving You Crazy</strong> — Pop-ups, slow computers, 
          forgotten passwords, and all those confusing tech problems.
        </p>
        <p className="hero-description">
          Local, friendly tech help in Grand Falls-Windsor. No jargon, no judgment, just solutions that work.
        </p>
        <div className="hero-cta-container">
          <a href="tel:+17097270484" className="hero-cta-button primary">
            📞 Call Now: (709) 727-0484
          </a>
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
