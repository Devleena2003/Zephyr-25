// src/components/Footer.jsx
import React from "react";

import logo1 from "../assets/logo.png"; // Logo image
import logo2 from "../assets/zephyr w.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-6 flex justify-center items-center gap-4">
          {" "}
          {/* Added margin-bottom */}
          {/* Logo 1 */}
          <img
            src={logo1}
            alt="Pritilata Logo"
            className="h-20 w-20" // Adjust size as needed
          />
          {/* Separator Line */}
          <div className="h-15  mt-5 w-px bg-gray-600"></div>{" "}
          {/* Adjust height and color */}
          {/* Logo 2 */}
          <img
            src={logo2}
            alt="Zephyr Logo"
            className="h-20 w-25 mt-3" // Adjust size as needed
          />
        </div>
        <h2 className="mb-2 text-lg font-semibold bg-clip-text text-transparent  bg-gradient-to-r from-teal-200 via-teal-500 to-teal-800">
          Zephyr 2025
        </h2>
        <p className="text-sm">
          © {currentYear} Pritilata Chhatrinibas. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">Website crafted with ❤️</p>
        {/* Optional: Add social links or contact info here */}
        <div className="mt-4 flex justify-center space-x-4">
          {/* Example Links - Replace # with actual links */}
          <a
            href="https://www.facebook.com/ZephyrPC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 512 512"
            >
              {/* Facebook Icon: Blue circle with white "f" */}
              <circle cx="256" cy="256" r="256" fill="#1877F2" />
              <path
                d="M355.7 170.7h-52.5v-35.3c0-12.9 8.5-15.9 14.5-15.9h36.8V73.6l-50.7-.2c-56.2 0-69.3 42.1-69.3 69.2v28.1h-42.6v57.8h42.6v151.5h64.8V228.5h45.1l7.2-57.8z"
                fill="#fff"
              />
            </svg>
          </a>

          {/* Add more social icons (Facebook, Twitter, etc.) */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
