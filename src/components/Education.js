import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: "Islamic University of Technology",
      degree: "Bachelor of Science in Software Engineering",
      period: "2022 - Present",
      location: "Gazipur, Bangladesh",
      status: "6th Semester"
    },
    {
      institution: "Govt. M. M. City College, Khulna",
      degree: "Higher Secondary Certificate",
      period: "2019 - 2021",
      location: "Khulna, Bangladesh",
      gpa: "GPA: 5.00",
      group: "Science"
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <div className="icon-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M12 5L19.5 9L12 13L4.5 9L12 5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <div className="education-details">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-location">{edu.location}</span>
                </div>
                {edu.status && <span className="education-status">{edu.status}</span>}
                {edu.gpa && <span className="education-gpa">{edu.gpa}</span>}
                {edu.group && <span className="education-group">{edu.group}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;