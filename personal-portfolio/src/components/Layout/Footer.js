// src/components/Layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-secondary">&copy; {new Date().getFullYear()} RuiCao. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-text-secondary hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;