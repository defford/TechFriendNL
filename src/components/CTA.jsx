import React from 'react';
import './CTA.css';

function CTA({ title, text, buttonText, buttonLink }) {
  return (
    <section className="cta-section">
      <h2>{title || 'Ready to get started?'}</h2>
      <p>{text || 'Contact us today for a free consultation.'}</p>
      <a href={buttonLink || '/contact'} className="cta-button">
        {buttonText || 'Contact Us'}
      </a>
    </section>
  );
}

export default CTA;
