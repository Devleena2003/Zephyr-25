// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

// --- IMPORTANT ---
// Replace with your actual image path in the public folder
const aboutImageUrl = "/images/about_placeholder.jpg";
// Make sure you have a 'public/images' folder

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% visible
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={aboutImageUrl}
            alt="Hall Day Theme - Un-filtered"
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[450px]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            About <span className="text-purple-600">Un-filtered</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            This year's Hall Day theme, "Un-filtered," celebrates authenticity,
            raw talent, and genuine moments. We're stripping away the pretense
            and focusing on the real energy and spirit of our hostel community.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Expect performances that are passionate, decor that's creatively
            chaotic, and an atmosphere where everyone feels free to be
            themselves. It's about showcasing who we are, without the edits or
            enhancements.
          </p>
          <p className="text-gray-600 leading-relaxed font-medium">
            Join us for a night that's unapologetically real and unforgettable!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
