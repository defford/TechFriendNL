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
  const [submissionCount, setSubmissionCount] = useState(0); // For tracking attempts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentAttempt = submissionCount + 1;
    setSubmissionCount(currentAttempt);

    console.log(`--- Attempt #${currentAttempt}: handleSubmit called. Form data:`, JSON.stringify(formData));
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      console.log(`--- Attempt #${currentAttempt}: Attempting to fetch /api/send-email`);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate', // More aggressive cache prevention
          'Pragma': 'no-cache', // For HTTP/1.0 proxies
          'Expires': '0', // Proxies
        },
        body: JSON.stringify(formData),
      });
      console.log(`--- Attempt #${currentAttempt}: Fetch response received. Status: ${response.status}, Ok: ${response.ok}`);

      // Try to get text first to see raw response, then parse JSON
      const responseText = await response.text();
      console.log(`--- Attempt #${currentAttempt}: Raw response text:`, responseText);

      const result = JSON.parse(responseText); // Parse the text as JSON
      console.log(`--- Attempt #${currentAttempt}: Parsed JSON result:`, JSON.stringify(result));

      if (response.ok && result.success) {
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        console.log(`--- Attempt #${currentAttempt}: Form submission reported as successful by API.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
        console.warn(`--- Attempt #${currentAttempt}: Form submission reported as FAILED by API or fetch not ok. Response OK: ${response.ok}, API Result Success: ${result.success}, API Message: ${result.message}`);
      }
    } catch (error) {
      console.error(`--- Attempt #${currentAttempt}: Contact form submission fetch/network/JSON parsing error:`, error);
      setStatusMessage('An error occurred during submission. Please try again later.');
    } finally {
      setIsSubmitting(false);
      console.log(`--- Attempt #${currentAttempt}: handleSubmit finished.`);
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
