import underline from "@/assets/underline.svg";

import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "RÓLAM", href: "#" },
    { text: "BEJELENTKEZÉS", href: "#" },
    { text: "AKTUALITÁSOK", href: "#" },
    { text: "KÖNYVESPOLC", href: "#" },
    { text: "KAPCSOLAT", href: "#" },
  ];

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full flex bg-blue-main justify-center h-19 gap-8 items-center">
      <div className="hidden md:flex justify-center p-11 gap-8 items-center">
        {menuItems.map((item) => (
          <a
            className="text-lg font-medium font-raleway text-white-text group hover:text-brown-1 cursor-pointer transition-text duration-200"
            key={item.text}
          >
            {item.text}
            <img
              className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              src={underline}
            />
          </a>
        ))}
      </div>

      <div className="md:hidden flex flex-col px-6 py-8 w-full h-full justify-start gap-5 items-end">
        <button
          className="flex flex-col justify-center items-center gap-2 relative z-50"
          onClick={handleOpenMenu}
        >
          <div
            className={`h-px w-6 rounded-l-full ${
              isMenuOpen
                ? "rotate-45 translate-y-[4.5px] bg-blue-main"
                : "bg-white-text"
            } rounded-r-full transition-all duration-300 `}
          ></div>
          <div
            className={`h-px w-6 bg-white-text rounded-l-full ${
              isMenuOpen && "hidden bg-blue-main"
            } rounded-r-full`}
          ></div>
          <div
            className={`h-px w-6 rounded-l-full  ${
              isMenuOpen
                ? "-rotate-45 -translate-y-[4.5px] bg-blue-main"
                : "bg-white-text"
            } rounded-r-full transition-all duration-300 `}
          ></div>
        </button>
        <div
          className={`fixed top-0 right-0 h-screen w-2/3 bg-white-text px-6 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mt-18 flex flex-col gap-5">
            {menuItems.map((item) => (
              <a
                key={item.text}
                className="text-end text-blue-main font-raleway font-lg font-medium"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
