import React, { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState(1);

  const Menu = [
    { id: 1, link: "IconButton.svg", linkActive: "Main.svg" },
    {
      id: 2,
      link: "IconButton2.svg",
      linkActive: "IconButtonActive.svg",
    },
    { id: 3, link: "IconButton.svg", linkActive: "Main.svg" },
    {
      id: 4,
      link: "IconButton2.svg",
      linkActive: "IconButtonActive.svg",
    },
   
  ];
  const Socials = [
    {
      id: 1,
      link: "LinkedIn.svg",
      Navlink: "https://www.linkedin.com/in/muhammadali-dev5",
    },
    {
      id: 2,
      link: "Github.svg",
      Navlink: "https://github.com/mali14655",
    },
    {
      id: 2,
      link: "Github.svg",
      Navlink: "https://github.com/mali14655",
    },
  ];
  return (
    <>
      <div
        className="w-[64px] rounded-[80px] bg-black backdrop-blur-2xl shadow-[0px_6px_9px_0px_rgba(0, 0, 0, 0.6), 0px_3px_2px_0px_rgba(0, 0, 0, 0.12), 0px_1px_1px_0px_rgba(0, 0, 0, 0.04)]
      flex flex-col items-center py-1"
      >
        <div className="absolute inset-0 rounded-[80px] bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0))]  opacity-20"></div>
        <div className="w-full flex flex-col items-center ">
          {Menu.map((item) => (
            <div
              key={item.id}
              className={`w-[48px] flex flex-col gap-1 relative ${
                active == item.id ? "h-[56px] w-[56px]" : "h-[48px]"
              } flex justify-center items-center hover:cursor-pointer z-20 transition-all duration-[200ms] ease-in-out`}
              onClick={() => {
                setActive(item.id);
              }}
            >
              {/* background circle */}
              <div
                className={`absolute rounded-full z-0 bg-white inset-0 transition-all duration-[200ms] ease-in-out 
                            ${
                              active === item.id
                                ? "opacity-10 scale-100"
                                : "opacity-0 scale-0"
                            }`}
              ></div>

              {/* icon */}
              <img
                src={active === item.id ? item.linkActive : item.link}
                className={`relative z-40 transition-all duration-[200ms] ease-in-out 
                                ${
                                  active === item.id
                                    ? "h-[40px] w-[40px]"
                                    : "h-[32px] w-[32px]"
                                }`}
                alt=""
              />

              {/* dot */}
              <img
                src="Frame.svg"
                className={` ${
                  active == item.id ? "opacity-100" : "opacity-0"
                } transition-opacity duration-[300ms] ease-in-out `}
                alt=""
              />
            </div>
          ))}

          <img src="Line.svg" alt="" />
          {Socials.map((item) => (
            <div
              key={item.id}
              className={`w-[40px] h-[40px] flex flex-col gap-1 relative justify-center items-center hover:cursor-pointer z-20 py-2`}
            >
              {/* icon */}
              <a
                href={item.Navlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.link} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
