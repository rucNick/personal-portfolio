import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Animate navbar links when location changes
    gsap.fromTo(
      '.navbar-link',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [location]);

  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/50 border-b border-green-400/20 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-green-400">
          [RuiCao.run] $
        </div>
        <div className="space-x-6">
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
          >
            ./home
          </Link>
          <Link 
            to="/resume" 
            className={`navbar-link ${location.pathname === '/resume' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
          >
            ./resume
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${location.pathname === '/projects' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
          >
            ./projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
