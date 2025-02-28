// src/ui/Button/Button.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const Button = ({
  children,
  as = 'button',
  variant = 'default',
  className = '',
  icon = null,
  ...props
}) => {
  const { isDarkTheme } = useTheme();
  
  // Define variant classes based on theme and variant
  const getVariantClasses = () => {
    if (isDarkTheme) {
      switch (variant) {
        case 'outline':
          return 'border border-green-400/50 text-green-400 hover:bg-green-400/10';
        case 'solid':
          return 'bg-green-500 text-black hover:bg-green-400';
        case 'icon':
          return 'text-green-400 hover:bg-green-400/20 p-2 rounded-full';
        default:
          return 'bg-green-400/20 text-green-400 hover:bg-green-400/30';
      }
    } else {
      switch (variant) {
        case 'outline':
          return 'border border-slate-300 text-slate-700 hover:bg-slate-100';
        case 'solid':
          return 'bg-slate-800 text-white hover:bg-slate-700';
        case 'icon':
          return 'text-slate-800 hover:bg-slate-200 p-2 rounded-full';
        default:
          return 'bg-slate-200 text-slate-800 hover:bg-slate-300';
      }
    }
  };
  
  const variantClasses = getVariantClasses();
  const baseClasses = variant === 'icon' 
    ? 'transition-colors duration-300 flex items-center justify-center' 
    : 'px-4 py-2 rounded transition-colors duration-300 font-medium';
    
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;
  
  const Component = as;
  
  return (
    <Component className={combinedClasses} {...props}>
      {icon ? (
        <span className="flex items-center justify-center">
          {icon}
          {children && <span className="ml-2">{children}</span>}
        </span>
      ) : (
        children
      )}
    </Component>
  );
};