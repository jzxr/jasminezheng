import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import logoLight from '../images/jasmine-zheng-web-light.png';
import logoDark from '../images/jasmine-zheng-web-dark.png';
import logoMobileLight from '../images/jasmine-zheng-mobile-light.png';
import logoMobileDark from '../images/jasmine-zheng-mobile-dark.png';

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
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
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/projects">Projects</Link></li>
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
