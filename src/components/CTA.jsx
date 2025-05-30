import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

function CTA({ title, text, buttonText, buttonLink }) {
  return (
    <section className="cta-section">
      <h2>{title || 'Ready to get started?'}</h2>
      <p>{text || 'Contact us today for a free consultation.'}</p>
      <Link to="/contact" className="hero-cta-button">Let's Talk!</Link>
    </section>
  );
}

export default CTA;
