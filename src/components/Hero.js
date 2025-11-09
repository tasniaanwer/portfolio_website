import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-greeting">
          Hi, I am
        </div>
        <h1 className="hero-title">
          <span className="highlight">Tasnia Anower Medha</span>
        </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <div className="hero-badges">
            <div className="internship-badge">
              <span className="company-name">Battery Low Interactive</span>
              <span className="internship-role">Web Developer Intern</span>
            </div>
            <div className="education-badge">
              <span className="university-name">Islamic University of Technology</span>
              <span className="education-info">B.Sc Software Engineering </span>
            </div>
          </div>
          <p className="hero-description">
            I'm a Software Engineering student passionate about blockchain,
            software architecture, and user-centered product design.
            I love building impactful web and decentralized applications that merge
             innovation with real-world purpose.

          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" className="btn btn-gold btn-hero" download="Tasnia_Anower_Medha_Resume.pdf">
              Download Resume
            </a>
          </div>
          </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img
              src="/images/profile-image.jpg"
              alt="Tasnia Anower Medha - Professional Headshot"
              className="avatar-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;