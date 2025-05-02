// src/components/EventsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  MusicalNoteIcon,
  FilmIcon,
  UserGroupIcon,
  SparklesIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline"; // Example Icons

const events = [
  {
    name: "Group Dance",
    icon: UserGroupIcon,
    description: "Energetic crew performances.",
  },
  {
    name: "Drama",
    icon: FilmIcon,
    description: "Compelling stories brought to life.",
  },
  {
    name: "Ramp Walk",
    icon: SparklesIcon,
    description: "Showcasing style and confidence.",
  },
  {
    name: "Fitoor",
    icon: MusicalNoteIcon,
    description: "Rocking tunes and raw energy.",
  },

  {
    name: "Live Band",
    icon: MusicalNoteIcon,
    description: "Rocking tunes and raw energy.",
  },
  {
    name: "DJ Night",
    icon: SpeakerWaveIcon,
    description: "Dance till you drop!",
  },
];

const EventsSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="events" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Event Lineup
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }} // Stagger based on index
            >
              <event.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {event.name}
              </h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
