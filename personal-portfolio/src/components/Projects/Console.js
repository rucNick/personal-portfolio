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
  
  // Parse console message type to apply correct styling
  const getLineClass = (line) => {
    if (typeof line === 'string') {
      // Default styling for string messages
      return isDarkTheme ? 'text-green-400' : 'console-command';
    }
    
    // Object messages with type
    switch (line.type) {
      case 'success':
        return isDarkTheme ? 'text-green-400 font-bold' : 'console-success';
      case 'error':
        return isDarkTheme ? 'text-red-400' : 'console-error';
      case 'warning':
        return isDarkTheme ? 'text-yellow-400' : 'console-warning';
      case 'command':
      default:
        return isDarkTheme ? 'text-green-400' : 'console-command';
    }
  };
  
  return (
    <div className={isDarkTheme ? "" : "console-container"}>
      {/* Terminal header - only in light mode */}
      {!isDarkTheme && (
        <div className="console-header">
          <div className="console-controls">
            <div className="console-window-button console-button-red"></div>
            <div className="console-window-button console-button-yellow"></div>
            <div className="console-window-button console-button-green"></div>
          </div>
          <div className="console-title">terminal@portfolio:~$</div>
        </div>
      )}
      
      {/* Console content */}
      <div 
        ref={consoleRef}
        className={isDarkTheme 
          ? "border border-green-400/20 p-4 h-[500px] overflow-y-auto bg-black font-mono relative" 
          : "console-content"
        }
      >
        {/* Console messages */}
        <div className="space-y-1">
          {consoleOutput.map((line, index) => (
            <div key={index} className={`${isDarkTheme ? "" : "console-line"} ${getLineClass(line)}`}>
              {typeof line === 'string' ? line : line.text}
            </div>
          ))}
        </div>
        
        {/* Blinking cursor */}
        <div className="flex items-center mt-1">
          <span className={isDarkTheme ? "text-green-400 mr-2" : "text-gray-300 mr-2"}>
            {isDarkTheme ? "" : "$"}
          </span>
          <span 
            className={`h-4 w-2 ${isDarkTheme ? 'bg-green-400' : 'bg-gray-300'} ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Console;