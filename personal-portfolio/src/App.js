import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Animate any element with the 'reveal' class when scrolled into view
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono pt-20">
      {/* Added padding-top to ensure content isn’t hidden behind fixed navbar */}
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ReactLenis>
      <Router>
        <AppContent />
      </Router>
    </ReactLenis>
  );
};

export default App;
