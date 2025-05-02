// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

// --- IMPORTANT ---
// Replace with your actual image path in the public folder
const aboutImageUrl = "/images/about_placeholder.jpg"; // Use your actual image path

// --- Framer Motion Variants for Heading Animation ---
const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly adjust stagger time if needed
      delayChildren: 0.5, // Delay start relative to section animation
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 25 }, // Start slightly lower
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15, // Control bounciness
      stiffness: 100, // Control springiness
    },
  },
};
// -------------------------------------------------

const AboutSection = () => {
  return (
    // The section itself doesn't need motion, the inner elements handle it
    <section
      id="about"
      className="py-16 md:py-24 px-4 bg-white overflow-hidden"
    >
      {" "}
      {/* Added overflow-hidden */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {" "}
        {/* Increased gap slightly on larger screens */}
        {/* Image - Already has scroll-triggered animation */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }} // Start slightly further left
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }} // Smoother cubic-bezier ease
        >
          <img
            src={aboutImageUrl}
            alt="About Zephyr Hall Day" // More specific alt text
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[450px] lg:max-h-[500px]"
          />
        </motion.div>
        {/* Content - Already has scroll-triggered animation for the container */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden" // Use variants for orchestration
          whileInView="visible" // Trigger variants when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
          // Removed direct transition from container, handled by variants below
        >
          {/* Animated Heading */}
          <motion.h2
            // Apply container variants to orchestrate word animation
            variants={headingContainerVariants}
            // Large text size, adjust leading if needed
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-tight"
          >
            {/* Animate "About " */}
            <motion.span className="inline-block" variants={wordVariants}>
              About
            </motion.span>

            {/* Animate "Zephyr" */}
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative"
              variants={wordVariants}
            >
              Zephyr
              {/* Animated Underline (Optional but nice) */}
              {/* <motion.span
                className="absolute bottom-[-4px] left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" // Adjusted position/thickness
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 1.0 }} // Delay after text appears
              /> */}
            </motion.span>
          </motion.h2>

          {/* Paragraphs with subtle staggered fade-in using existing container */}
          {/* Note: Changed h3 back to p - assuming it was a paragraph */}
          <motion.p
            className="text-gray-700 mb-4 leading-relaxed text-lg" // Slightly larger text
            variants={wordVariants} // Reuse word variant for simple fade/slide up
          >
            This year's Hall Day theme, "Un-filtered," celebrates authenticity,
            raw talent, and genuine moments. We're stripping away the pretense
            and focusing on the real energy and spirit of our hostel community.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-4 leading-relaxed text-lg"
            variants={wordVariants} // Reuse variant
          >
            Expect performances that are passionate, decor that's creatively
            chaotic, and an atmosphere where everyone feels free to be
            themselves. It's about showcasing who we are, without the edits or
            enhancements.
          </motion.p>
          <motion.p
            className="text-gray-700 leading-relaxed font-semibold text-lg" // Use font-semibold for emphasis
            variants={wordVariants} // Reuse variant
          >
            Join us for a night that's unapologetically real and unforgettable!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
