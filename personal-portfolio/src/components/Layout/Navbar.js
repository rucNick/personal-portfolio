// src/components/Layout/Navbar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../../ui/Button/Button';

const Navbar = () => {
  const location = useLocation();
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    // Animate navbar links when location changes
    gsap.fromTo(
      '.navbar-link',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [location]);

  // Theme classes
  const navClasses = isDarkTheme 
    ? 'backdrop-blur-md bg-black/50 border-green-400/20' 
    : 'backdrop-blur-md bg-white/80 border-slate-200';
    
  const logoClasses = isDarkTheme
    ? 'text-green-400'
    : 'text-slate-800';
    
  const linkActiveClasses = isDarkTheme
    ? 'text-green-400'
    : 'text-slate-800';
    
  const linkInactiveClasses = isDarkTheme
    ? 'text-gray-400 hover:text-green-400'
    : 'text-slate-500 hover:text-slate-800';

  // SVG icons
  const SunIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="transition-transform duration-300"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const MoonIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="transition-transform duration-300"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-500 border-b ${navClasses}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <div className={`text-2xl font-bold transition-colors duration-500 ${logoClasses}`}>
          [RuiCao.run] $
        </div>
        
        {/* Navigation links in the middle */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`navbar-link transition-colors duration-500 ${location.pathname === '/' ? linkActiveClasses : linkInactiveClasses}`}
          >
            ./home
          </Link>
          <Link 
            to="/resume" 
            className={`navbar-link transition-colors duration-500 ${location.pathname === '/resume' ? linkActiveClasses : linkInactiveClasses}`}
          >
            ./resume
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link transition-colors duration-500 ${location.pathname === '/projects' ? linkActiveClasses : linkInactiveClasses}`}
          >
            ./projects
          </Link>
        </div>
        
        {/* Theme toggle button on the right */}
        <Button 
          variant="icon" 
          icon={isDarkTheme ? SunIcon : MoonIcon}
          onClick={toggleTheme}
          className="navbar-link theme-toggle-btn"
          aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
        />
      </div>
    </nav>
  );
};

export default Navbar;