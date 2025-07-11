import React from "react";
import { Github, ExternalLink, Code, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 6,
      title: "OnlineTutoria Platform",
      link: "https://onlinetutoria.com",
      // github: "", // Leave empty or remove if it's a private repo
      description:
        "A full-featured MERN stack educational platform with a powerful admin dashboard. Admins can manage courses, study plans, and content, while users can browse offerings, select plans, and enroll seamlessly.",
      coverLink: "onlinetutoria.jpeg", // Add this image to your assets
      icon: "IconButton2.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "Client Project",
    },
    {
  id: 7,
  title: "TrafficLens Tracker Tool",
  link: "https://frontend-of-trafficlens.vercel.app",
  github: "https://github.com/mali14655/FrontendOfTrafficlens.git", // Private or internal use
  description:
    "A MERN stack-based link redirection and visitor tracking tool. TrafficLens allows users to create custom redirect URLs while capturing visitor IPs, countries, and cities, and displays powerful analytics through an admin dashboard.",
  coverLink: "trafficlens.jpeg", // Add this image to your assets
  icon: "IconButton.svg",
  technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  category: "Self"
}
,
    {
      id: 4,
      title: "Portfolio Website",
      link: "https://muhammadali-portfolio.vercel.app/",
      github: "https://github.com/mali14655/PersonalPortfolio.git",
      description:
        "Modern, responsive portfolio website showcasing projects and skills with smooth animations and glassmorphism design.",
      coverLink: "portfolio.jpeg",
      icon: "IconButton.svg",
      technologies: ["React", "Tailwind CSS", "Framer Motion",],
      category: "Portfolio",
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 lg:ml-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-[#BFC2CB] max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-80 md:w-96 bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 group hover:-translate-y-2"
              >
                {/* Project Image/Cover */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <div className="text-6xl text-white/20 font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 ">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#BFC2CB] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-[#BFC2CB] rounded-md text-xs border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-200"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-500/20 text-gray-300 rounded-full text-sm border border-gray-500/30 hover:bg-gray-500/30 hover:scale-105 transition-all duration-200"
                    >
                      <Code className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-white/20 rounded-full hover:bg-blue-400 transition-colors duration-200 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-[#BFC2CB] mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span>Let's Talk</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
