// src/components/Projects/ProjectDetails.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ProjectDetails = ({ project, isMemoryViewActive }) => {
  const { isDarkTheme } = useTheme();

  // If no project is selected, show empty state
  if (!project) {
    return (
      <div className={isDarkTheme 
        ? "flex flex-col items-center justify-center py-16 text-center"
        : "project-empty"
      }>
        {isDarkTheme ? (
          <>
            <div className="text-green-400/50 text-2xl mb-2">NO PROJECT SELECTED</div>
            <div className="text-green-400/30">Select a project from the stack to view details</div>
          </>
        ) : (
          <>
            <svg className="project-empty-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="project-empty-title">No Project Selected</h3>
            <p className="project-empty-description">
              Select a project from the stack to view its details. You'll be able to see the description,
              technologies used, and more.
            </p>
          </>
        )}
      </div>
    );
  }

  // Memory dump visualization for dark mode
  const MemoryDump = () => {
    return (
      <div className="mt-8 border-t border-green-400/20 pt-4">
        <div className="text-green-400/70 font-bold text-sm mb-2">MEMORY DUMP:</div>
        <div className="font-mono text-xs overflow-x-auto bg-black/50 p-3 border border-green-400/10">
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex">
              <div className="text-green-400/50 mr-4 w-20">
                {(parseInt(project.memoryAddr.substring(2), 16) + rowIndex * 16).toString(16).toUpperCase().padStart(8, '0')}:
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
    );
  };

  return (
    <div className={`transition-opacity duration-300 ${isMemoryViewActive ? 'opacity-0' : 'opacity-100'}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Light mode project header */}
          {!isDarkTheme && (
            <div className="project-header">
              <div className="project-memory-address">{project.memoryAddr}</div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Dark mode header */}
          {isDarkTheme && (
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-green-400 font-bold text-xl">{project.title}</h3>
              <div className="text-green-400/50 text-xs font-mono border border-green-400/30 px-2 py-1">
                {project.memoryAddr}
              </div>
            </div>
          )}

          {/* Project content */}
          <div className={isDarkTheme ? "" : "project-content"}>
            {/* Description section */}
            <div className={isDarkTheme ? "mb-6" : "project-section"}>
              <div className={isDarkTheme 
                ? "text-green-400/70 font-bold text-sm mb-2"
                : "project-section-title"
              }>
                {isDarkTheme ? 'DESCRIPTION:' : 'Description'}
              </div>
              <p className={isDarkTheme 
                ? "text-green-400 border-l-2 border-green-400/30 pl-3"
                : "project-description"
              }>
                {project.description}
              </p>
            </div>

            {/* Technologies section - Only shown in dark mode */}
            {isDarkTheme && (
              <div className="mb-6">
                <div className="text-green-400/70 font-bold text-sm mb-2">TECHNOLOGIES:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links section */}
            <div className={isDarkTheme ? "mb-6" : "project-section"}>
              <div className={isDarkTheme 
                ? "text-green-400/70 font-bold text-sm mb-2"
                : "project-section-title"
              }>
                {isDarkTheme ? 'LINKS:' : 'Links'}
              </div>
              
              {isDarkTheme ? (
                <a 
                  href={project.github || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-400 hover:underline flex items-center"
                >
                  <span className="mr-2">&#60;/&#62;</span> View Source Code
                </a>
              ) : (
                <div className="project-links">
                  <a 
                    href={project.github || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-button project-link-primary"
                  >
                    <svg 
                      className="project-link-icon w-4 h-4" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Source Code
                  </a>
                  
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-button project-link-secondary"
                  >
                    <svg 
                      className="project-link-icon w-4 h-4" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              )}
            </div>

            {/* Memory dump for dark mode */}
            {isDarkTheme && <MemoryDump />}

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;