import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative font-display font-bold uppercase tracking-wider py-3 px-8 transition-all duration-300 clip-path-slant disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    primary: "bg-neon-cyan text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.7)]",
    secondary: "bg-neon-purple text-white hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(188,19,254,0.7)]",
    outline: "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {/* Glitch effect overlay container */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading && (
           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
           </svg>
        )}
        {children}
      </span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
    </button>
  );
};
