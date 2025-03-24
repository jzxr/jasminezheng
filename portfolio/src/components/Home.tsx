import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile-image.webp';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`home-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="introduction">
        <img loading="lazy" src={profileImage} alt="Profile" className="profile-image" />
        <div className="intro-text">
          <h1>Hello, I'm Jasmine Zheng</h1>
          <p>I am a Full Stack Developer in Singapore.</p>
          <div className="button-group">
            <a href="/resume.pdf" download className="btn">
              Download
            </a>
            <a href="mailto:jasminezxr@gmail.com?subject=Hiring Inquiry" className="btn btn-outline">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
