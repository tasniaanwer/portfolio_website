import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              Building amazing web experiences with modern technologies and 
              creative solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <span>🐙</span> GitHub
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span> LinkedIn
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span> Twitter
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span>📧</span> Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Built with React and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;