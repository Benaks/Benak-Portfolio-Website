import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const eczarFontStyle = {
    fontFamily: "Eczar, sans-serif",
  };

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "potfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className=" z-10 font-poppins flex justify-between items-center mx-auto w-full h-20 px-4 text-white bg-[#070a0a] fixed">
      <div>
        <h1
          style={eczarFontStyle}
          className=" cursor-pointer ml-2 text-2xl text-gray-500 bg-gradient-to-r from-slate-500 to-red-300 hover:text-transparent duration-300 bg-clip-text"
        >
          DevBenak
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 hover:scale-105 cursor-pointer capitalize  text-gray-500
          bg-gradient-to-r from-slate-700 to-red-200 hover:text-transparent duration-300 bg-clip-text"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-700">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize py-6 text-3xl bg-gradient-to-r from-slate-700 to-red-300 bg-clip-text text-transparent"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
