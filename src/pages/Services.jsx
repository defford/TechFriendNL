import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css'; // We will create this file next

const servicesData = [
  {
    id: 1,
    icon: '🛡️',
    title: 'Remove Scary Pop-ups & Fake Virus Warnings',
    description: 'Is your browser showing "Your computer is infected!" messages? Getting redirected to weird websites? I\'ll clean out all the fake alerts, scareware, and browser hijackers that are making your computer unusable.'
  },
  {
    id: 2,
    icon: '🔐',
    title: 'Recover Forgotten Passwords & Locked Accounts',
    description: 'Can\'t get into your email, Facebook, or government accounts? Forgot your banking password? I\'ll help you safely recover access and set up simple password management so this doesn\'t happen again.'
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Fix Slow, Freezing, or Crashing Computers',
    description: 'Does your computer take forever to start? Programs keep freezing or crashing? I\'ll clean up the mess, remove unnecessary programs, and get your computer running like new again.'
  },
  {
    id: 4,
    icon: '📄',
    title: 'Help with Government & Online Forms',
    description: 'Stuck on the CRA website? Can\'t upload documents to Service Canada? Job applications giving you trouble? I\'ll walk you through every step and make sure your forms get submitted properly.'
  },
  {
    id: 5,
    icon: '📶',
    title: 'Connect Printers, Wi-Fi & Fix Internet Issues',
    description: 'Printer won\'t connect to your new laptop? Wi-Fi keeps dropping out? Internet slow or not working? I\'ll get all your devices talking to each other and your internet running smoothly.'
  },
  {
    id: 6,
    icon: '📱',
    title: 'Set Up New Phones & Transfer Everything',
    description: 'Got a new iPhone or Android? Worried about losing your photos and contacts? I\'ll transfer everything from your old phone, set up your apps, and teach you the basics so you feel confident using it.'
  },
  {
    id: 7,
    icon: '🧓',
    title: 'Patient Tech Lessons for Seniors',
    description: 'Want to video call your grandkids but don\'t know how? Confused by all these apps and settings? I specialize in teaching technology at your pace, with no judgment and lots of patience.'
  },
  {
    id: 8,
    icon: '🏠',
    title: 'Smart Home Setup & Troubleshooting',
    description: 'Alexa not responding? Smart lights acting up? Thermostat won\'t connect? I\'ll get your smart home devices working properly and show you how to control everything easily.'
  },
  {
    id: 9,
    icon: '💬',
    title: 'Learn Zoom, Email & Social Media Safely',
    description: 'Want to join family video calls? Learn to email photos? Use Facebook safely? I\'ll teach you everything step-by-step and show you how to avoid scams and protect your privacy online.'
  },
  {
    id: 10,
    icon: '🧑‍💼',
    title: 'Small Business Tech Support',
    description: 'Need help with your business email, website, or point-of-sale system? Trouble with online banking or inventory software? I provide practical tech support for local small businesses and entrepreneurs.'
  }
];

function Services() {
  return (
    <div className="services-page container">
      <header className="services-header">
        <h1>We Fix the Tech Problems That Drive You Crazy</h1>
        <p>
          No problem is too small, and no question is too basic. We handle the everyday tech frustrations 
          that other companies ignore — with patience, clear explanations, and fair pricing.
        </p>
        <div className="services-highlight">
          <p><strong>📞 Call (709) 727-0484 for a free estimate</strong> — Most problems can be diagnosed over the phone!</p>
        </div>
      </header>

      <div className="services-list">
        {servicesData.map(service => (
          <ServiceCard 
            key={service.id} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>

      <section className="services-footer">
        <h2>Don't See Your Problem Listed?</h2>
        <p>
          These are just our most common fixes. If you're having any kind of tech trouble — 
          from mysterious error messages to devices that just won't work right — give us a call. 
          Chances are, we've seen it before and can help.
        </p>
        <div className="services-cta">
          <a href="tel:+17097270484" className="cta-button">
            📞 Call Now: (709) 727-0484
          </a>
          <span className="cta-text">Free consultation • Same-day help available</span>
        </div>
      </section>
    </div>
  );
}

export default Services;
