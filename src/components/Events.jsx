// EventsSection.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  MusicalNoteIcon,
  FilmIcon,
  UserGroupIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

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
    description: "Feel the beat live and loud.",
  },
  {
    name: "DJ Night",
    icon: SpeakerWaveIcon,
    description: "Dance till you drop!",
  },
];

const EventsSection = () => {
  const swiperRef = useRef(null);

  return (
    <section id="events" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Event Lineup
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1.2 : 2.5}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="px-10"
          >
            {events.map((event) => (
              <SwiperSlide
                key={event.name}
                className="w-[220px] h-[320px] bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 flex items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <event.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">{event.description}</p>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
