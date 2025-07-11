import React from 'react';

export default function Button({ Text, onClick, href, download, className = "", variant = "default" }) {
  const baseClasses = 'relative z-50 hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in shadow-md font-[600] text-[14px] py-2 px-10 flex justify-center items-center rounded-[80px] border-[1px]';
  
  const variants = {
    default: 'hover:shadow-[0_0_15px_rgb(29,255,243)] text-[#BFC2CB] border-[#2e3035] bg-[#0000001A]',
    primary: 'hover:shadow-[0_0_15px_rgb(59,130,246)] text-white bg-blue-600 border-blue-600 hover:bg-blue-700',
    secondary: 'hover:shadow-[0_0_15px_rgb(168,85,247)] text-white bg-purple-600 border-purple-600 hover:bg-purple-700'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        onClick={onClick}
      >
        {Text}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {Text}
    </button>
  );
}