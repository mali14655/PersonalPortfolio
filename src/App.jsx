import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#15161A] text-[#BFC2CB] font-sans">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#15161A] via-[#1a1b20] to-[#15161A] pointer-events-none"></div>

      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
