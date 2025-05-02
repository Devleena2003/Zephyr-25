// src/components/GallerySection.jsx
import React from "react";
import { motion } from "framer-motion";

// --- IMPORTANT ---
// Replace with your actual image paths
const galleryImages = [
  "/images/gallery/placeholder1.jpg",
  "/images/gallery/placeholder2.jpg",
  "/images/gallery/placeholder3.jpg",
  "/images/gallery/placeholder4.jpg",
  "/images/gallery/placeholder5.jpg",
  "/images/gallery/placeholder6.jpg",
  "/images/gallery/placeholder7.jpg",
  "/images/gallery/placeholder8.jpg",
];
// Make sure you have a 'public/images/gallery' folder

const GallerySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
        >
          Glimpses & Memories
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when container is in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% visible
        >
          {galleryImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              variants={itemVariants} // Use item variants for individual animation
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy" // Lazy load images
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
