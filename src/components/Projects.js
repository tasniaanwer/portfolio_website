import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Whiskers-n-Co:Pet Adoption Website",
      description: "It eliminates fragmented workflows with features like AI-powered pet recognition, real-time communication and automated adoption tracking.",
      technologies: ["MERN", "Node.js", "MongoDB", "Express.js", "API"],
      image: "/images/whisker-n-co.png",
      githubLink: "https://github.com/nazifatasneem13/whiskersnco",
      liveLink: "https://wnco.onrender.com/"
    },
    {
      title: "Ashroy-e: Blockchain Disaster Relief",
      description: "Blockchain based decentralized disaster relief platform enabling transparent donations and campaigns.",
      technologies: ["MERN", "Ethereum", "Hardhat", "Web3.js","Sepolia"],
      image: "/images/Screenshot 2025-03-19 011731.png",
      githubLink: "https://github.com/yourusername/task-manager"
     
    },
    {
      title: "DaktarShab: Telemedicine Platform",
      description: "Privacy-focused telemedicine app with secure video consultations via WebRTC. Integrated appointment scheduling using Prisma ORM and NeonDB",
      technologies: ["Next.js", "Prisma", "NeonDB", "WebRTC","Tailwind"],
      image: "/images/Gemini_Generated_Image_duk68fduk68fduk6.png",
      githubLink: "https://github.com/tauhid-taaha/DaktarShab"
    },
      
    {
      title: " DocSchedule - Doctor Appointment Booking",
      description: "A comprehensive Full Stack Doctor Appointment Booking System built with the MERN Stack. Features real-time scheduling, secure payments, and administrative tools for healthcare management.",
      technologies:["MERN", "Node.js", "MongoDB", "Express.js", "API"],
      image: "/images/Screenshot 2025-11-02 173408.png",
      githubLink: "https://github.com/MinhajulBhuiyan/docschedule.git",
      liveLink: "https://docschedule.vercel.app/"
    },
    {
      title: "E-Commerce App",
      description: "Acomprehensive buy-and-sell platform with product catalog management, secure payment processing, and user reviews",
      technologies: ["MERN", "Node.js", "MongoDB", "Express.js"],
      image: "/images/eflyer.jpg",
      githubLink: "https://github.com/tasniaanwer/SPL-2-E-commerce-App-.git"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title ${titleVisible ? 'animate-in' : ''}`}
        >
          Featured Projects
        </h2>
        <div
          ref={gridRef}
          className={`projects-grid ${gridVisible ? 'animate-in' : ''}`}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="btn btn-black-outline btn-small">
                    GitHub
                  </a>
                  <a href={project.liveLink} className="btn btn-black btn-small">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;