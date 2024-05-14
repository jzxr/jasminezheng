import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Link to="/projects">Go to Projects</Link>
    </div>
  );
};

export default Home;
export {};
