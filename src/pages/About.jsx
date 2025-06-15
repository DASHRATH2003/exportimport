// src/pages/About.jsx
import React from 'react';
import './About.css';
import '../styles/animations.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Inochi International</h1>
        <p>Your trusted partner in global trade and premium quality products.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Inochi International has grown to become a leading name in the export-import industry. 
            We specialize in providing high-quality products from India to markets worldwide, ensuring reliability, 
            efficiency, and customer satisfaction.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect global markets with premium Indian products, fostering sustainable trade 
            relationships and delivering excellence in every transaction. We are committed to maintaining the highest 
            standards of quality and service.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where businesses can easily access the finest products from India, supported by 
            a seamless and reliable supply chain. We aim to be the bridge that brings the best of India to the world.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals dedicated to ensuring the success of our clients. 
            With expertise in international trade, logistics, and customer service, we are equipped to meet 
            the diverse needs of our global clientele.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;