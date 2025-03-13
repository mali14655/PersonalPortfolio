import React, { useEffect } from "react";
import Button from "./Button";
import Skills from "../../Skills";
import Aos from "aos";
import "aos/dist/aos.css"
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },[]);

  const Projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      link: "https://part1-kappa.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum porro deleniti sequi neque numquam incidunt!",
      coverLink: "https://part1-kappa.vercel.app/assets/Mob-CZci7sq9.png",
      icon: "IconButton2.svg",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      link: "https://ecom-app-psi.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum porro deleniti sequi Repudiandae maiores neque numquam incidunt!",
      coverLink: "check.jpeg",
      icon: "IconButton2.svg",
    },
    {
      id: 3,
      title: "Ecommerce Website",
      link: "https://ecom-app-psi.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum porro deleniti sequi libero ",
      coverLink: "check.jpeg",
      icon: "IconButton2.svg",
    },
    {
      id: 4,
      title: "Ecommerce Website",
      link: "https://ecom-app-psi.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum porro deleniti sequi libero ",
      coverLink: "check.jpeg",
      icon: "IconButton2.svg",
    },
  ];
  return (
    <>
      <div className="w-[85%]   flex flex-col gap-100 ">
        <div className="w-full flex justify-between">
          <div className="p-5 flex flex-col justify-center gap-10">
            <h1 className="font-semibold text-[48px] text-white">
              M
              <Typewriter
                words={["uhmmad Ali"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              <span className="text-[24px] text-white block">
                M
                <Typewriter
                words={["ERN Stack Developer"]}
                // loop={Infinity}
                // cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              </span>
            </h1>
            <div className="flex flex-col ">
              <p className=" text-white">
                Welcome to the extraordinary world of Muhmmad Ali, a versatile
                and imaginative artist who skillfully navigates the realms of
                product design, photography and digital art. With a keen eye for
                detail and a relentless pursuit of innovation, crafts
                captivating visual narratives, immersive digital realms, and
                functional yet aesthetically pleasing products.
              </p>
              <div className="flex gap-5 py-10">
                <a href="mailto:muhammadali.dev5@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Muhammad%20Ali,%20I%20would%20like%20to%20hire%20you%20for%20a%20project.%20Let's%20discuss%20further.">
                  <Button Text="Hire Me" />
                </a>
                <a href="/cv.pdf" download="Muhammad_Ali_CV.pdf">
                  <Button Text="Download CV" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-transparent w-[1200px] pb-10 flex justify-center items-center "
          >
            <img
              src="Profile.png"
              className="bg-transparent object-center object-cover hover:cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 flex flex-col justify-between gap-10">
        <Skills />
          <h1 className="font-semibold text-[48px] text-white">Projects</h1>
          <div className="flex overflow-x-auto space-x-10 custom-scrollbar px-5 py-5">
            {Projects.map((item) => (
              <div
                data-aos="fade-left"
                key={item.id}
                className="flex flex-col min-w-[500px] bg-[radial-gradient(circle,_#FFFFFF0A,#FFFFFF1A)] rounded-[40px] backdrop-blur-2xl border-[1px] border-[#2e3035] shadow-[0px_8px_16px_rgba(0,0,0,0.6),_0px_3px_8px_rgba(0,0,0,0.12),_0px_1px_2px_rgba(0,0,0,0.04)] px-1 py-1 gap-1 "
              >
                <div className="relative h-[200px] rounded-[36px]">
                  <a href={item.link} target="_blank">
                    <div className="absolute rounded-[36px] blur-lg opacity-25 inset-0 bg-black hover:cursor-pointer"></div>
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform font-[900] text-white text-[50px] w-full text-center hover:cursor-pointer ">
                      {item.title}
                    </h1>
                  </a>
                  <img
                    src={item.coverLink}
                    className="object-cover w-full h-full object-center  rounded-[36px] "
                    alt=""
                  />
                </div>
                <div className="w-full rounded-[40px] flex justify-start items-center gap-5 px-7 py-2 text-white">
                  <img src={item.icon} alt="icon" />
                  <div className="flex flex-col gap-1 w-full overflow-hidden">
                    <h1 className="font-[600] text-lg">{item.title}</h1>
                    <p className="font-[400] text-justify text-base text-[#FFFFFF99]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
