import React from 'react';

const AuraIcon: React.FC<{className?: string, style?: React.CSSProperties}> = ({ className, style }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      style={style}
    >
      <path d="M12 3v2.5" />
      <path d="M12 18.5V21" />
      <path d="M5.17 5.17l1.76 1.76" />
      <path d="M17.07 17.07l1.76 1.76" />
      <path d="M3 12h2.5" />
      <path d="M18.5 12H21" />
      <path d="M5.17 18.83l1.76-1.76" />
      <path d="M17.07 6.93l1.76-1.76" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
};

export default AuraIcon;
