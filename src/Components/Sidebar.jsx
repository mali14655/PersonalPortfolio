import React from 'react';
import { Home, Code, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

export default function Sidebar({ activeSection, onSectionChange }) {
  const menuItems = [
    { id: 'home', icon: Home },
    { id: 'skills', icon: Code },
    { id: 'projects', icon: Briefcase },
    { id: 'contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/muhammadali-dev5' },
    { icon: Github, url: 'https://github.com/mali14655' },
  ];

  return (
    <div className="fixed left-5 top-5  w-16 z-50">
      {/* Sidebar Container */}
      <div className="h-full bg-[#0000001A] backdrop-blur-2xl border border-[#2e3035] rounded-[80px] shadow-[0px_6px_9px_0px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-[80px] bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col p-2">
          {/* Navigation Items */}
          <nav className="flex-1 space-y-1 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-50 ease-in-out group hover:cursor-pointer relative ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  {/* Active Background Circle */}
                  <div className={` absolute inset-0 rounded-full bg-white transition-all duration-200 ease-in-out ${
                    isActive ? 'opacity-10 scale-10' : 'opacity-0 scale-0'
                  }`}></div>
                  
                  {/* Icon */}
                  <Icon className={`transition-all duration-200 ${
                    isActive ? 'w-6 h-6 text-blue-400' : 'w-5 h-5 text-[#BFC2CB] group-hover:text-blue-300'
                  }`} />
                  
                  {/* Active Dot
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  )} */}
                </button>
              );
            })}
          </nav>
          
          {/* Divider */}
          <div className="border-t border-white/10 my-2"></div>
          
          {/* Social Links */}
          <div className="space-y-1 mb-2">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-white/5 group"
                >
                  <Icon className="w-4 h-4 text-[#BFC2CB] group-hover:text-blue-300 transition-all duration-200" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}