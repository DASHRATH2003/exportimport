// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import '../styles/animations.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero fade-in">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in Touch with Our Expert Team</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card slide-in-left delay-1 hover-lift">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Location</h3>
              <p>123 Business Street</p>
              <p>City, Country 12345</p>
            </div>
            <div className="info-card slide-in-left delay-2 hover-lift">
              <i className="fas fa-phone"></i>
              <h3>Phone Number</h3>
              <p>+1 (234) 567-8900</p>
              <p>+1 (234) 567-8901</p>
            </div>
            <div className="info-card slide-in-left delay-3 hover-lift">
              <i className="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>info@globaltrade.com</p>
              <p>support@globaltrade.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container scale-up">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
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
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows="6"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn hover-scale">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section fade-in">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986867659859!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644286590170!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="location map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;