// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import './index.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="container mx-auto max-w-5xl">
        {/* Terminal header/navbar */}
        <div className="mb-8">
          <div className="text-green-400 text-lg">[YourName.run] $</div>
          <div className="mt-2 ml-4">
            <div className="flex flex-col space-y-1">
              <Link to="/" className="text-green-400 hover:text-green-300">
                • ./home
              </Link>
              <Link to="/resume" className="text-green-400 hover:text-green-300">
                • ./resume
              </Link>
              <Link to="/projects" className="text-green-400 hover:text-green-300">
                • ./projects
              </Link>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <main className="mb-16">
          {/* Show current section title based on route */}
          {location.pathname === "/" && <h1 className="text-green-400 text-xl mb-6">Home</h1>}
          {location.pathname === "/resume" && <h1 className="text-green-400 text-xl mb-6">Resume</h1>}
          {location.pathname === "/projects" && <h1 className="text-green-400 text-xl mb-6">Projects</h1>}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        
        <footer className="mt-16 text-green-400 text-sm">
          <div className="mb-2">Powered by React and TailwindCSS</div>
          <div>[YourName.run] $ echo "© {currentYear} All rights reserved"</div>
        </footer>
      </div>
    </div>
  );
}

export default App;