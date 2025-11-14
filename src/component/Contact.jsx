import { motion } from "framer-motion";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import drone from "../assets/drone.png"; 

const Contact = () => {
  const iconVariants = {
    initial: { y: 0, opacity: 0.7 },
    hover: { y: -6, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative w-full py-16 bg-[#0f0f0f] flex justify-center">
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-8">
        
        {/* Your Logo */}
        <div className="flex flex-col items-center">
          <img 
            src={drone} 
            alt="VyomGarud Logo" 
            className="h-10 w-10 mb-1"
          />
          <span className="text-white font-bold text-lg tracking-wide">
            Vyom<span className="text-orange-500">Garud</span>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          {[FaLinkedin, FaYoutube, FaInstagram].map((Icon, i) => (
            <motion.div
              key={i}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="p-3 bg-white/10 border border-white/20 rounded-xl 
                         backdrop-blur-lg cursor-pointer transition-all"
            >
              <Icon className="text-white text-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Contact Line */}
        <p className="text-gray-400 text-center text-sm">
          Or reach us at:{" "}
          <span className="text-orange-500">contact@vyomgarud.com</span>
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-4"></div>

        {/* Footer bottom line */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} VyomGarud. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;


