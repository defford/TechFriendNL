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
  },
  {
    id: 2,
    quote: "I was having so much trouble setting up my new Wi-Fi. They came over, sorted it all out, and even showed me how to manage it. Fantastic!",
    author: 'John B.',
    location: 'Bishop\'s Falls Area',
    service: 'Home Network Setup'
  },
  {
    id: 3,
    quote: "My phone was acting weird, and I thought I lost all my photos. Tech Friend NL helped me back everything up and get my phone working properly again. Lifesavers!",
    author: 'Mary L.',
    location: 'Grand Falls-Windsor',
    service: 'Mobile Device Support'
  },
  {
    id: 4,
    quote: "Needed some help understanding my new computer software. The tutoring session was clear, patient, and exactly what I needed. Thank you!",
    author: 'David G.',
    location: 'Botwood',
    service: 'Tech Tutoring'
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
