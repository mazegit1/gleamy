import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import portfolio from '../images/portfolio.png';

const Portfolio = () => {
  return (
    <div className="portfolio bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 lg:px-24 xl:px-56">
      {/* Left Section */}
      <motion.div
        className="portfolio-left flex-1 flex flex-col items-start justify-center gap-6 md:gap-8"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <div className="title flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">PORTFOLIO</h1>
          <motion.hr
            className="w-12 md:w-16 border-orange-500 rounded-xl"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
        <motion.h1
          className="text-[100px] md:text-[250px] lg:text-[450px] font-extrabold text-transparent leading-none"
          style={{ WebkitTextStroke: '2px orange', WebkitTextFillColor: 'transparent' }}
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          P
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="portfolio-right flex-1 flex flex-col items-center justify-center gap-6 px-4 md:px-8 text-center"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <img
          src={portfolio}
          alt="portfolio"
          className="rounded-2xl pb-6 md:pb-12 max-w-full h-auto object-contain"
        />
        <h1 className="pb-2 md:pb-4 text-2xl md:text-4xl lg:text-6xl font-bold">
          My Personal Portfolio
        </h1>
        <div className="wrapper flex items-center gap-2 md:gap-4 text-orange-500 text-lg md:text-xl lg:text-3xl">
          <a
            href="https://mazeportfolio.netlify.app/"
            className="hover:underline"
          >
            Visit it
          </a>
          <FiArrowRight />
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
