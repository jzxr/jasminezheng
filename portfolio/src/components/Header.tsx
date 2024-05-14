import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode}>Toggle Dark/Light Mode</button>
    </header>
  );
};

export default Header;
export {};
