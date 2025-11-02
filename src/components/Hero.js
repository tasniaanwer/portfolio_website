import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Tasnia Anower Medha</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I’m a Software Engineering student passionate about blockchain, 
            software architecture, and user-centered product design. 
            I love building impactful web and decentralized applications that merge
             innovation with real-world purpose.
             
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-black btn-hero">View My Work</a>
            <a href="#contact" className="btn btn-black-outline btn-hero">Get In Touch</a>
            <a href="/resume.pdf" className="btn btn-gold btn-hero" download="Tasnia_Anower_Medha_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img
              src="/profile-image.jpg"
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