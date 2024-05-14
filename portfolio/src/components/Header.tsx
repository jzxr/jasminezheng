import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import logoLight from '../images/jasmine-zheng-logo-light.png';
import logoDark from '../images/jasmine-zheng-logo-dark.png';

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
              <img src={darkMode ? logoDark : logoLight} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="nav-item"><Link to="/home">Home</Link></li>
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
