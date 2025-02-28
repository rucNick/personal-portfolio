import React from 'react';
import { Button } from '../../ui/Button/Button';



const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-auto border-t border-green-400/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-green-400">
          &copy; {new Date().getFullYear()} RuiCao. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button as="a" variant="outline" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button as="a" variant="outline" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Button>
          <Button as="a" variant="outline" href="mailto:your.email@example.com">
            Email
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
