import React from 'react';
import { Home, Code, Briefcase, Mail, Github, Linkedin, } from 'lucide-react';


export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      skills: ['JavaScript (ES6+)',"TypeScript", 'React', 'HTML/CSS', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs',"Supabase","Firebase"],
      icon: '⚙️'
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'Vercel',"Render","Railway" , 'Postman',],
      icon: '🛠️'
    }
  ];

  const experiences = [
    {
      role: "MERN Stack Trainer",
      organization: "SMIT (Saylani Mass IT Training), Peshawar",
      period: "Current",
      summary:
        "Training students in full-stack web development with MongoDB, Express.js, React, and Node.js through practical, project-based learning.",
      website: "https://www.saylanimit.com/",
    },
    {
      role: "Full Stack Developer",
      organization: "Tech4Edges T4E (tech4edges.com)",
      period: "Nov 2025 - Present",
      summary:
        "Developing and maintaining scalable full-stack applications, building responsive interfaces, and implementing backend services for production use.",
      website: "https://tech4edges.com/",
    },
    {
      role: "Web Development Team Lead",
      organization: "Google Developer Group On Campus - University of Peshawar",
      period: "Oct 2024 - Oct 2025",
      summary:
        "Led student developer activities, guided web development initiatives, and supported collaborative learning across the campus developer community.",
    },
    {
      role: "Teacher Assistant",
      organization: "SMIT (Saylani Mass IT Training), Peshawar",
      period: "Dec 2024 - Aug 2025",
      summary:
        "Supported instructors in delivering technical sessions, mentoring students, and assisting with hands-on MERN and web development practice.",
      website: "https://www.saylanimit.com/",
    },
    {
      role: "Web Development Intern",
      organization: "EncoderBytes Pvt Ltd (encoderbytes.com)",
      period: "Oct 2024 - Feb 2025",
      summary:
        "Contributed to development tasks, collaborated with senior engineers, and strengthened practical skills in frontend and backend development.",
      website: "https://www.encoderbytes.com/",
    },
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

        {/* Experience */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Experience
            </h3>
            <p className="text-[#BFC2CB] max-w-3xl mx-auto">
              Professional roles and teaching experience in software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-sm text-blue-300 mb-2">{item.period}</p>
                <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                <p className="text-sm text-[#BFC2CB] mb-3">{item.organization}</p>
                <p className="text-sm text-[#BFC2CB] leading-relaxed">
                  {item.summary}
                </p>
                {item.website && (
                  <div className="flex gap-4 mt-4 text-sm">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '1.5+', label: 'years Experience' },
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