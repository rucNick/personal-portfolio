// src/context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Apply theme changes to all elements
  useEffect(() => {
    // Get all elements that need theme changes
    const root = document.documentElement;
    
    if (isDarkTheme) {
      // Dark theme
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    } else {
      // Light theme
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);