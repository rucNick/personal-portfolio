// src/components/Resume/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1 className="text-green-400 text-xl mb-8">Resume</h1>
      
      <div className="mb-8">
        <h2 className="text-green-400 mb-4"># Experience</h2>
        
        <div className="mb-6">
          <h3 className="text-green-400 font-bold">Senior Developer</h3>
          <div className="text-green-400">Tech Company Inc.</div>
          <div className="text-green-400 mb-3">Jan 2020 - Present</div>
          <ul className="list-none">
            <li className="text-green-400 mb-1">• Led development of a complex web application</li>
            <li className="text-green-400 mb-1">• Mentored junior developers</li>
            <li className="text-green-400 mb-1">• Implemented CI/CD pipelines</li>
            <li className="text-green-400 mb-1">• Collaborated with UX designers</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-green-400 font-bold">Web Developer</h3>
          <div className="text-green-400">Digital Solutions LLC</div>
          <div className="text-green-400 mb-3">Jun 2017 - Dec 2019</div>
          <ul className="list-none">
            <li className="text-green-400 mb-1">• Developed responsive websites for clients</li>
            <li className="text-green-400 mb-1">• Created and maintained RESTful APIs</li>
            <li className="text-green-400 mb-1">• Improved site performance and optimization</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-green-400 mb-4"># Education</h2>
        
        <div className="mb-4">
          <h3 className="text-green-400 font-bold">Master of Computer Science</h3>
          <div className="text-green-400">University Name</div>
          <div className="text-green-400">2015 - 2017</div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-green-400 font-bold">Bachelor of Science in Computer Science</h3>
          <div className="text-green-400">University Name</div>
          <div className="text-green-400">2011 - 2015</div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-green-400 mb-4"># Skills</h2>
        
        <div className="mb-6">
          <h3 className="text-green-400 font-bold">Frontend</h3>
          <ul className="list-none">
            <li className="text-green-400 mb-1">• HTML, CSS, JavaScript</li>
            <li className="text-green-400 mb-1">• React, Redux</li>
            <li className="text-green-400 mb-1">• Tailwind CSS, SCSS</li>
            <li className="text-green-400 mb-1">• Responsive Design</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-green-400 font-bold">Backend</h3>
          <ul className="list-none">
            <li className="text-green-400 mb-1">• Node.js, Express</li>
            <li className="text-green-400 mb-1">• MongoDB, SQL</li>
            <li className="text-green-400 mb-1">• RESTful APIs</li>
            <li className="text-green-400 mb-1">• Firebase</li>
          </ul>
        </div>
      </div>
      
      <div className="text-green-400">
        <a 
          href="/resume.pdf" 
          download 
          className="text-green-400 hover:underline"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default Resume;