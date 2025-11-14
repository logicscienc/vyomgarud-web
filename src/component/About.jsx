import React from "react";
import drone from "../assets/drone.jpeg"; 
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="relative bg-[#121212] w-full h-screen -mt-screen flex items-center"
      style={{ zIndex: 5 }}
    >
      {/* Container */}
      <motion.div
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Left: Drone Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={item}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={drone}
            alt="Drone Illustration"
            className="w-full max-w-md rounded-lg shadow-xl opacity-90"
            variants={item}
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left text-white flex flex-col gap-6"
          variants={item}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase"
            variants={item}
          >
            Precision. Autonomy. Reliability.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300"
            variants={item}
          >
            VyomGarud designs and develops advanced UAV systems engineered for
            precision, reliability, and autonomous operations. Our drones deliver
            mission-critical performance for industrial and defense applications.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;


