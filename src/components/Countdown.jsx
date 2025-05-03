// src/components/CountdownTimer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }); // No dependency array, runs on every render to update every second

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      // Handle potential initial undefined state
      return;
    }

    timerComponents.push(
      <motion.div
        key={interval}
        className="text-center bg-transparent border border-white/50 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mx-2 shadow-lg min-w-[80px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2 + Object.keys(timeLeft).indexOf(interval) * 0.1,
        }}
      >
        <span className="text-3xl md:text-4xl font-bold text-teal-300">
          {String(timeLeft[interval]).padStart(2, "0")}
        </span>
        <span className="block text-xs uppercase tracking-wider mt-1">
          {interval}
        </span>
      </motion.div>
    );
  });

  const allZero = Object.values(timeLeft).every((val) => val === 0);

  return (
    <div className="flex justify-center mt-8">
      {allZero ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-yellow-300 animate-pulse"
        >
          The Day Is Here!
        </motion.div>
      ) : (
        timerComponents
      )}
    </div>
  );
};

export default CountdownTimer;
