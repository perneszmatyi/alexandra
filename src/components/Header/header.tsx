import underline from '@/assets/underline.svg';

import { useEffect, useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: 'RÓLAM', href: '#about' },
    { text: 'BEJELENTKEZÉS', href: '#login' },
    { text: 'AKTUALITÁSOK', href: '#news' },
    { text: 'KÖNYVESPOLC', href: '#books' },
    { text: 'KAPCSOLAT', href: '#contact' },
  ];
  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav id="header" className="z-99 flex h-18 w-full items-center justify-center gap-8 lg:h-27">
      <div className="hidden items-center justify-center gap-8 p-11 md:p-0 lg:flex">
        {menuItems.map((item) => (
          <a
            className="font-raleway text-white-text group hover:text-brown-1 transition-text cursor-pointer text-lg font-medium duration-200"
            key={item.text}
            href={item.href}
          >
            {item.text}
            <img
              className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              src={underline}
            />
          </a>
        ))}
      </div>

      <div className="flex h-full w-full flex-col items-end justify-center gap-5 px-6 lg:hidden">
        <button
          className={`z-50 flex flex-col items-center justify-center gap-2 ${
            isMenuOpen ? 'fixed top-6 right-6' : 'relative'
          }`}
          onClick={handleOpenMenu}
        >
          <div
            className={`h-px w-6 rounded-l-full ${
              isMenuOpen ? 'bg-blue-main translate-y-[4.5px] rotate-45' : 'bg-white-text'
            } rounded-r-full transition-all duration-300`}
          ></div>
          <div
            className={`bg-white-text h-px w-6 rounded-l-full ${
              isMenuOpen && 'bg-blue-main hidden'
            } rounded-r-full`}
          ></div>
          <div
            className={`h-px w-6 rounded-l-full ${
              isMenuOpen ? 'bg-blue-main -translate-y-[4.5px] -rotate-45' : 'bg-white-text'
            } rounded-r-full transition-all duration-300`}
          ></div>
        </button>
        <div
          className={`bg-white-text fixed top-0 right-0 h-screen w-2/3 transform px-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="mt-18 flex flex-col gap-5">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="text-blue-main font-raleway font-lg text-end font-medium"
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
