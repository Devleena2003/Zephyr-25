// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-center items-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
      <p className="text-white text-xl font-semibold animate-pulse">
        Loading Un-filtered Vibes...
      </p>
    </div>
  );
};

export default Loader;
