import React, { useRef } from "react";
import logo from "../assets/logos/navlogo.png";

const NavBar = () => {
  const ref = useRef();

  const toogleNav = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="bg-[#151515]" id="#">
      <nav className="px-4 sm:px-32 py-3 flex items-center justify-between">
        <img src={logo} alt="" className="h-10 filter invert" />
        <ul className="sm:flex items-center space-x-4 hidden">
          <a href="#" className="text-white hover:text-[#7ee6c6]">
            <li>Home</li>
          </a>
          <a href="#services" className="text-white hover:text-[#7ee6c6]">
            <li>Services</li>
          </a>
          <a href="#about" className="text-white hover:text-[#7ee6c6]">
            <li>About</li>
          </a>
          <a href="#contact" className="text-white hover:text-[#7ee6c6]">
            <li>Contact Us</li>
          </a>
        </ul>

        {/* For small devices */}
        <div className="bars space-y-1 sm:hidden" onClick={toogleNav}>
          <div className="bar w-6 h-0.5 bg-white"></div>
          <div className="bar w-6 h-0.5 bg-white"></div>
          <div className="bar w-6 h-0.5 bg-white"></div>
        </div>

        <div
          className="sidebar absolute top-0 right-0 bg-[#91a8da] p-10 h-full z-10 border-l transition-transform translate-x-full transform shadow-2xl sm:hidden"
          ref={ref}
        >
          <ul className="flex flex-col">
            <button className="" onClick={toogleNav}>
              X
            </button>
            <a href="#" className="text-white hover:text-[#7ee6c6]">
              <li>Home</li>
            </a>
            <a href="#services" className="text-white hover:text-[#7ee6c6]">
              <li>Services</li>
            </a>
            <a href="#about" className="text-white hover:text-[#7ee6c6]">
              <li>About</li>
            </a>
            <a href="#contact" className="text-white hover:text-[#7ee6c6]">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
