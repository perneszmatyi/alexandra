import underline from "../../assets/underline.svg";

export const Header = () => {
  return (
    <nav className="bg-blue-main w-full p-11 flex justify-center gap-8 items-center">
      <a className=" text-lg font-medium font-raleway text-lg text-white-text group hover:text-brown-1 cursor-pointer transition-all duration-200">
        RÓLAM
        <img
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
          src={underline}
        />
      </a>
      <a className="text-lg font-medium font-raleway text-lg text-white-text group hover:text-brown-1 cursor-pointer transition-all duration-200">
        BEJELENTKEZÉS
        <img
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
          src={underline}
        />
      </a>
      <a className="text-lg font-medium font-raleway text-lg text-white-text group hover:text-brown-1 cursor-pointer transition-all duration-200">
        AKTUALITÁSOK
        <img
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
          src={underline}
        />
      </a>
      <a className="text-lg font-medium font-raleway text-lg text-white-text group hover:text-brown-1 cursor-pointer transition-all duration-200">
        KÖNYVESPOLC
        <img
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
          src={underline}
        />
      </a>
      <a className="text-lg font-medium font-raleway text-lg text-white-text group hover:text-brown-1 cursor-pointer transition-all duration-200">
        KAPCSOLAT
        <img
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
          src={underline}
        />
      </a>
    </nav>
  );
};
