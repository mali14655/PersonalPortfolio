import React, { useState, useEffect } from "react";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["MERN Stack Developer"];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="py-10 px-4 md:px-8 lg:px-16 lg:ml-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-12">
          {/* Left Content */}
          <div className="w-full flex flex-col justify-center gap-8 text-center lg:text-left">
            <p className="text-blue-400 text-lg md:text-xl font-medium">
              Hi, I’m
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Muhammad Ali
            </h1>

            <h2 className="text-2xl md:text-3xl text-blue-400 font-light min-h-[40px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-[#BFC2CB] text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build fast, scalable, and modern web applications using the MERN
              stack. With a strong focus on clean code and responsive design, I
              help businesses turn ideas into high-performing digital solutions.
            </p>

            <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadali.dev5@gmail.com&su=Hiring%20Inquiry&body=Hi%20Muhammad%20Ali,%20I%20would%20like%20to%20hire%20you%20for%20a%20project.%20Let's%20discuss%20further."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button Text="Hire Me" />
              </a>

              <a href="/MuhammadAliResume.pdf" download="Muhammad_Ali_Resume.pdf">
                <Button Text="Download CV" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            className="w-full flex justify-center items-center"
          >
            <img
              src="Profile.png"
              alt="Muhammad Ali"
              className="w-full max-w-[400px] h-100 md:h-120 md:mb-20 object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
