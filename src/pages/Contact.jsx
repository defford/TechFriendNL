import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css'; // To be created

function Contact() {
  return (
    <div className="contact-page container">
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          We're here to help with all your tech needs! Whether you have a question, need support, 
          or want to discuss a specific project, feel free to reach out. 
          Fill out the form below, or contact us directly.
        </p>
      </header>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            Prefer to reach out directly? Here's how you can contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:techfriendnl@gmail.com">techfriendnl@gmail.com</a></li>
            {/* <li><strong>Phone:</strong> <a href="tel:+17097270484">(709) 727-0484</a></li> */}
            <li><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (By Appointment)</li>
            {/* Add address here if there's a physical location for drop-offs/visits */}
            {/* <li><strong>Address:</strong> 123 Tech Street, Grand Falls-Windsor, NL (placeholder)</li> */}
          </ul>
          <p>
            We aim to respond to all inquiries within 24 business hours.
          </p>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
