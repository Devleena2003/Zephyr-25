// src/components/GallerySection.jsx
import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/band-1.jpg",
  "/images/emceeing-1.jpg",
  "/images/Group-dance-2.jpg",
  "/images/Group-dance-3.jpg",
  "/images/Group-dance-4.jpg",
  "/images/Group-dance-5.jpg",
  "/images/Group-photo-1.jpg",
  "/images/Group-dance.png",
  "/images/Group-photo-5.jpg",
  "/images/Group-photo-2.jpg",
  "/images/Group-photo-3.jpg",
  "/images/Group-photo-4.jpg",
  "/images/Ramp-walk-1.jpg",
  "/images/Ramp-walk-2.jpg",
  "/images/Ramp-walk-3.jpg",
  "/images/Ramp-walk-4.jpg",
  "/images/Group-photo-6.jpg",
  "/images/gallery/placeholder15.jpg",
  "/images/gallery/placeholder13.jpg",
  "/images/gallery/placeholder14.jpg",
  "/images/gallery/placeholder15.jpg",
  "/images/gallery/placeholder13.jpg",
  "/images/gallery/placeholder14.jpg",
  "/images/gallery/placeholder15.jpg",
  "/images/gallery/placeholder13.jpg",
  "/images/gallery/placeholder14.jpg",
  "/images/gallery/placeholder15.jpg",
  "/images/gallery/placeholder15.jpg",
];

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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 bg-clip-text text-transparent  bg-gradient-to-r from-teal-200 via-teal-500 to-teal-800"
        >
          Glimpses & Memories
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
