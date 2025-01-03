import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="services bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
      {/* Left Section */}
      <motion.div
        className="services-left flex-1 flex flex-col items-start justify-center gap-4 md:gap-6 lg:gap-8 text-center md:text-left"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <div className="title flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">SERVICES</h1>
          <motion.hr
            className="w-12 md:w-16 border-orange-500 rounded-xl mx-auto md:mx-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
        <motion.h1
          className="text-[80px] sm:text-[120px] md:text-[250px] lg:text-[450px] font-extrabold text-transparent leading-none"
          style={{ WebkitTextStroke: '2px orange', WebkitTextFillColor: 'transparent' }}
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          S
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <div className="services-right flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 px-4">
        {['Brand Identity', 'Technology', 'UX/UI Design'].map((service, index) => (
          <div
            key={index}
            className="service flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 max-w-sm"
          >
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">{service}</h1>
            <h3 className="text-sm md:text-base text-gray-400 leading-relaxed">
              Bringing the history of your brand to the forefront gives an emotional dimension
              to your visual identity, which is essential today more than ever in today's digital landscape.
            </h3>
            <a className="text-orange-500 text-sm md:text-base hover:underline" href="/services">
              Know More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
