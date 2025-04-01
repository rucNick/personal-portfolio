// src/components/Home/Home.jsx
import React, { useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import Skill from '../Skill/Skill';
import About from '../About/About';
import { useTheme } from '../../context/ThemeContext';

// Matrix Digital Rain component
const MatrixRain = () => {
  const canvasRef = useRef(null);
  const { isDarkTheme } = useTheme();
  
  useEffect(() => {
    if (!isDarkTheme) return; // Only run in dark mode
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters to use in the Matrix rain
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    
    const alphabet = katakana + latin + nums + symbols;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    // Array to track y position of each column
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    // Function to draw the rain
    const draw = () => {
      // Set semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text color and font
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through each drop
      for (let i = 0; i < drops.length; i++) {
        // Choose a random character
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop position after it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 33);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns
      const newColumns = canvas.width / fontSize;
      
      // Reset drops array
      for (let x = 0; x < newColumns; x++) {
        if (x >= drops.length) {
          drops[x] = 1;
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkTheme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.4, position: 'fixed', pointerEvents: 'none' }}
    ></canvas>
  );
};

// Glitch text animation component
const GlitchText = ({ text, className }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayText, setDisplayText] = React.useState(text);
  const intervalRef = useRef(null);
  
  const startGlitchEffect = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => 
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 30);
  };
  
  useEffect(() => {
    startGlitchEffect();
    
    return () => clearInterval(intervalRef.current);
  }, [text]);
  
  return (
    <span 
      className={className}
      onMouseEnter={startGlitchEffect}
    >
      {displayText}
    </span>
  );
};

// Terminal Prompt Animation
const TerminalPrompt = () => {
  const [prompt] = React.useState('> ');
  const [fullText] = React.useState('I\'m a software engineer passionate about creating intuitive digital experiences.');
  const [displayedText, setDisplayedText] = React.useState('');
  const [cursorVisible, setCursorVisible] = React.useState(true);
  
  useEffect(() => {
    // Type one character at a time
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 40 + Math.random() * 80); // Vary typing speed for natural effect
      
      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText]);
  
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="font-mono text-lg text-green-400 flex">
      <span>{prompt}</span>
      <span>{displayedText}</span>
      <span className={`inline-block w-3 h-5 bg-green-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
    </div>
  );
};

const Home = () => {
  const { isDarkTheme } = useTheme();
  
  // Fix for scrolling issues
  useEffect(() => {
    // Ensure body can scroll
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    
    return () => {
      // Cleanup
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="relative">
      {/* Matrix Digital Rain (only in dark mode) */}
      {isDarkTheme && <MatrixRain />}
      
      {/* Hero Section */}
      <motion.section 
        className="mb-16 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full border-l-2 border-green-400/30"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        <motion.div className="pl-4" variants={itemVariants}>
          <GlitchText 
            text="HELLO, I'M RUICAO"
            className="text-4xl font-bold text-green-400 mb-4 block"
          />
          
          <div className="mb-6">
            <TerminalPrompt />
          </div>
        </motion.div>
      </motion.section>
      
      {/* Connection lines between sections */}
      <div className="hidden md:block absolute left-1/2 top-32 bottom-0 border-l-2 border-dashed border-green-400/20 -z-1"></div>
      
      {/* About Me Section with Matrix styling in dark mode */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <About />
      </motion.div>
      
      {/* Skills Section with Matrix styling in dark mode */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <Skill />
      </motion.div>
      
      {/* Matrix-style decorative elements (visible only in dark mode) */}
      {isDarkTheme && (
        <>
          <div className="fixed top-20 right-10 text-green-400/30 font-mono text-xs transform rotate-90 hidden md:block">
            SYSTEM_ACTIVE:TRUE
          </div>
          <div className="fixed bottom-10 left-10 text-green-400/30 font-mono text-xs hidden md:block">
            CONNECTION_SECURE:TRUE
          </div>
        </>
      )}
    </div>
  );
};

export default Home;