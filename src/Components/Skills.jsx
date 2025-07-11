import React from 'react';
import { Home, Code, Briefcase, Mail, Github, Linkedin, } from 'lucide-react';


export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      skills: ['JavaScript (ES6+)', 'React', 'HTML/CSS', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      icon: '⚙️'
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'Vercel',"Render","Railway" , 'Postman',],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 lg:ml-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-[#BFC2CB] max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-6 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Months Experience' },
            { number: '5+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-[#BFC2CB] group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}