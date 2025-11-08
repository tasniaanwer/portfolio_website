import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Champion",
      organization: "Whiskers-n-Co",
      event: "IUT Coderush 3.0 (Infinity Stage Project)",
      year: "2024",
      type: "competition"
    },
    {
      title: "Best Project (1st)",
      organization: "Ashroy-e",
      event: "IUT Coderush 3.0 Showcase",
      year: "2024",
      type: "competition"
    },
    {
      title: "Finalist",
      organization: "Car Selling System",
      event: "DevOps Hackathon, IUT National ICT Fest 2024",
      year: "2024",
      type: "competition"
    },
    {
      title: "Finalist",
      organization: "BioNet",
      event: "Blockchain Olympiad Bangladesh",
      year: "2024",
      type: "competition"
    },
    {
      title: "Participant",
      organization: "PhysixLab",
      event: "HackCSB 2024",
      year: "2024",
      type: "competition"
    },
    {
      title: "Volunteer",
      organization: "",
      event: "Nation ICT Fest 2024",
      year: "2024",
      type: "volunteer"
    }
  ];

  const certifications = [
    {
      title: "Cybersecurity & Information Security",
      organization: "GP Ltd and Saylor Academy",
      year: "2024",
      type: "certification"
    }
  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>

        <div className="achievements-container">
          <div className="achievements-section">
            <h3 className="subsection-title">Competition Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    {achievement.type === 'competition' ? (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.09 8.26L20.68 9.27L16.34 13.14L17.58 19.68L12 16.27L6.42 19.68L7.66 13.14L3.32 9.27L9.91 8.26L12 2Z" fill="currentColor"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    {achievement.organization && (
                      <p className="achievement-organization">{achievement.organization}</p>
                    )}
                    <p className="achievement-event">{achievement.event}</p>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="certification-content">
                    <h4 className="certification-title">{cert.title}</h4>
                    <p className="certification-organization">{cert.organization}</p>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;