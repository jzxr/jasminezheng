import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css';
import { useScrollContext } from './context/ScrollContext';
import { projects } from '../data/projectsData';

interface HomeProps {
  darkMode: boolean;
}

const sortedProjects = projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Projects: React.FC<HomeProps> = ({ darkMode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { triggerScrollToProjects, setTriggerScrollToProjects } = useScrollContext();

  useEffect(() => {
    if (triggerScrollToProjects && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setTriggerScrollToProjects(false);
      }, 100);
    }
  }, [setTriggerScrollToProjects, triggerScrollToProjects]);

  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="projects-grid">
        {sortedProjects.map((project) => {
          const formattedDate = new Date(project.date).toLocaleDateString(undefined, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          });

          return (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-date">{formattedDate}</p>
              <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              <div className="tech-stack-container">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-stack">{tech}</span>
                ))}
              </div>
             <div className="project-actions">
              <div className="project-links">
              <div className="tooltip-wrapper">
                {project.githubUrl && (<a
                    href={project.githubUrl}
                    className="btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                <span className="tooltip-text">View on GitHub</span>
              </div>

              <div className="tooltip-wrapper">
              {project.youtubeUrl && (<a
                  href={project.youtubeUrl}
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              )}
                <span className="tooltip-text">Watch on YouTube</span>
              </div>

              </div>

              <Link to={project.link} className="read-more">
                <span>Read More</span>
                <FontAwesomeIcon icon={faChevronRight} className="read-more-icon" />
              </Link>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
