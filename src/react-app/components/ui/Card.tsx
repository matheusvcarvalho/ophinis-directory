import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  glowColor?: 'cyan' | 'purple' | 'green';
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, glowColor = 'cyan' }) => {
  const glowStyles = {
    cyan: "hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] border-neon-cyan/30",
    purple: "hover:shadow-[0_0_20px_rgba(188,19,254,0.15)] border-neon-purple/30",
    green: "hover:shadow-[0_0_20px_rgba(10,255,0,0.15)] border-neon-green/30",
  };

  return (
    <div className={`glass-panel p-6 rounded-none relative overflow-hidden group border transition-all duration-300 ${glowStyles[glowColor]} ${className}`}>
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors duration-300 ${glowColor === 'cyan' ? 'border-neon-cyan' : glowColor === 'purple' ? 'border-neon-purple' : 'border-neon-green'}`} />
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${glowColor === 'cyan' ? 'border-neon-cyan' : glowColor === 'purple' ? 'border-neon-purple' : 'border-neon-green'}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${glowColor === 'cyan' ? 'border-neon-cyan' : glowColor === 'purple' ? 'border-neon-purple' : 'border-neon-green'}`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors duration-300 ${glowColor === 'cyan' ? 'border-neon-cyan' : glowColor === 'purple' ? 'border-neon-purple' : 'border-neon-green'}`} />

      {title && (
        <h3 className={`font-display text-xl font-bold mb-4 ${glowColor === 'cyan' ? 'text-neon-cyan' : glowColor === 'purple' ? 'text-neon-purple' : 'text-neon-green'}`}>
          {title}
        </h3>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
