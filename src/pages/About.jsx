import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-8">
      {/* Left Section */}
      <motion.div
        className="about-left flex-1 flex flex-col items-start justify-center gap-8"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <div className="title flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold">ABOUT US</h1>
          <motion.hr
            className="w-16 border-orange-500 rounded-xl"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
        <motion.h1
          className="text-[200px] md:text-[450px] font-extrabold text-transparent leading-none"
          style={{ WebkitTextStroke: '2px orange', WebkitTextFillColor: 'transparent' }}
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          g
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="about-right flex-1 flex flex-col items-start justify-center gap-6"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <motion.h1
          className="uppercase text-2xl md:text-4xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          We are a digital production team.
        </motion.h1>
        <motion.h3
          className="uppercase text-lg md:text-xl font-light leading-relaxed"
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
          className="flex hover:bg-transparent hover:backdrop-blur-xl border border-orange-500 px-4 hover:bg-orange-500 hover:border-black  py-4 rounded-3xl hover:text-4xl transition-all ease-in-out duration-300 hover:text-white hover:px-12 items-center gap-2 text-orange-500 text-lg md:text-xl font-medium "
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
