// src/components/Projects/ProjectStack.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectStack = ({ projects, selectedProjectId, onProjectSelect }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-5 border border-[#333] shadow-xl">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-accent/20 rounded-full mr-2">
          <span className="w-3 h-3 bg-accent rounded-full"></span>
        </div>
        Project Stack
      </h2>
      
      <div className="relative h-[400px] mb-6 overflow-hidden">
        {/* Stack container */}
        <div className="absolute bottom-0 left-0 right-0 space-y-3 max-h-full overflow-y-auto py-2 px-1">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
                className={`
                  p-4 rounded-md cursor-pointer shadow-md
                  border-l-4 ${selectedProjectId === project.id ? 'border-accent bg-[#2d2d2d]' : 'border-[#333] bg-[#252525]'}
                  hover:border-accent hover:bg-[#2d2d2d] transition-all duration-300
                  transform hover:-translate-y-1 hover:shadow-lg
                `}
                onClick={() => onProjectSelect(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  position: 'relative',
                  zIndex: projects.length - index,
                  boxShadow: `0 ${index * 2}px ${index * 3}px rgba(0, 0, 0, 0.1)`,
                  transform: `scale(${1 - index * 0.03}) translateY(${index * 4}px)`
                }}
              >
                <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                <p className="text-text-secondary text-sm line-clamp-2">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-[#1a1a1a] px-2 py-1 rounded-full border border-[#333] text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-[#1a1a1a] px-2 py-1 rounded-full border border-[#333]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Stack operations */}
      <div className="flex space-x-4">
        <motion.button 
          className="flex-1 bg-[#252525] border border-[#333] text-text-primary py-3 px-4 rounded-md hover:bg-accent hover:text-white transition-colors shadow-md font-medium"
          onClick={() => onProjectSelect('push')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Push
          </span>
        </motion.button>
        <motion.button 
          className="flex-1 bg-[#252525] border border-[#333] text-text-primary py-3 px-4 rounded-md hover:bg-accent hover:text-white transition-colors shadow-md font-medium"
          onClick={() => onProjectSelect('pop')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Pop
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectStack;