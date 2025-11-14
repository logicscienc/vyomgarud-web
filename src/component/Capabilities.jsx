import { useState } from "react";
import { FaSatellite, FaCogs, FaBox } from "react-icons/fa";
import { motion } from "framer-motion";
import FBI from "../assets/FBI.mp4";

const capabilities = [
  {
    title: "Autonomous Navigation",
    description:
      "VyomGarud UAVs navigate complex environments with precision and reliability.",
    icon: <FaSatellite size={50} className="text-orange-500" />,
  },
  {
    title: "Advanced Sensors",
    description:
      "Equipped with cutting-edge sensors for high-accuracy data collection.",
    icon: <FaCogs size={50} className="text-orange-500" />,
  },
  {
    title: "Heavy Payloads",
    description:
      "Carry industrial and defense payloads without compromising performance.",
    icon: <FaBox size={50} className="text-orange-500" />,
  },
];

const Capabilities = () => {
  const [hovered, setHovered] = useState(null);

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  return (
    <section
      id="capabilities"
      className="relative w-full min-h-screen flex items-center justify-center py-24 bg-black/90"
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={FBI}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Cards container */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 px-4">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            className="relative"
          >
            {/* Keep hover animation intact */}
            <div
              className={`animated_card cursor-pointer group ${
                hovered === idx ? "tilted" : ""
              }`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animated overlay - glass version */}
              <div className="animated-card-before h-[500px] w-[350px] bg-white/10 backdrop-blur-lg z-[1] rounded-[16px] group-hover:h-[508px] group-hover:w-[358px] animate-rotate360" />

              {/* Card content */}
              <div className="h-[500px] w-[350px] rounded-[16px] z-[10] flex flex-col items-center justify-center bg-black/30 p-6 text-center">
                <div className="mb-6">{cap.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:animate-textRotation">
                  {cap.title}
                </h2>
                <p className="text-gray-300">{cap.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;



