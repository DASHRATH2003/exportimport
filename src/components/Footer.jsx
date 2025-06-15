// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logoinnochi.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Inochi International Logo" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(1375%) hue-rotate(201deg) brightness(91%) contrast(101%)' }} />
          </div>
          <p className="company-description">
            Your trusted partner in global trade, specializing in premium quality Indian products.
            We ensure reliable and efficient delivery worldwide.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h3>Our Products</h3>
          <ul className="footer-links">
            <li><Link to="/products/spices">Spices</Link></li>
            <li><Link to="/products/herbs">Herbs</Link></li>
            <li><Link to="/products/seeds">Seeds</Link></li>
            <li><Link to="/products">All Products</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 123 456 7890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@inochiinternational.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Business Street, Mumbai, India</span>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Inochi International. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;