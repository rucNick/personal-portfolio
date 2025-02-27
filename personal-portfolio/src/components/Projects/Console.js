// src/components/Projects/Console.js
import React, { useEffect, useRef, useState } from 'react';

const Console = ({ consoleOutput }) => {
  const consoleRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  
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
  
  // Determine text color based on message type
  const getTextColor = (type) => {
    switch (type) {
      case 'command':
        return 'text-yellow-400';
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'warning':
        return 'text-yellow-400';
      case 'link':
        return 'text-blue-400';
      default:
        return 'text-console-text';
    }
  };
  
  return (
    <div className="bg-console-bg rounded-lg overflow-hidden border border-border shadow-lg">
      {/* Console header with macOS-style buttons */}
      <div className="bg-[#2d2d2d] flex justify-between items-center p-3 border-b border-border">
        <span className="text-text-secondary text-sm font-mono">projects.sh — bash</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
        </div>
      </div>
      
      {/* Console output */}
      <div 
        ref={consoleRef}
        className="h-[400px] overflow-y-auto p-4 font-mono text-sm bg-[#0d1117] leading-relaxed"
        style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
      >
        {consoleOutput.map((item, index) => (
          <div key={index} className={`${getTextColor(item.type)} mb-1 whitespace-pre-wrap`}>
            {item.text}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-green-400 mr-2">user@portfolio:~$</span>
          <span className={`h-4 w-2 bg-white ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
        </div>
      </div>
    </div>
  );
};

export default Console;