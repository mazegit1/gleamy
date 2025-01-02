import React from "react";
import { motion } from "framer-motion";
import animateCircle from "../images/animate-circle.png";
import animateCircle2 from "../images/animate-circle2.png";

const Main = () => {
  return (
    <motion.div
      className="main px-8 py-32 sm:px-10 md:px-20 lg:px-40 gap-48 w-full h-screen bg-[#000000] flex xl:flex-row flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="main-left mx-auto justify-center">
        <motion.img
          src={animateCircle}
          className="w-[80px] mt-20 ml-20 justify-center sm:w-[100px] h-[80px] sm:h-[100px] absolute top-0 left-0 sm:top-5 sm:left-5"
          alt=""
          whileInView={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="info  rotate-none xl:rotate-[-90deg] flex flex-col sm:flex-row gap-5 sm:gap-10 text-white text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl"
          >
            DEVELOPMENT
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl"
          >
            DESIGNING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl"
          >
            DIGITAL MARKETING
          </motion.h1>
        </div>
      </div>

      <div className="main-middle flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-6xl font-medium text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Brand.<span className="text-gray-400">Design</span>.<span className="text-gray-400">Product</span>.
          <br />
          In-House Development.
          <br />
          &More
        </motion.h1>
      </div>

      <div className="main-right mx-auto justify-center">
        <motion.img
          src={animateCircle2}
          className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] absolute bottom-0 right-0 sm:bottom-5 sm:right-5 mb-20 mr-20"
          alt=""
          whileInView={{ rotate: [0, -360] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default Main;
