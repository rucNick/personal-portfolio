// src/components/Projects/Console.js
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Console = ({ consoleOutput, selectedProject }) => {
  const consoleRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const { isDarkTheme } = useTheme();
  
  // Auto-scroll to the bottom when new output is added
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [consoleOutput]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 600);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Create memory access messages when a project is selected
  useEffect(() => {
    if (selectedProject && isDarkTheme) {
      // This effect would be handled in the parent component
      // that manages consoleOutput state
    }
  }, [selectedProject, isDarkTheme]);
  
  // Determine text color based on message type
  const getTextColor = (type) => {
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'success':
        return 'text-green-400 font-bold';
      case 'error':
        return 'text-red-400';
      case 'warning':
        return 'text-yellow-400';
      case 'link':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };
  
  return (
    <motion.div 
      className="bg-black border border-green-500/30 rounded-md overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Console output */}
      <div 
        ref={consoleRef}
        className="h-[500px] overflow-y-auto p-4 font-mono text-sm leading-relaxed"
      >
        {consoleOutput.map((item, index) => (
          <div key={index} className={`${getTextColor(item.type)} mb-1 whitespace-pre-wrap`}>
            {item.text}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-green-400 mr-2"></span>
          <span className={`h-4 w-2 bg-green-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Console;