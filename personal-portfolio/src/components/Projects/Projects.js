// src/components/Projects/Projects.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import VisualStack from './VisualStack';
import Console from './Console';
import ProjectDetails from './ProjectDetails';
import '../../styles/LightModeProjects.css'; // Import light mode styles

const Projects = () => {
  // Project data with memory addresses
  const projectsData = [
    {
      id: 'project1',
      title: 'Personal Portfolio',
      description: 'A terminal-style portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'TailwindCSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio',
      memoryAddr: '0x7FF1A32B',
      features: ['Responsive design', 'Dark/Light mode', 'Interactive elements'],
      status: 'Completed',
      startDate: 'January 2024',
      lastUpdate: 'March 2024'
    },
    {
      id: 'project2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      memoryAddr: '0x7FF1B44C',
      features: ['User authentication', 'Payment processing', 'Product management', 'Cart functionality'],
      status: 'In Progress',
      startDate: 'November 2023',
      lastUpdate: 'March 2024'
    },
    {
      id: 'project3',
      title: 'Task Manager',
      description: 'A productivity application for organizing tasks with a drag-and-drop interface.',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/yourusername/taskmanager',
      memoryAddr: '0x7FF1C56D',
      features: ['Drag and drop interface', 'Task categorization', 'Progress tracking'],
      status: 'Completed',
      startDate: 'October 2023',
      lastUpdate: 'December 2023'
    }
  ];
  
  // State for projects
  const [projects, setProjects] = useState(projectsData);
  
  // State for selected project
  const [selectedProject, setSelectedProject] = useState(null);
  
  // State for memory view animation
  const [isMemoryViewActive, setIsMemoryViewActive] = useState(false);
  
  // NEW: State to control when to show project details
  const [showProjectDetails, setShowProjectDetails] = useState(true);
  
  // State for console output
  const [consoleOutput, setConsoleOutput] = useState([
    { text: '> Loading project data...', type: 'command' },
    { text: '> Projects initialized successfully', type: 'success' },
    { text: '> Select a project from the stack to view details', type: 'command' }
  ]);
  
  const { isDarkTheme } = useTheme();

  // Handle project selection
  const handleProjectSelect = (project) => {
    // Hide project details first
    setShowProjectDetails(false);
    
    // Set the selected project
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
        // Show project details after animation completes
        setShowProjectDetails(true);
      }, 2000);
    } else {
      // Light mode console output
      setConsoleOutput(prev => [
        ...prev,
        { text: `> Loading project: ${project.title}`, type: 'command' },
        { text: `> Project loaded successfully`, type: 'success' }
      ]);
      
      // For light mode, show details after a shorter delay
      setTimeout(() => {
        setShowProjectDetails(true);
      }, 300);
    }
  };
  
  // Memory scan effect component for dark mode
  const MemoryScanEffect = () => {
    return (
      <AnimatePresence>
        {isMemoryViewActive && (
          <motion.div 
            className="fixed inset-0 bg-green-400/5 pointer-events-none z-20 memory-scan"
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

  // Binary decoration component for memory view (dark mode)
  const BinaryBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0 binary-bg">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="text-green-400 font-mono text-xs binary-text" style={{ 
            position: 'absolute', 
            top: `${i * 10}%`, 
            left: `${Math.random() * 100}%` 
          }}>
            {Array.from({ length: 8 }).map((_, j) => (
              <span key={j} className="memory-character" style={{ '--character-index': j }}>
                {Math.round(Math.random())}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={!isDarkTheme ? "projects-light-mode" : ""}>
      {/* Memory scan effect (only in dark mode) */}
      {isDarkTheme && <MemoryScanEffect />}
      
      {/* Page header - only for light mode */}
      {!isDarkTheme && (
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Projects</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl">
            Explore my latest work and side projects. Each project represents my skills and passion for creating
            elegant solutions to real-world problems.
          </p>
        </div>
      )}
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* PROJECT STACK - left column */}
        <div className="lg:col-span-5">
          <h2 className={isDarkTheme ? 'text-green-400 text-lg mb-4' : 'section-header'}>
            {isDarkTheme ? '{PROJECT STACK}' : 'Project Stack'}
          </h2>
          
          <VisualStack 
            projects={projects} 
            selectedProject={selectedProject} 
            onProjectSelect={handleProjectSelect} 
          />
        </div>
        
        {/* CONSOLE - right column */}
        <div className="lg:col-span-7">
          <h2 className={isDarkTheme ? 'text-green-400 text-lg mb-4' : 'section-header'}>
            {isDarkTheme ? '{CONSOLE}' : 'Console'}
          </h2>
          
          <Console 
            consoleOutput={consoleOutput} 
            selectedProject={selectedProject} 
          />
        </div>
      </div>
      
      {/* PROJECT DETAILS */}
      <div className="mt-12">
        <h2 className={isDarkTheme ? 'text-green-400 text-lg mb-4' : 'section-header'}>
          {isDarkTheme ? '{PROJECT DETAILS}' : 'Project Details'}
        </h2>
        
        {/* Project Details Container with different styles based on theme */}
        <div className={isDarkTheme 
          ? 'border border-green-400/20 p-6 bg-black relative min-h-[300px]'
          : 'project-details-container'
        }>
          {isDarkTheme && <BinaryBackground />}
          
          {/* Memory selection animation - Dark mode only */}
          <AnimatePresence>
            {isMemoryViewActive && isDarkTheme && selectedProject && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none memory-scan-overlay"
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
          
          {/* Project Details Component - Now conditionally rendered */}
          <AnimatePresence>
            {showProjectDetails && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectDetails 
                  project={selectedProject} 
                  isMemoryViewActive={isMemoryViewActive} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;