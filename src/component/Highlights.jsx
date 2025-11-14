import { motion } from "framer-motion";
import Car from "../assets/car.webm";

const bulletPoints = [
  "Military-grade Precision in every UAV.",
  "Advanced Autonomous Flight Systems.",
  "Robust & Reliable under extreme conditions.",
];

const Highlights = () => {
  // Variants for smooth fade-in animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#121212]">
      {/* Animated Glassmorphic box */}
      <motion.div
        className="w-full max-w-[1600px] h-4/5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex flex-col items-center justify-center p-8 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Animated title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center uppercase text-white"
          animate={{
            color: ["#ff7b00", "#ffffff", "#ff7b00", "#ffffff"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          PRECISION ENGINEERING. AUTONOMOUS FLIGHT. MISSION READY.
        </motion.h1>

        {/* Bullet points */}
        <motion.ul
          className="mt-4 text-white text-lg md:text-xl list-disc list-inside space-y-2"
          variants={containerVariants}
        >
          {bulletPoints.map((point, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              {point}
            </motion.li>
          ))}
        </motion.ul>

        {/* Video inside box */}
        <motion.div
          className="w-full h-2/3 mt-4 rounded-lg overflow-hidden"
          variants={itemVariants}
        >
          <video
            className="w-full h-full object-cover"
            src={Car}
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Highlights;


