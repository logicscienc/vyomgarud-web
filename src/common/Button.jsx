import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-6 py-3 font-semibold text-white border-2 border-orange-500 rounded-lg overflow-hidden shadow-md group ${className}`}
    >
      {/* Animated background */}
      <span className="absolute left-0 top-0 w-0 h-full bg-orange-500 transition-all duration-300 ease-out group-hover:w-full z-0"></span>

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
