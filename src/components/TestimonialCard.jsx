import React from 'react';
import './TestimonialCard.css'; // To be created

function TestimonialCard({ quote, author, location, service }) {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-quote">
        <p>"{quote}"</p>
      </blockquote>
      <div className="testimonial-author-info">
        <p className="testimonial-author">- {author}</p>
        {location && <p className="testimonial-location">{location}</p>}
        {service && <p className="testimonial-service-type">Service: {service}</p>}
      </div>
    </div>
  );
}

export default TestimonialCard;
