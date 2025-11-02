import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title ${titleVisible ? 'animate-in' : ''}`}
        >
          About Me
        </h2>
        <div className="about-content">
          <div
            ref={contentRef}
            className={`about-text ${contentVisible ? 'animate-in' : ''}`}
          >
            <p>
              I'm a passionate full-stack developer with a love for creating
              innovative web solutions. With experience in modern technologies
              like React, Node.js, and cloud platforms, I enjoy turning ideas
              into reality through clean, efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
              I believe in continuous learning and staying up-to-date with the
              latest industry trends.
            </p>
            <p>
              I'm always excited to take on new challenges and collaborate
              with teams to build amazing products that make a difference.
            </p>
          </div>
          <div
            ref={statsRef}
            className={`about-stats ${statsVisible ? 'animate-in' : ''}`}
          >
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;