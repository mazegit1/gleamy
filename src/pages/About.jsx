import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12">
      {/* Left Section */}
      <motion.div
        className="about-left flex-1 flex flex-col items-center md:items-start justify-center gap-6 sm:gap-8"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <div className="title flex flex-col gap-2 sm:gap-4 items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
            ABOUT US
          </h1>
          <motion.hr
            className="w-12 sm:w-16 border-orange-500 rounded-xl"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
        <motion.h1
          className="text-[120px] sm:text-[200px] md:text-[450px] font-extrabold text-transparent leading-none"
          style={{
            WebkitTextStroke: '2px orange',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          g
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="about-right flex-1 flex flex-col items-center md:items-start justify-center gap-4 sm:gap-6 px-2 sm:px-6 md:px-0"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <motion.h1
          className="uppercase text-xl sm:text-2xl md:text-4xl font-bold text-center md:text-left"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          We are a digital production team.
        </motion.h1>
        <motion.h3
          className="uppercase text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Gleamy is a leading design & software development agency based in
          Berlin. We help startups & Fortune 500 companies delight humans on
          the other side of the screen.
        </motion.h3>
        <motion.a
          href="/services"
          className="flex hover:bg-orange-500 border border-orange-500 px-4 py-3 sm:py-4 rounded-3xl text-orange-500 hover:text-white transition-all ease-in-out duration-300 items-center gap-2 text-sm sm:text-base md:text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Contact Us <FiArrowRight />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
