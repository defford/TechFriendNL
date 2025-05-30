import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css'; // To be created

const testimonialData = [
  {
    id: 1,
    quote: "Tech Friend NL fixed my slow laptop in no time! Super friendly service and very knowledgeable. Highly recommend!",
    author: 'Sarah P.',
    location: 'Grand Falls-Windsor',
    service: 'PC Repair'
  }
];

function Testimonials() {
  return (
    <div className="testimonials-page container">
      <header className="testimonials-header">
        <h1>What Our Clients Say</h1>
        <p>
          We're proud of the relationships we build and the positive feedback we receive. 
          Here's what some of our valued clients have to say about their experience with Tech Friend NL.
        </p>
      </header>

      <div className="testimonials-list">
        {testimonialData.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id} 
            quote={testimonial.quote} 
            author={testimonial.author} 
            location={testimonial.location}
            service={testimonial.service}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
