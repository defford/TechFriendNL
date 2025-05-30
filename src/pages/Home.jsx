import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import './Home.css'; // We'll create this for specific Home page styles

function Home() {
  // Placeholder data for service previews
  const servicesPreview = [
    { title: 'Clean up Popups & Viruses', description: 'Get rid of annoying popups, fake virus alerts, and weird browser behavior — fast and safe.', icon: '💻' },
    { title: 'Passwords & Forms Help', description: 'Stuck on a login screen or online form? I’ll recover your account and help you submit things properly.', icon: '🛡️' },
    { title: 'Fix My Phone or Computer', description: 'Whether it’s not working, acting strange, or just confusing — I’ll figure it out and walk you through it.', icon: '🌐' },
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="services-preview-section">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          {servicesPreview.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
        {/* Link to full services page could go here */}
      </section>

      <section className="about-snippet-section">
        <h2>About Tech Friend NL</h2>
        <p>
          We are your local, friendly, and reliable tech support service in Grand Falls-Windsor. 
          Our mission is to provide clear, understandable, and effective answers 
          to our community. No jargon, just help!
        </p>
        {/* Link to full about page could go here */}
      </section>

      <CTA 
        title="Need Tech Help?"
        text="Don't let tech troubles frustrate you. Reach out for a quick and friendly solution!"
        buttonText="Let's Talk!"
        buttonLink="/contact"
      />
    </div>
  );
}

export default Home;
