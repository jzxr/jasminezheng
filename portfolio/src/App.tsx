import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';
import './styles/Header.css';
import ProjectDetails from './components/ProjectDetails';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode}/>} />
          <Route path="/projects/:projectId" element={<ProjectDetails darkMode={darkMode}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
