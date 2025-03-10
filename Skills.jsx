import React from "react";

export default function Skills() {
  let skills = [
    {
      id: 1,
      icon: "html5.svg",
      tooltip: "HTML5",
    },
    {
        id: 4,
        icon: "css3-plain.svg",
        tooltip: "CSS3",
      },
    {
      id: 2,
      icon: "javascript.svg",
      tooltip: "JavaScript",
    },
    {
      id: 3,
      icon: "react-original.svg",
      tooltip: "React",
    },
    {
        id: 5,
        icon: "tailwindcss-plain.svg",
        tooltip: "Tailwind",
    },
    {
        id: 6,
        icon: "nodejs-plain-wordmark.svg",
        tooltip: "NodeJs",
    },
    {
        id: 7,
        icon: "express-original-wordmark.svg",
        tooltip: "Express",
    },
    {
        id: 8,
        icon: "mongodb-plain-wordmark.svg",
        tooltip: "MongoDB",
    },
    {
        id: 9,
        icon: "firebase-plain.svg",
        tooltip: "Firebase",
    },
    {
        id: 10,
        icon: "github-original.svg",
        tooltip: "github",
    },
    {
        id: 11,
        icon: "git-plain.svg",
        tooltip: "git",
    },
  ];
  return (
    <>
      <div className="px-10 py-5 flex flex-col gap-5">
        <h1 className="font-semibold text-[48px] text-white">Skills</h1>
        <div className="flex gap-10 space-y-3 flex-wrap py-15 rounded-2xl  px-7 border-[1px] border-[#2e3035] bg-[#0000001A] ">
          {skills.map((item) => (
            <div
              key={item.id}
              className="relative h-[90px] w-[90px] rounded-full group hover:cursor-pointer  flex justify-center items-center"
            >
                <div className="absolute group-hover:translate-y-[-80px] px-4 opacity-0 group-hover:opacity-100 transition-all duration-600 ease-in-out  rounded-2xl  flex justify-center items-center  font-[600] text-[14px] text-[#BFC2CB]">{item.tooltip}</div>
              <div className="absolute inset-0 z-0 rounded-full border-[1px] border-[#0000001A] shadow-md group-hover:shadow-[0_0_15px_rgb(29,255,243)] bg-[#3F424D] scale-100 opacity-50 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700 ease-in-out "></div>
              <img
                src={item.icon}
                className="relative z-10 group-hover:scale-110 transition-all duration-500 ease-in-out"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
