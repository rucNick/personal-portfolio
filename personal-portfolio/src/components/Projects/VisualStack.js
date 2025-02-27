// src/components/Projects/VisualStack.js
import React from 'react';

const VisualStack = ({ projects, selectedProject, onProjectSelect }) => {
  return (
    <div className="bg-zinc-800 rounded-lg border border-zinc-700 h-[500px] p-4 flex flex-col relative">
      <div className="text-green-400 text-center mb-4 font-mono">PROJECT STACK</div>
      
      {/* Stack visualization area */}
      <div className="flex-grow relative border-2 border-green-500/30 rounded-md bg-zinc-900 overflow-hidden">
        {/* Visual stack container */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Stack representation */}
          <div className="relative">
            {projects.length === 0 ? (
              <div className="text-center text-green-400/50 py-10">
                Stack Empty
              </div>
            ) : (
              projects.map((project, index) => {
                // Calculate position from bottom
                const reversedIndex = projects.length - 1 - index;
                
                return (
                  <div 
                    key={project.id}
                    className={`
                      border-2 px-3 py-2 mb-1 cursor-pointer font-mono text-sm
                      ${selectedProject?.id === project.id ? 
                        'border-green-500 bg-green-500/20 text-green-400' : 
                        'border-green-500/30 bg-black text-green-400/70'}
                    `}
                    style={{
                      transform: `translateY(${-reversedIndex * 4}px)`,
                      zIndex: reversedIndex
                    }}
                    onClick={() => onProjectSelect(project)}
                  >
                    <div className="font-bold">{project.title}</div>
                    <div className="text-xs truncate">{project.technologies.join(', ')}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        
        {/* Memory addresses on left side */}
        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-green-500/30 flex flex-col justify-between py-4 px-2 text-green-400/50 text-xs font-mono">
          <div>0xFF</div>
          <div>0x00</div>
        </div>
      </div>
      
      {/* Stack controls */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {['PUSH', 'POP', 'VIEW', 'CLEAR'].map((action, index) => (
          <button
            key={index}
            className="border-2 border-green-500/50 bg-green-500/10 text-green-400 hover:bg-green-500/20 py-2 text-center font-mono text-sm"
            onClick={() => {
              if (action === 'PUSH') {
                const name = prompt('Enter project name:');
                if (name) {
                  const newProject = {
                    id: `project${Date.now()}`,
                    title: name,
                    description: 'New project description',
                    technologies: ['Technology 1', 'Technology 2'],
                    github: 'https://github.com/yourusername/newproject'
                  };
                  onProjectSelect(newProject);
                }
              } else if (action === 'POP' && projects.length > 0) {
                // Handle through parent component
                const project = projects[projects.length - 1];
                project.action = 'pop';
                onProjectSelect(project);
              }
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VisualStack;