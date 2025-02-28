// src/components/Home/Home.jsx
import React from 'react';
import Skill from '../Skill/Skill';
import About from '../About/About';

const Home = () => {
  return (
    <div>
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Hello, I'm RuiCao
        </h1>
        <p className="text-lg text-green-300 mb-6">
          I'm a software engineer passionate about creating intuitive digital experiences.
        </p>
      </section>
      
      {/* About Me Section */}
      <About />
      
      {/* Skills Section */}
      <Skill />
    </div>
  );
};

export default Home;