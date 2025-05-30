import React from 'react';
import './ServiceCard.css';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Optional: Link to full service page */}
      {/* <a href="#">Learn More</a> */}
    </div>
  );
}

export default ServiceCard;
