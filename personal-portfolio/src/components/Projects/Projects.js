// src/components/Projects/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  // Your project data
  const projects = [
    {
      id: 'project1',
      title: 'Personal Portfolio',
      description: 'A terminal-style portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'TailwindCSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      id: 'project2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 'project3',
      title: 'Task Manager',
      description: 'A productivity application for organizing tasks with a drag-and-drop interface.',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/yourusername/taskmanager'
    }
  ];

  // State for selected project
  const [selectedProject, setSelectedProject] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState([
    'website built with React and Tailwind CSS.',
    '> Technologies: React, TailwindCSS, JavaScript',
    '> GitHub: https://github.com/yourusername/portfolio',
    '> Selected project: Personal Portfolio',
    '> Description: A terminal-style portfolio website built with React and Tailwind CSS.',
    '> Technologies: React, TailwindCSS, JavaScript',
    '> GitHub: https://github.com/yourusername/portfolio',
    '_'
  ]);

  // Animation effect for clicking on a project
  const [animatingProject, setAnimatingProject] = useState(null);

  // Handle project selection
  const handleProjectSelect = (project) => {
    setAnimatingProject(project.id);
    setTimeout(() => setAnimatingProject(null), 300);
    
    setSelectedProject(project);
    setConsoleOutput([
      ...consoleOutput.slice(0, -1), // Remove the cursor
      `> Selected project: ${project.title}`,
      `> Description: ${project.description}`,
      `> Technologies: ${project.technologies.join(', ')}`,
      `> GitHub: ${project.github}`,
      '_' // Add cursor back
    ]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* PROJECT STACK - left column, spans 5/12 */}
        <div className="lg:col-span-5">
          <h2 className="text-green-400 text-lg mb-4">PROJECT STACK</h2>
          
          <div className="border border-green-900/40 relative h-96 bg-black/40">
            {/* Memory addresses on the sides */}
            <div className="absolute left-0 top-1 text-green-400/70 text-xs">0x0F</div>
            <div className="absolute left-0 bottom-1 text-green-400/70 text-xs">0x00</div>
            
            {/* Projects text on the right side */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center">
              <div className="transform rotate-90 origin-center text-green-400/70 uppercase tracking-widest text-sm">
                Projects
              </div>
            </div>
            
            {/* Stack visualization */}
            <div className="absolute left-10 right-10 bottom-4 flex flex-col-reverse space-y-reverse space-y-2">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`
                    border border-green-500/40 bg-black p-4 cursor-pointer transition-transform duration-300
                    ${selectedProject?.id === project.id ? 'border-green-500' : ''}
                    ${animatingProject === project.id ? 'transform scale-105' : ''}
                  `}
                  onClick={() => handleProjectSelect(project)}
                >
                  <div className="text-green-400 font-bold mb-1">{project.title}</div>
                  <div className="text-green-400/70 text-sm">{project.technologies.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CONSOLE - right column, spans 7/12 */}
        <div className="lg:col-span-7">
          <h2 className="text-green-400 text-lg mb-4">CONSOLE</h2>
          
          <div className="border border-green-900/40 p-4 h-96 overflow-y-auto bg-black/40 font-mono relative">
            <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-green-400/5 to-transparent"></div>
            {consoleOutput.map((line, index) => (
              <div key={index} className={`mb-1 ${line === '_' ? 'animate-pulse' : ''}`}>
                {line === '_' ? (
                  <span className="text-green-400 animate-pulse">_</span>
                ) : line.startsWith('>') ? (
                  <span className="text-green-400">{line}</span>
                ) : line.includes('https://github.com') ? (
                  <a href={line} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                    {line}
                  </a>
                ) : (
                  <span className="text-green-400">{line}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* PROJECT DETAILS */}
      <div className="mt-12">
        <h2 className="text-green-400 text-lg mb-4">PROJECT DETAILS</h2>
        
        <div className="border border-green-900/40 p-6 bg-black/40">
          {selectedProject ? (
            <>
              <h3 className="text-green-400 font-bold text-xl mb-4">{selectedProject.title}</h3>
              <p className="text-green-400 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-green-400 font-bold mb-2">Technologies:</h4>
                <p className="text-green-400">{selectedProject.technologies.join(', ')}</p>
              </div>
              
              <div>
                <h4 className="text-green-400 font-bold mb-2">GitHub:</h4>
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-400 hover:underline"
                >
                  {selectedProject.github}
                </a>
              </div>
            </>
          ) : (
            <p className="text-green-400/50 text-center py-10">Select a project from the stack to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;