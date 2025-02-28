// src/components/Skill/Skill.jsx
import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
  { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design tool' },
  { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: '/images/nodejs.svg', label: 'NodeJS', desc: 'Web Server' },
  { imgSrc: '/images/expressjs.svg', label: 'ExpressJS', desc: 'Node Framework' },
  { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
  { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
  { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' }
];

const Skill = () => {
  return (
    <section className="section py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites and applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map((skill, index) => (
            <SkillCard key={index} {...skill} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
