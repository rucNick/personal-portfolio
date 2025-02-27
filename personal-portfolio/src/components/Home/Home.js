// src/components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-green-400 text-xl mb-4">Hey There, I'm YourName</h1>
      
      <p className="text-green-400 mb-6">
        Welcome to my corner of the internet. I am a software engineer, and I am creating this page
        to showcase my projects and skills.
      </p>
      
      <ol className="list-decimal ml-6 mb-8 text-green-400">
        <li className="mb-2">
          I'm a full-stack developer with experience in building web applications
          using modern technologies like React, Node.js, and more.
        </li>
        <li className="mb-2">
          I enjoy solving complex problems and creating intuitive, efficient user experiences.
        </li>
        <li className="mb-2">
          When I'm not coding, you can find me [your hobbies/interests].
        </li>
      </ol>
      
      <div className="mb-8">
        <h2 className="text-green-400 mb-3"># Skills</h2>
        <div className="flex flex-col space-y-1">
          <div className="text-green-400">JavaScript</div>
          <div className="text-green-400">React</div>
          <div className="text-green-400">Node.js</div>
          <div className="text-green-400">CSS/SCSS</div>
          <div className="text-green-400">Python</div>
          <div className="text-green-400">MongoDB</div>
          <div className="text-green-400">Express</div>
          <div className="text-green-400">Git</div>
        </div>
      </div>
      
      <div className="text-green-400 mb-4">
        <Link to="/projects" className="text-green-400 hover:underline">/projects</Link>
        <Link to="/resume" className="ml-4 text-green-400 hover:underline">/resume</Link>
      </div>
    </div>
  );
};

export default Home;