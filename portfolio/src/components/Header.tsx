import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
  const handleToggle = () => {
    toggleDarkMode(); // Call toggleDarkMode when the switch is toggled
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle"
          checked={darkMode} // Use darkMode prop to set the initial checked state
          onChange={handleToggle} // Call handleToggle when the switch is toggled
        />
        <label htmlFor="toggle">
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} className="moon-icon" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="sun-icon" />
          )}
        </label>
      </div>
    </header>
  );
};

export default Header;
