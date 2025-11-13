import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import drone from "../assets/drone.png";
import Button from "../common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/20 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img src={drone} alt="VyomGarud Logo" className="h-10 w-10 mb-1" />
            <span className="text-white font-bold text-lg">VyomGarud</span>
          </div>

          {/* Desktop Nav items */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li><a href="#hero" className="hover:text-orange-500 transition">Hero</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#capabilities" className="hover:text-orange-500 transition">Capabilities</a></li>
            <li><a href="#highlights" className="hover:text-orange-500 transition">Highlights</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>

          {/* Desktop CTA Button */}
           <div className="hidden md:inline-block">
            <Button>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 right-4 w-72 bg-white/20 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-start p-4 space-y-4 z-50">
          <a href="#hero" className="flex items-center space-x-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Hero</a>
          <a href="#about" className="flex items-center space-x-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#capabilities" className="flex items-center space-x-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Capabilities</a>
          <a href="#highlights" className="flex items-center space-x-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Highlights</a>
          <a href="#contact" className="flex items-center space-x-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Contact</a>

           <Button className="w-full mt-2">
            Get in Touch
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;


