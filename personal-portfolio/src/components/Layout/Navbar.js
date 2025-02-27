// src/components/Layout/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-3">
          <div className="font-bold text-xl mr-8">
            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">[RuiCao.run] $</span>
          </div>
          <div className="space-x-6">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
            >
              ./home
            </Link>
            <Link 
              to="/resume" 
              className={`${location.pathname === '/resume' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
            >
              ./resume
            </Link>
            <Link 
              to="/projects" 
              className={`${location.pathname === '/projects' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
            >
              ./projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;