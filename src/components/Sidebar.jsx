// src/components/Sidebar.jsx
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Close Icon
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Logo image
const Sidebar = ({ isOpen, onMenuToggle }) => {
  const sidebarVariants = {
    open: { x: 0, transition: { type: "tween", stiffness: 100 } },
    closed: { x: "-100%", transition: { type: "tween", stiffness: 100 } },
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-30 md:hidden"
          onClick={onMenuToggle}
        ></div>
      )}

      {/* Sidebar */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 z-40 shadow-lg md:hidden`} // Use Framer Motion for animation
      >
        <div className="flex justify-between items-center mb-8">
          <img className="h-20 w-20" src={logo} />
          <button
            onClick={onMenuToggle}
            className="focus:outline-none hover:text-purple-300"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <a
            href="#hero"
            onClick={onMenuToggle}
            className="hover:text-purple-300 transition-colors py-2"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={onMenuToggle}
            className="hover:text-purple-300 transition-colors py-2"
          >
            About
          </a>
          <a
            href="#gallery"
            onClick={onMenuToggle}
            className="hover:text-purple-300 transition-colors py-2"
          >
            Gallery
          </a>
          <a
            href="#events"
            onClick={onMenuToggle}
            className="hover:text-purple-300 transition-colors py-2"
          >
            Events
          </a>
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
