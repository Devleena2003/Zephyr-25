// src/components/Navbar.jsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Hamburger Icon
// Logo image
import logo2 from "../assets/zephyr w.png"; // Logo image
const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm text-white p-4 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#hero"
          className="items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          <img className="h-20 w-25" src={logo2} />
        </a>
        {/* Desktop Menu (Hidden for now, focus on sidebar for mobile-first) */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-teal-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-teal-300 transition-colors">
            About
          </a>
          <a href="#gallery" className="hover:text-teal-300 transition-colors">
            Gallery
          </a>
          <a href="#events" className="hover:text-teal-300 transition-colors">
            Events
          </a>
        </div>
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={onMenuToggle}
            className="text-white focus:outline-none hover:text-teal-300"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
