// src/components/Projects/Projects.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  // Project data with memory addresses
  const [projects] = useState([
    {
      id: 'project1',
      title: 'Personal Portfolio',
      description: 'A terminal-style portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'TailwindCSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio',
      memoryAddr: '0x7FF1A32B'
    },
    {
      id: 'project2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      memoryAddr: '0x7FF1B44C'
    },
    {
      id: 'project3',
      title: 'Task Manager',
      description: 'A productivity application for organizing tasks with a drag-and-drop interface.',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/yourusername/taskmanager',
      memoryAddr: '0x7FF1C56D'
    }
  ]);

  // Refs
  const consoleRef = useRef(null);

  // State for selected project and animation
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMemoryViewActive, setIsMemoryViewActive] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState([
    '> Loading project data...',
    '> Projects initialized successfully',
    '> Select a project from the stack to view details'
  ]);

  // Scroll console to bottom when messages are added
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [consoleOutput]);

  // Handle project selection
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsMemoryViewActive(true);
    
    // Update console output
    setConsoleOutput(prev => [
      ...prev,
      `> Accessing memory at ${project.memoryAddr}...`,
      `> Reading project data...`,
      `> Project: ${project.title}`,
      `> Heap allocation: ${Math.floor(Math.random() * 1000) + 500}KB`
    ]);
    
    // Reset memory view animation after delay
    setTimeout(() => {
      setIsMemoryViewActive(false);
    }, 2000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* PROJECT STACK */}
        <div className="lg:col-span-5">
          <h2 className="text-green-400 text-lg mb-4">{'{PROJECT STACK}'}</h2>
          
          <div className="border border-green-400/20 relative h-96 bg-black overflow-hidden">
            {/* Stack header */}
            <div className="border-b border-green-400/20 p-2 pl-4 bg-black/40">
              <div className="text-green-400 font-bold">STACK</div>
            </div>
            
            {/* Project stack items */}
            <div className="space-y-0">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`
                    border-b border-green-400/20 bg-black cursor-pointer transition-colors
                    ${selectedProject?.id === project.id ? 'bg-green-900/10' : ''}
                    hover:bg-green-900/10
                  `}
                  onClick={() => handleProjectSelect(project)}
                >
                  <div className="p-4 pr-28 relative">
                    <div className="text-green-400 font-bold mb-1">{project.title}</div>
                    <div className="text-green-400/70 text-sm">{project.technologies.join(', ')}</div>
                    <div className="absolute top-0 right-0 p-4 text-green-400/40 text-xs">
                      {project.memoryAddr}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CONSOLE */}
        <div className="lg:col-span-7">
          <h2 className="text-green-400 text-lg mb-4">{'{CONSOLE}'}</h2>
          
          <div 
            ref={consoleRef}
            className="border border-green-400/20 p-4 h-96 overflow-y-auto bg-black font-mono relative"
          >
            {/* Console content */}
            <div className="space-y-1">
              {consoleOutput.map((line, index) => (
                <div key={index} className="text-green-400">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* PROJECT DETAILS */}
      <div className="mt-12">
        <h2 className="text-green-400 text-lg mb-4">{'{PROJECT DETAILS}'}</h2>
        
        <div className="border border-green-400/20 p-6 bg-black relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {isMemoryViewActive ? (
              // Memory access in progress
              <motion.div 
                key="memory-access"
                className="absolute inset-0 flex items-center justify-center z-10 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <div className="text-4xl text-green-400 font-bold mb-2">MEMORY ACCESS</div>
                  <div className="text-xl text-green-400/70 mb-4">
                    {selectedProject?.memoryAddr} → {selectedProject?.title}
                  </div>
                  <div className="text-green-400/50 text-sm mt-4 h-1 w-48 mx-auto bg-black overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-green-400/70"
                      style={{
                        width: '100%',
                        animation: 'scanProgress 2s linear'
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ) : selectedProject ? (
              // Project details
              <motion.div
                key="project-details" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-green-400 font-bold text-xl">{selectedProject.title}</h3>
                  <div className="text-green-400/50 text-xs border border-green-400/30 px-2 py-1">
                    {selectedProject.memoryAddr}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-green-400/70 font-bold text-sm mb-2">DESCRIPTION:</div>
                  <p className="text-green-400 border-l-2 border-green-400/30 pl-3">{selectedProject.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-green-400/70 font-bold text-sm mb-2">TECHNOLOGIES:</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-green-400 bg-black border border-green-400/30 px-2 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-green-400/70 font-bold text-sm mb-2">LINKS:</div>
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-400 hover:underline flex items-center"
                    >
                      <span className="mr-2">&#60;/&#62;</span>View Source Code
                    </a>
                  </div>
                </div>
                
                {/* Memory dump visualization */}
                <div className="mt-8 border-t border-green-400/20 pt-4">
                  <div className="text-green-400/70 font-bold text-sm mb-2">MEMORY DUMP:</div>
                  <div className="font-mono text-xs overflow-x-auto bg-black p-3 border border-green-400/10">
                    {[...Array(4)].map((_, rowIndex) => (
                      <div key={rowIndex} className="flex">
                        <div className="text-green-400/50 mr-4 w-20">
                          {(parseInt(selectedProject.memoryAddr.substring(2), 16) + rowIndex * 16).toString(16).toUpperCase().padStart(8, '0')}:
                        </div>
                        <div className="text-green-400/80 space-x-2">
                          {[...Array(16)].map((_, colIndex) => (
                            <span key={colIndex}>
                              {Math.floor(Math.random() * 256).toString(16).padStart(2, '0')}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              // No project selected
              <motion.div
                key="no-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16"
              >
                <div className="text-green-400/50 text-2xl mb-2">NO PROJECT SELECTED</div>
                <div className="text-green-400/30">Select a project from the stack to view details</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Add CSS for memory scan animation */}
      <style jsx>{`
        @keyframes scanProgress {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Projects;