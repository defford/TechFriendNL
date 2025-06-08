import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

function CTA({ title, text, buttonText, buttonLink }) {
  // Check if buttonLink is a phone number (tel:) or external link
  const isPhoneLink = buttonLink && buttonLink.startsWith('tel:');
  const isExternalLink = buttonLink && (buttonLink.startsWith('http') || buttonLink.startsWith('tel:') || buttonLink.startsWith('mailto:'));

  return (
    <section className="cta-section">
      <h2>{title || 'Ready to get started?'}</h2>
      <p>{text || 'Contact us today for a free consultation.'}</p>
      {isExternalLink ? (
        <a href={buttonLink || '/contact'} className="hero-cta-button">
          {buttonText || 'Let\'s Talk!'}
        </a>
      ) : (
        <Link to={buttonLink || '/contact'} className="hero-cta-button">
          {buttonText || 'Let\'s Talk!'}
        </Link>
      )}
    </section>
  );
}

export default CTA;
