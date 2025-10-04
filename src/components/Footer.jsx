import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">GrowTech</h3>
            <p className="footer-description">
              Empowering individuals with modern digital skills for a successful future in technology.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>bobwandati4@gmail.com</p>
              <p>+254 75828 4534</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 GrowTech Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;