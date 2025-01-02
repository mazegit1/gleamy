import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  const navigate = useNavigate();

  // Redirect to Main after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/main");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <motion.div
      className="banner w-full h-screen bg-[#000000] relative flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
    >
      {/* Main Text with Individual Letter Borders */}
      <motion.h1
        className="absolute text-[450px] mt-[-5%] font-bold text-transparent leading-none"
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        g
      </motion.h1>

      {/* Gleamy Effect Text */}
      <motion.div
        className="absolute text-center text-white text-4xl md:text-6xl lg:text-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Gleamy | Mazegit
      </motion.div>
    </motion.div>
  );
};

export default Banner;
