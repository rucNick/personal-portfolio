// src/components/About/About.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { isDarkTheme } = useTheme();
  
  // Dynamic text colors based on theme
  const headingClass = isDarkTheme ? 'text-green-400' : 'text-slate-800';
  const textClass = isDarkTheme ? 'text-green-400/70' : 'text-slate-600';
  const highlightClass = isDarkTheme ? 'text-green-400' : 'text-slate-800';
  
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-6 ${headingClass}`}>About Me</h2>
        
        <div className={`mb-8 ${textClass}`}>
          <p className="mb-4">
            I'm a Computer Science student at the <span className={highlightClass}>University of Pittsburgh</span>, 
            expected to graduate in April 2025. With a passion for software development and problem-solving, 
            I've cultivated a diverse skill set through academic projects and professional experiences.
          </p>
          
          <p className="mb-4">
            Currently working as a <span className={highlightClass}>Research Assistant</span> at the University of Pittsburgh, 
            I contribute to cutting-edge projects that expand my technical knowledge and research capabilities. 
            Prior to this, I served as an <span className={highlightClass}>Undergraduate Teaching Assistant</span> where I helped 
            fellow students master complex CS concepts and programming fundamentals.
          </p>
          
          <p className="mb-4">
            My experience as a <span className={highlightClass}>Peer Tutor</span> honed my communication skills and ability to 
            explain technical concepts in an accessible way. I also gained valuable industry experience as a 
            <span className={highlightClass}> Software Engineer</span> at 金智教育 in Nanjing, China, where I worked on 
            real-world applications and collaborated with professional development teams.
          </p>
          
          <p>
            Through these experiences, I've developed strong technical skills in full-stack development, 
            problem-solving abilities, and a collaborative approach to creating intuitive digital solutions. 
            I'm constantly learning and exploring new technologies to expand my skill set and create 
            exceptional, high-performing applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-bold mb-4 ${headingClass}`}>Education</h3>
            <div className="mb-4">
              <h4 className={`font-bold ${highlightClass}`}>Bachelor of Science in Computer Science</h4>
              <p className={textClass}>University of Pittsburgh</p>
              <p className={textClass}>August 2021 - April 2025</p>
            </div>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-4 ${headingClass}`}>Experience</h3>
            
            <div className="mb-4">
              <h4 className={`font-bold ${highlightClass}`}>Research Assistant</h4>
              <p className={textClass}>University of Pittsburgh</p>
              <p className={textClass}>May 2024 - Present</p>
            </div>
            
            <div className="mb-4">
              <h4 className={`font-bold ${highlightClass}`}>Undergraduate Teaching Assistant</h4>
              <p className={textClass}>University of Pittsburgh</p>
              <p className={textClass}>August 2023 - January 2024</p>
            </div>
            
            <div className="mb-4">
              <h4 className={`font-bold ${highlightClass}`}>Peer Tutor</h4>
              <p className={textClass}>University of Pittsburgh</p>
              <p className={textClass}>February 2023 - August 2023</p>
            </div>
            
            <div className="mb-4">
              <h4 className={`font-bold ${highlightClass}`}>Software Engineer</h4>
              <p className={textClass}>金智教育 (JinZhi Education)</p>
              <p className={textClass}>October 2022 - December 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;