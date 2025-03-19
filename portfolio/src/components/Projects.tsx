import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

interface HomeProps {
  darkMode: boolean;
}

const projects = [
  { 
    id: 1, 
    title: "Smart Home Automation System", 
    description: `This <strong>smart home project</strong> integrates various sensors and IoT components for enhanced automation and air quality monitoring. The <strong>TMP102 temperature sensor</strong> controls a <strong>cooling fan</strong>, while the <strong>DHT22 temperature & humidity sensor</strong> displays real-time data on an <strong>LCD screen</strong>. A <strong>PM2.5 dust sensor</strong> continuously monitors air quality, triggering actions via a <strong>4-channel relay module</strong>. Smart lighting is implemented using an <strong>LED strip</strong>, all interconnected via <strong>MQTT</strong> for seamless communication. The system is accessible through a <strong>mobile web app</strong>, allowing remote monitoring and control of the smart home environment. 🚀🏠💡`, 
    techStack: ["Python", "MQTT", "CSS"],
    link: "/projects/smart-home",
    date: "2019-01-22"
  },{ 
    id: 2, 
    title: "Hawker Centre Cashless Payment", 
    description: `Our team of <strong>Diploma in Business Applications</strong> students presented the <strong>Hawker Centre Cashless Payment</strong> solution at the <strong>Singapore Fintech Festival</strong>. Instead of scanning QR codes, this innovative solution uses <strong>image recognition</strong> to identify merchants and predict the transaction amount for a seamless <strong>one-step scanning and payment process</strong>. Users can then confirm or adjust the price before finalizing payment. 💳🏆`, 
    techStack: ["Image Regconition", "React"],
    link: "/projects/polyfintech-2018",
    date: "2018-07-01" 
  }];

  const sortedProjects = projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const Projects: React.FC <HomeProps> = ({ darkMode }) => {
    return (
      <section className="projects-section">
        <div className="projects-grid">
          {sortedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              <div className="tech-stack-container">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-stack">{tech}</span>
                ))}
              </div>
  
              <Link to={project.link} className="read-more">
                <span>Read More</span>
                <FontAwesomeIcon icon={faChevronRight} className="read-more-icon" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;