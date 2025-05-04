// src/components/GallerySection.jsx
import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/band-1.jpg",
  "/images/ramp_2022.jpg",
  "/images/Group-dance-2.jpg",
  "/images/Group-dance-3.jpg",
  "/images/Group-dance-4.jpg",
  "/images/Group-dance-5.jpg",
  "/images/Group-photo-1.jpg",
  "/images/Group-dance.png",
  "/images/ranuka di.jpg",
  "/images/Group-photo-2.jpg",
  "/images/Group-photo-3.jpg",
  "/images/Group-photo-4.jpg",
  "/images/inaug-2.jpg",
  "/images/prachi_di.jpg",
  "/images/batch_2024.jpg",
  "/images/sayantani_bidisha_di.jpg",
  "/images/Group-photo-6.jpg",
  "/images/band-4.jpg",
  "/images/Group-dance-8.jpg",
  "/images/fitoor-2.jpg",
  "/images/Fitoor-3.jpg",
  "/images/band-5.jpg",
  "/images/groupfie.jpg",
  "/images/inaug.jpg",
  "/images/solo_dance.jpg",
  "/images/Group-dance-1.jpg",
  "/images/Group-photo-7.jpg",
  "/images/Fitoor-5.jpg",
];

const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjust timing if needed
      delayChildren: 0.2, // Delay after section starts appearing
    },
  },
};
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24 px-4 bg-black overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={headingContainerVariants}
          initial="hidden" // Use variants for orchestration
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-500 leading-tight"
        >
          <motion.span
            className="mb-5 inline-block relative bg-clip-text text-transparent  bg-gradient-to-r from-teal-200 via-teal-500 to-teal-800"
            variants={wordVariants}
          >
            Glimpses & Memories
          </motion.span>
          {/* Animate "& Memories" */}
        </motion.h2>

        <motion.div
          className="honeycomb-grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              className="h-hexagon shadow-lg"
              variants={itemVariants}
            >
              <img
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
