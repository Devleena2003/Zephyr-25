// EventsSection.jsx
import React from "react";
import { motion } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// (Icons are no longer needed here)

// Updated event data (from Step 2)
const events = [
  {
    name: "Group Dance",
    imageUrl: "/images/Group-dance-6.png",
    description: "Energetic crew performances.",
  },
  {
    name: "Drama",
    imageUrl: "/images/drama.jpg",
    description: "Compelling stories brought to life.",
  },
  {
    name: "Ramp Walk",
    imageUrl: "/images/Ramp-walk-4.jpg",
    description: "Showcasing style and confidence.",
  },
  {
    name: "Fitoor",
    imageUrl: "/images/Fitoor-1.jpg",
    description: "Rocking tunes and raw energy.",
  },
  {
    name: "Live Music",
    imageUrl: "/images/band-2.png",
    description: "Feel the beat live and loud.",
  },
  {
    name: "DJ Night",
    imageUrl: "/images/dj.jpg",
    description: "Dance till you drop!",
  },
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

const EventsSection = () => {
  return (
    <section
      id="events"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
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
            Events Lineup
          </motion.span>
          {/* Animate "& Memories" */}
        </motion.h2>
        <Swiper
          // Swiper config (keep as before)
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          slidesPerView={"auto"} // Let's try auto again
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 15 },
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="!pb-12 !pt-4"
        >
          {events.map((event, index) => (
            <SwiperSlide
              key={index}
              // --- Styling for the Slide with Background Image ---
              className="group relative rounded-2xl overflow-hidden shadow-xl min-h-[380px] bg-cover bg-center"
              // Apply background image dynamically using inline style (safe for dynamic URLs)
              style={{ backgroundImage: `url(${event.imageUrl})` }}
            >
              {/* --- Overlay for Text Readability --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-2xl transition-colors duration-300 group-hover:from-black/80 group-hover:via-black/60"></div>

              {/* --- Text Content Container --- */}
              {/* Positioned relative to sit above the overlay */}
              <div className="relative z-[1] h-full flex flex-col justify-end p-6 text-white">
                {/* Removed icon */}
                <h3 className="text-xl font-bold mb-2 drop-shadow-md">
                  {" "}
                  {/* Bolder font, drop shadow */}
                  {event.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-200 drop-shadow-md">
                  {" "}
                  {/* Lighter text, drop shadow */}
                  {event.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSection;
