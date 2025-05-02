// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="mb-2 text-lg font-semibold text-purple-300">
          Zephyr 2025
        </p>
        <p className="text-sm">
          © {currentYear} Pritilata Chhatrinibas. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">Website crafted with ❤️!</p>
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
