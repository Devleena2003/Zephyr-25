// src/components/HeroSection.jsx
import React from "react";
import CountdownTimer from "./Countdown";
import { motion } from "framer-motion";
import heroBgVideo from "../assets/herobg.mp4";
// --- IMPORTANT ---
// Replace this with the actual path to your background video

// Make sure you have a 'public/videos' folder and place your video there.
// Use a relatively small, optimized video for web use.

const HeroSection = () => {
  // --- SET YOUR EVENT DATE HERE ---
  const eventDate = "2025-05-10T18:00:00"; // Example: December 15th, 2024 at 6:00 PM

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile playback
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={heroBgVideo}
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Zephyr
          </span>
          {/* 2025 */}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Get ready for a night of raw talent, authentic vibes, and pure
          celebration. No filters, just fun!
        </motion.p>

        <CountdownTimer targetDate={eventDate} />
      </div>
      {/* Optional: Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <svg
            className="w-8 h-8 text-white animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
