import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";
import "./styles/Header.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; 
  });

  useEffect(() => {
    const logo = document.querySelector("link[rel='icon']");
    if (logo) {
      logo.setAttribute("href", darkMode ? "/logo-dark.png" : "/logo-light.png");
    }
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", darkMode.toString()); // 💾 Save user preference
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <Router>
        <DynamicTitle />
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/projects/:projectId" element={<ProjectDetails darkMode={darkMode} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

const DynamicTitle: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/": "Jasmine Zheng | Portfolio",
      "/projects": "Projects | Jasmine Zheng",
    };
    const title = pageTitles[location.pathname] || "Project Details | Jasmine Zheng";
    document.title = title;
  }, [location]);

  return null;
};

export default App;
