// src/components/Projects/VisualStack.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const VisualStack = ({ projects, selectedProject, onProjectSelect }) => {
  const { isDarkTheme } = useTheme();
  
  // Generate a random memory address
  const getMemoryAddress = () => {
    return `0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(8, '0')}`;
  };
  
  return (
    <div className="bg-black border border-green-500/30 h-[500px] p-4 flex flex-col relative">
      <div className="text-green-400 text-center mb-4 font-mono flex justify-between items-center">
        <div className="text-green-400/70 text-xs">0xFF</div>
        <div>STACK</div>
        <div></div>
      </div>
      
      {/* Stack visualization area */}
      <div className="flex-grow relative border border-green-500/30 rounded-md bg-black overflow-hidden">
        {/* Visual stack container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          {/* Stack representation */}
          <div className="relative">
            {projects.length === 0 ? (
              <div className="text-center text-green-400/50 py-10">
                Stack Empty
              </div>
            ) : (
              projects.map((project, index) => {
                // Calculate position from bottom
                const reversedIndex = projects.length - 1 - index;
                
                return (
                  <motion.div 
                    key={project.id}
                    className={`
                      border px-3 py-2 mb-1 cursor-pointer font-mono text-sm
                      ${selectedProject?.id === project.id ? 
                        'border-green-500 bg-green-500/10 text-green-400' : 
                        'border-green-500/30 bg-black text-green-400/70'}
                      hover:border-green-500 transition-all duration-300
                    `}
                    onClick={() => onProjectSelect(project)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      borderColor: 'rgba(74, 222, 128, 0.8)',
                      backgroundColor: 'rgba(74, 222, 128, 0.1)'
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-bold">{project.title}</div>
                      <div className="text-xs text-green-400/50">{project.memoryAddr || getMemoryAddress()}</div>
                    </div>
                    <div className="text-xs truncate">{project.technologies.join(', ')}</div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
        
        {/* Memory addresses on left side */}
        <div className="absolute left-0 bottom-0 w-12 border-r border-green-500/30 flex flex-col justify-between py-4 px-2 text-green-400/50 text-xs font-mono">
          <div>0x00</div>
        </div>
      </div>
      
      {/* Stack controls */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        <motion.button
          className="border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 py-2 text-center font-mono text-sm"
          whileHover={{ scale: 1.02, borderColor: 'rgba(74, 222, 128, 0.8)' }}
          whileTap={{ scale: 0.98 }}
        >
          [+]PUSH
        </motion.button>
        
        <motion.button
          className="border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 py-2 text-center font-mono text-sm"
          whileHover={{ scale: 1.02, borderColor: 'rgba(74, 222, 128, 0.8)' }}
          whileTap={{ scale: 0.98 }}
        >
          [-]POP
        </motion.button>
      </div>
    </div>
  );
};

export default VisualStack;