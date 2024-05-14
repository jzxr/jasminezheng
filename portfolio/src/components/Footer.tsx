import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://github.com/jzxr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <a href="https://www.linkedin.com/in/jasmine-zheng-082b95151/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a href="https://www.instagram.com/jasmine_codes/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
      </div>
      <p>© 2024 Jasmine Zheng</p>
    </footer>
  );
};

export default Footer;
