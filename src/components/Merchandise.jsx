// src/components/MerchandiseSection.jsx
import React from "react";
import { motion } from "framer-motion";

// --- IMPORTANT: Update this path ---
// If using CDN:
// const cdnBaseUrl = import.meta.env.VITE_CDN_BASE_URL || "";
// const merchandiseImageUrl = `${cdnBaseUrl}images/merchandise/zephyr-tshirt.jpg`; // Example CDN path

// If using local 'public' folder:
const merchandiseImageUrl = "/images/merchandise.png"; // Example local public path

// --- Framer Motion Variants (Can reuse from AboutSection or define new ones) ---
const sectionContainerVariants = {
  // For the overall section content
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  // For individual elements like text or image
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};
// -------------------------------------------------

const MerchandiseSection = () => {
  return (
    <section
      id="merchandise"
      className=" py-16 md:py-24 px-4 bg-black overflow-hidden"
    >
      {" "}
      {/* Light background for this section */}
      <div className="p-8 container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Merchandise Image */}

        {/* Content */}
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-none"
          variants={sectionContainerVariants} // Use container variants to stagger children
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            // Use a distinct heading color if needed, or keep consistent
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-800 leading-tight"
            variants={itemVariants} // Animate heading as one block
          >
            <span
              className="
              bg-gradient-to-r from-teal-200 via-teal-500 to-teal-800
              bg-clip-text text-transparent
            "
            >
              Grab Your Merchandise
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-500 mb-4 leading-relaxed text-lg"
            variants={itemVariants}
          >
            Get the official Zephyr '25 T-shirt! Designed with the unique spirit
            of Pritilata Chhatrinibas, this limited-edition tee is the perfect
            way to carry a piece of the celebration with you.
          </motion.p>
          <motion.p
            className="text-gray-300 mb-6 leading-relaxed text-lg"
            variants={itemVariants}
          >
            Our merch is designed to remind you of the unforgettable moments and
            lasting friendships made at Pritilata Chhatrinibas. Made with
            comfortable fabric and featuring an exclusive "Unfiltered" design.
            Wear your memories and show your support! To pre-order or inquire,
            contact us at +919875336211
          </motion.p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-none" // Control order for layout variation if desired
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={merchandiseImageUrl}
            alt="Zephyr Hall Day Merchandise"
            className="rounded-lg shadow-xl w-full h-auto object-contain max-h-[450px] lg:max-h-[500px]" // object-contain might be better for product shots
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
