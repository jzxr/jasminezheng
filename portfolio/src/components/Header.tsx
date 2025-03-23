import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import logoLight from '../images/jasmine-zheng-web-light.png';
import logoDark from '../images/jasmine-zheng-web-dark.png';
import logoMobileLight from '../images/jasmine-zheng-mobile-light.png';
import logoMobileDark from '../images/jasmine-zheng-mobile-dark.png';
import { useScrollContext } from './context/ScrollContext';

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    setTriggerScrollToTimeline,
    setTriggerScrollToProjects,
    setTriggerScrollToHome
  } = useScrollContext();

  const handleScroll = (target: 'home' | 'projects' | 'timeline') => {
    const setScrollTarget = {
      home: setTriggerScrollToHome,
      projects: setTriggerScrollToProjects,
      timeline: setTriggerScrollToTimeline,
    }[target];

    setScrollTarget(true);

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const element = document.getElementById(target);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <picture>
                <source media="(max-width: 600px)" srcSet={darkMode ? logoMobileDark : logoMobileLight} />
                <img src={darkMode ? logoDark : logoLight} alt="Logo" className="logo" />
              </picture>
            </Link>
          </li>

          <li className="nav-item">
            <button className="nav-link" onClick={() => handleScroll('home')}>Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleScroll('projects')}>Projects</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleScroll('timeline')}>Timeline</button>
          </li>
        </ul>
      </nav>

      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle"
          checked={darkMode}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className="toggle-label">
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="icon" />
          )}
        </label>
      </div>
    </header>
  );
};

export default Header;
