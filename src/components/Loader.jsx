// src/components/Loader.jsx
import React from "react";

// --- IMPORTANT: Update this path to match your logo in the 'public' folder ---
const logoUrl = "/images/zw.png"; // Example path

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1a1a2e] via-gray-900 to-[#1a1a2e] flex flex-col justify-center items-center z-[9999]">
      {" "}
      {/* Ensure highest z-index */}
      {/* Logo and Animated Rings Container */}
      <div className="relative flex justify-center items-center w-48 h-48 mb-6">
        {/* Expanding Ring 1 (Outer) */}
        <div
          className="absolute inset-0 m-auto w-full h-full rounded-full border-2 border-purple-500 opacity-0 animate-expand-fade"
          style={{ animationDelay: "0s", willChange: "transform, opacity" }} // will-change for performance hint
        ></div>

        {/* Expanding Ring 2 (Middle) */}
        <div
          className="absolute inset-0 m-auto w-full h-full rounded-full border-2 border-pink-500 opacity-0 animate-expand-fade"
          style={{ animationDelay: "0.5s", willChange: "transform, opacity" }}
        ></div>

        {/* Expanding Ring 3 (Inner) */}
        <div
          className="absolute inset-0 m-auto w-full h-full rounded-full border-2 border-red-500 opacity-0 animate-expand-fade"
          style={{ animationDelay: "1s", willChange: "transform, opacity" }}
        ></div>

        {/* Your Logo */}
        <img
          src={logoUrl}
          alt="Loading Logo"
          className="relative z-10 w-20 h-20 md:w-24 md:h-24 object-contain animate-pulse-slow" // Apply slower pulse
        />
      </div>
      {/* Loading Text */}
      <p className="text-white text-xl font-semibold text-center px-4">
        <span className="animate-pulse">Powering</span>
        <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>
          {" "}
          Up the
        </span>
        <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
          {" "}
          Vibes...
        </span>
      </p>
    </div>
  );
};

export default Loader;
