// src/components/Skill/SkillCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  const { isDarkTheme } = useTheme();
  
  // Define theme classes
  const cardClasses = isDarkTheme
    ? 'ring-zinc-50/10 hover:bg-zinc-800'
    : 'ring-slate-200 hover:bg-slate-100';
    
  const figureClasses = isDarkTheme
    ? 'bg-zinc-700/50 group-hover:bg-zinc-900'
    : 'bg-slate-200 group-hover:bg-slate-300';
    
  const titleClasses = isDarkTheme
    ? 'text-green-400'
    : 'text-slate-800';
    
  const descClasses = isDarkTheme
    ? 'text-zinc-400'
    : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 ring-2 ring-inset rounded-2xl p-3 transition-colors group ${cardClasses} ${classes}`}>
      <figure className={`rounded-lg overflow-hidden w-12 h-12 p-2 transition-colors ${figureClasses}`}>
        <img src={imgSrc} width={32} height={32} alt={label} className="object-contain" />
      </figure>
      <div>
        <h3 className={`font-semibold transition-colors ${titleClasses}`}>{label}</h3>
        <p className={`text-sm transition-colors ${descClasses}`}>{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default SkillCard;