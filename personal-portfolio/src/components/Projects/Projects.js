// src/components/Projects/Projects.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import VisualStack from './VisualStack';
import Console from './Console';

const Projects = () => {
  // Add memory addresses to your project data
  const projectsData = [
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
  ];

  // State for projects - this allows adding/removing projects
  const [projects, setProjects] = useState([...projectsData]);
  
  // State for selected project
  const [selectedProject, setSelectedProject] = useState(null);
  
  // State for memory view animation
  const [isMemoryViewActive, setIsMemoryViewActive] = useState(false);
  
  // State for console output
  const [consoleOutput, setConsoleOutput] = useState([
    { text: '> Loading project data...', type: 'command' },
    { text: '> Projects initialized successfully', type: 'success' },
    { text: '> Select a project from the stack to view details', type: 'command' }
  ]);
  
  const { isDarkTheme } = useTheme();

  // Handle project selection
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    
    // Add memory scan effect for dark theme
    if (isDarkTheme) {
      setIsMemoryViewActive(true);
      
      // Add to console output for project selection
      setConsoleOutput(prev => [
        ...prev,
        { text: `> Accessing memory at ${project.memoryAddr}...`, type: 'command' },
        { text: '> Reading project data...', type: 'command' },
        { text: `> Project: ${project.title}`, type: 'success' },
        { text: `> Heap allocation: ${Math.floor(Math.random() * 1000) + 500}KB`, type: 'command' }
      ]);
      
      // Reset memory view animation after delay
      setTimeout(() => {
        setIsMemoryViewActive(false);
      }, 2000);
    }
  };
  
  // Handle adding a new project (push)
  const handlePushProject = () => {
    const name = prompt('Enter project name:');
    if (name) {
      const newProject = {
        id: `project${Date.now()}`,
        title: name,
        description: 'New project description',
        technologies: ['Technology 1', 'Technology 2'],
        github: 'https://github.com/yourusername/newproject',
        memoryAddr: `0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(8, '0')}`
      };
      
      // Add to projects array
      setProjects(prev => [newProject, ...prev]);
      
      // Select the new project
      handleProjectSelect(newProject);
      
      // Add to console output
      setConsoleOutput(prev => [
        ...prev,
        { text: `> Project "${name}" pushed to stack`, type: 'success' }
      ]);
    }
  };
  
  // Handle removing a project (pop)
  const handlePopProject = () => {
    if (projects.length > 0) {
      const [poppedProject, ...remainingProjects] = projects;
      
      // Update projects state
      setProjects(remainingProjects);
      
      // Clear selection if the popped project was selected
      if (selectedProject && selectedProject.id === poppedProject.id) {
        setSelectedProject(null);
      }
      
      // Add to console output
      setConsoleOutput(prev => [
        ...prev,
        { text: `> Project "${poppedProject.title}" popped from stack`, type: 'warning' }
      ]);
    }
  };
  
  // Memory scan effect component
  const MemoryScanEffect = () => {
    return (
      <AnimatePresence>
        {isMemoryViewActive && (
          <motion.div 
            className="fixed inset-0 bg-green-400/5 pointer-events-none z-20"
            initial={{ top: '0%', height: '0%' }}
            animate={{ 
              top: ['0%', '100%'],
              height: ['0%', '5%', '0%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.9, 1],
              ease: "easeInOut"
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    );
  };

  // Binary decoration component for memory view
  const BinaryBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="text-green-400 font-mono text-xs" style={{ 
            position: 'absolute', 
            top: `${i * 10}%`, 
            left: `${Math.random() * 100}%` 
          }}>
            {Array.from({ length: 8 }).map((_, j) => (
              <span key={j}>{Math.round(Math.random())}</span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Memory scan effect (only in dark mode) */}
      {isDarkTheme && <MemoryScanEffect />}
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* PROJECT STACK - left column */}
        <div className="lg:col-span-5">
          <h2 className="text-green-400 text-lg mb-4 flex items-center">
            <span className="mr-2">&#123;</span>PROJECT STACK<span className="ml-2">&#125;</span>
          </h2>
          
          <VisualStack 
            projects={projects} 
            selectedProject={selectedProject} 
            onProjectSelect={handleProjectSelect} 
          />
        </div>
        
        {/* CONSOLE - right column */}
        <div className="lg:col-span-7">
          <h2 className="text-green-400 text-lg mb-4 flex items-center">
            <span className="mr-2">&#123;</span>CONSOLE<span className="ml-2">&#125;</span>
          </h2>
          
          <Console 
            consoleOutput={consoleOutput} 
            selectedProject={selectedProject} 
          />
        </div>
      </motion.div>
      
      {/* PROJECT DETAILS */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-green-400 text-lg mb-4 flex items-center">
          <span className="mr-2">&#123;</span>PROJECT DETAILS<span className="ml-2">&#125;</span>
        </h2>
        
        <div className="border border-green-500/30 p-6 bg-black relative overflow-hidden">
          {isDarkTheme && <BinaryBackground />}
          
          {/* Memory selection animation */}
          <AnimatePresence>
            {isMemoryViewActive && isDarkTheme && selectedProject && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="text-4xl text-green-400 font-mono font-bold mb-2">
                    MEMORY ACCESS
                  </div>
                  <div className="text-xl text-green-400/70 font-mono">
                    {selectedProject.memoryAddr} → {selectedProject.title}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Project Details Content */}
          <div className={`transition-opacity duration-300 ${isMemoryViewActive ? 'opacity-0' : 'opacity-100'}`}>
            {selectedProject ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={selectedProject.id}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-green-400 font-bold text-xl">{selectedProject.title}</h3>
                  <div className="text-green-400/50 text-xs font-mono border border-green-400/30 px-2 py-1">
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
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-1 text-sm"
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
                      <span className="mr-2">&#60;/&#62;</span> View Source Code
                    </a>
                  </div>
                </div>
                
                {/* Memory hexdump visualization - only in dark theme */}
                {isDarkTheme && (
                  <div className="mt-8 border-t border-green-400/20 pt-4">
                    <div className="text-green-400/70 font-bold text-sm mb-2">MEMORY DUMP:</div>
                    <div className="font-mono text-xs overflow-x-auto bg-black/50 p-3 border border-green-400/10">
                      {Array.from({ length: 4 }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex">
                          <div className="text-green-400/50 mr-4 w-20">
                            {(parseInt(selectedProject.memoryAddr.substring(2), 16) + rowIndex * 16).toString(16).toUpperCase().padStart(8, '0')}:
                          </div>
                          <div className="text-green-400/80 space-x-2">
                            {Array.from({ length: 16 }).map((_, colIndex) => (
                              <span key={colIndex}>
                                {Math.floor(Math.random() * 256).toString(16).padStart(2, '0')}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="text-green-400/50 text-center py-10 border border-green-400/10 bg-black/30">
                <div className="text-xl mb-2">NO PROJECT SELECTED</div>
                <div className="text-sm">Select a project from the stack to view details</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;