import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css'; // We will create this file next

const servicesData = [
  {
    id: 1,
    icon: '🔧',
    title: 'General Tech Troubleshooting',
    description: 'Device won’t start or crashes. Slow performance. App or software issues. Device cleanup and optimization.'
  },
  {
    id: 2,
    icon: '🧓',
    title: 'Senior-Friendly Digital Support',
    description: 'Customized 1-on-1 lessons. Simplifying devices for ease of use. Patience-first approach to confidence-building.'
  },
  {
    id: 3,
    icon: '📄',
    title: 'Online Forms & Upload Help',
    description: 'Government sites (CRA, Service Canada, etc.). Job applications, license renewals. Scanning, uploading, and attaching documents.'
  },
  {
    id: 4,
    icon: '📶',
    title: 'Wi-Fi, Router & Printer Setup',
    description: 'Home internet connection issues. Printer/scanner configuration. Network troubleshooting.'
  },
  {
    id: 5,
    icon: '📱',
    title: 'Smartphone & Tablet Assistance',
    description: 'New phone setup. Transferring contacts/photos/apps. App installation and troubleshooting.'
  },
  {
    id: 6,
    icon: '🔐',
    title: 'Password & Account Recovery',
    description: 'Resetting forgotten passwords. Recovering locked-out email, Google, Apple, or government accounts. Explaining 2FA (Two-Factor Authentication).'
  },
  {
    id: 7,
    icon: '🧹',
    title: 'Virus & Pop-Up Removal',
    description: 'Fake virus alerts or scams. Unwanted ads or toolbars in browser. Malware and spyware detection/cleanup.'
  },
  {
    id: 8,
    icon: '🏠',
    title: 'Smart Home Help',
    description: 'Alexa, Google Home, smart plugs, thermostats. Wi-Fi-connected lights, appliances, etc. Setup and training.'
  },
  {
    id: 9,
    icon: '💬',
    title: '“Teach Me How” Sessions',
    description: 'Zoom, Google Meet, email, photo storage. Social media basics. Safe online shopping & banking. Settings walkthrough and personalization.'
  },
  {
    id: 10,
    icon: '🧑‍💼',
    title: 'Small Business Support',
    description: 'Tech setup for solo entrepreneurs. Google Workspace, email domains. Website updates or basic troubleshooting. Inventory or POS help (case-by-case).'
  }
];

function Services() {
  return (
    <div className="services-page container">
      <header className="services-header">
        <h1>Our Comprehensive Tech Solutions</h1>
        <p>
          At Tech Friend NL, we offer a wide range of services to keep your digital life running smoothly. 
          Whether it's a stubborn computer, a tricky smartphone, or a new home network, we're here to help.
        </p>
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
    </div>
  );
}

export default Services;
