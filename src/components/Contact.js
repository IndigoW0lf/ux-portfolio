// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Contact = () => {
  // Use state for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize the custom Intersection Observer hook
  useFadeInOnScroll();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xrgjlyeg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Submission failed. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact fade-in">
      <div className="container fade-in">
        <h2 className="fade-in">Send Me a Note</h2>

        {submitted && (
          <p className="success-message fade-in">
            Thank you for your message, I'll respond shortly!
          </p>
        )}

        {error && <p className="error-message fade-in">{error}</p>}

        <form onSubmit={handleSubmit} className="contact-form fade-in">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;