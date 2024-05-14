import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile-image.jpeg'; // Make sure to have an image in the correct path

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <section className={`home-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="introduction">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="intro-text">
          <h1>Hello, I'm Jasmine Zheng</h1>
          <p>Welcome to my portfolio website. I am a Full Stack Developer with a passion for creating beautiful and functional web applications. Stay tuned for more updates!</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
export {};
