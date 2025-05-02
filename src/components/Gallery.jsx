// src/components/GallerySection.jsx
import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/gallery/placeholder1.jpg",
  "/images/gallery/placeholder2.jpg",
  "/images/gallery/placeholder3.jpg",
  "/images/gallery/placeholder4.jpg",
  "/images/gallery/placeholder5.jpg",
  "/images/gallery/placeholder6.jpg",
  "/images/gallery/placeholder7.jpg",
  "/images/gallery/placeholder8.jpg",
  "/images/gallery/placeholder9.jpg",
  "/images/gallery/placeholder10.jpg",
  "/images/gallery/placeholder11.jpg",
  "/images/gallery/placeholder12.jpg",
  "/images/gallery/placeholder13.jpg",
  "/images/gallery/placeholder14.jpg",
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
  "/images/gallery/placeholder13.jpg",
  "/images/gallery/placeholder14.jpg",
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
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-gray-800"
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
