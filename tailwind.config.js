/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind where your classes are used
  ],
  theme: {
    extend: {
      // You can add your custom theme extensions here later
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Example from previous steps
      },
      animation: {
        // Example from previous steps
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-out-left": "slideOutLeft 0.5s ease-out forwards",
        "expand-fade": "expandFade 2s ease-out infinite",
        // --- New Loader Animations ---
        "rotate-orbit": "rotateOrbit 10s linear infinite", // Logo orbit
        "letter-reveal": "letterReveal 0.6s ease-out forwards", // Text animation
      },
      keyframes: {
        // Example from previous steps
        rotateOrbit: {
          "0%": { transform: "rotate(0deg) translateX(30px) rotate(0deg)" }, // Start slightly offset
          "100%": {
            transform: "rotate(360deg) translateX(30px) rotate(-360deg)",
          }, // Full circle orbit & counter-rotate logo
        },
        letterReveal: {
          // Simple fade-in and slight scale up for text
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        expandFade: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
