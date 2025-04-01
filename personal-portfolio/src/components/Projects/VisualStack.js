// src/components/Projects/VisualStack.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const VisualStack = ({ projects, selectedProject, onProjectSelect }) => {
  const { isDarkTheme } = useTheme();
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gray-50 p-2 pl-4">
        <div className="text-gray-700 font-medium">Project Stack</div>
      </div>
      
      {/* Project items */}
      <div className="divide-y divide-gray-200">
        {projects.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No projects available
          </div>
        ) : (
          projects.map((project) => (
            <motion.div 
              key={project.id}
              className={`cursor-pointer transition-all
                ${selectedProject?.id === project.id 
                  ? 'bg-blue-50 border-l-4 border-blue-500' 
                  : 'border-l-4 border-transparent hover:bg-gray-50'
                }
              `}
              onClick={() => onProjectSelect(project)}
              whileHover={{ x: 4 }}
            >
              <div className="p-4 pr-28 relative">
                <div className="font-bold text-gray-900 mb-1">
                  {project.title}
                </div>
                <div className="text-sm text-gray-600">
                  {project.technologies.join(', ')}
                </div>
                <div className="absolute top-0 right-0 p-4 text-xs font-mono text-gray-400 bg-gray-50 m-2 rounded-sm">
                  {project.memoryAddr}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default VisualStack;