import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Timeline from "./ExperienceTimeline";

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  return (
    <>
      <Home darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Timeline darkMode={darkMode} />
    </>
  );
};

export default HomePage;
