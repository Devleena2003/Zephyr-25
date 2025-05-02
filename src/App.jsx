// src/App.jsx
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import GallerySection from "./components/Gallery";
import Footer from "./components/Footer";
import EventsSection from "./components/Events";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust loading time as needed (e.g., 2000ms = 2 seconds)

    // Cleanup the timer if the component unmounts early
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once on mount

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar onMenuToggle={handleMenuToggle} />
      <Sidebar isOpen={isSidebarOpen} onMenuToggle={handleMenuToggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
