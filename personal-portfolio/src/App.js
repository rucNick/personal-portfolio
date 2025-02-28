// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './index.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const { isDarkTheme } = useTheme();
  
  useEffect(() => {
    // Initialize ScrollTrigger for reveal animations
    const revealElements = document.querySelectorAll('.reveal-up');
    
    revealElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        },
        once: true
      });
    });
    
    // Reset on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location]);
  
  // Define theme classes based on isDarkTheme
  const themeClasses = isDarkTheme 
    ? 'bg-black text-green-400' 
    : 'bg-white text-slate-800';
    
  const containerClasses = isDarkTheme
    ? 'border-green-400/20'
    : 'border-slate-200';
  
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${themeClasses}`}>
      <Navbar />
      
      <main className={`flex-1 container mx-auto px-4 pt-24 pb-16 ${containerClasses}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;