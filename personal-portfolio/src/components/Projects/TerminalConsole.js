// src/components/Projects/TerminalConsole.js
import React, { useEffect, useRef } from 'react';

const TerminalConsole = ({ output, currentCommand, setCurrentCommand, handleCommand }) => {
  const consoleRef = useRef(null);
  const inputRef = useRef(null);
  
  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);
  
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentCommand.trim()) {
        handleCommand(currentCommand);
      }
    }
  };
  
  return (
    <div className="bg-black rounded-lg border border-zinc-800 h-[500px] flex flex-col overflow-hidden">
      <div 
        ref={consoleRef}
        className="flex-grow p-4 overflow-y-auto font-mono text-sm text-green-400"
      >
        {output.map((line, index) => (
          <div key={index} className="mb-1 whitespace-pre-wrap">{line}</div>
        ))}
      </div>
      
      <div className="border-t border-zinc-800 p-2 flex items-center bg-black">
        <span className="text-green-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent text-green-400 outline-none font-mono"
          placeholder="Type a command..."
        />
      </div>
    </div>
  );
};

export default TerminalConsole;