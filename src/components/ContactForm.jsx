import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(''); // Clear previous messages

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send all form data
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {statusMessage && (
        <div className={`status-message ${statusMessage.includes('successfully') ? 'success' : 'error'}`}>
          {statusMessage}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
          disabled={isSubmitting}
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
