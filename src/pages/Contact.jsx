import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css'; // To be created

function Contact() {
  return (
    <div className="contact-page container">
      <header className="contact-header">
        <h1>Get Help Today</h1>
        <br></br>
        <p>
          Having tech troubles? Don't struggle alone! Whether you need immediate help over the phone 
          or want to schedule an in-person visit, we're here to make your tech problems disappear.
        </p>
        <div className="contact-highlight">
          <p>Most problems can be diagnosed and often solved right over the phone!</p>
          <br></br>
        </div>
        
      </header>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>📞 Call or Text</h3>
              <p><strong>Phone:</strong> <a href="tel:+17097270484">(709) 727-0484</a></p>
              <p>Best for: Urgent issues, quick questions, immediate help</p>
            </div>
            
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p><strong>Email:</strong> <a href="mailto:techfriendnl@gmail.com">techfriendnl@gmail.com</a></p>
              <p>Best for: Detailed questions, scheduling appointments</p>
            </div>
            
            <div className="contact-method">
              <h3>🕒 Hours</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Emergency calls only</p>
            </div>
          </div>
          
          <div className="response-info">
            <h3>Response Times</h3>
            <ul>
              <li><strong>Phone calls:</strong> Usually answered immediately during business hours</li>
              <li><strong>Text messages:</strong> Responded to within 2 hours</li>
              <li><strong>Emails:</strong> Replied to within 24 hours</li>
              <li><strong>Emergency issues:</strong> Available evenings and weekends</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <p>Prefer to send details about your problem? Fill out the form below and we'll get back to you quickly.</p>
          <ContactForm />
        </div>
      </div>
      
      <div className="contact-footer">
        <h2>Service Area</h2>
        <p>
          We provide in-home tech support throughout <strong>Grand Falls-Windsor</strong> and surrounding areas. 
          Travel fee: $20 within the main town area. Remote help available anywhere!
        </p>
      </div>
    </div>
  );
}

export default Contact;
