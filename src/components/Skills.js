import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Neon", level: 80 }
      ]
    },
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Smart Contract Development", level: 75 },
        { name: "Blockchain Transactions", level: 70 },
        { name: "DApp Management", level: 65 },
        { name: "Web3.js", level: 70 }
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "GitHub", level: 95 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;