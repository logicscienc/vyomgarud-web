import React, { useEffect, useState } from "react";
import bgVideo from "../assets/bgVideo.mp4";
import Button from "../common/Button";

const Hero = () => {
  const titleLines = ["AUTONOMOUS", "UAV", "SYSTEMS"];
  const [displayText, setDisplayText] = useState(
    titleLines.map(line => Array(line.length).fill(""))
  );
  const [showButton, setShowButton] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Blinking Text Animation
  useEffect(() => {
  let currentText = titleLines.map(line => Array(line.length).fill(""));
  let remainingIndices = titleLines.map(line => line.split("").map((_, i) => i));
  let lineIndex = 0;

  const animateLine = () => {
    if (lineIndex >= titleLines.length) {
      setShowButton(true);
      return;
    }

    let lineRemaining = [...remainingIndices[lineIndex]];

    const interval = setInterval(() => {
      if (lineRemaining.length === 0) {
        clearInterval(interval);
        lineIndex++;
        animateLine();
        return;
      }

      const randIndex = Math.floor(Math.random() * lineRemaining.length);
      const letterIndex = lineRemaining[randIndex];

      
      if (!currentText[lineIndex] || currentText[lineIndex][letterIndex] === undefined) {
        clearInterval(interval);
        return;
      }

      let flashes = 3;

      const flashInterval = setInterval(() => {

        if (!currentText[lineIndex] || currentText[lineIndex][letterIndex] === undefined) {
          clearInterval(flashInterval);
          return;
        }

        currentText[lineIndex][letterIndex] =
          Math.random() > 0.5
            ? titleLines[lineIndex][letterIndex]
            : String.fromCharCode(33 + Math.floor(Math.random() * 94));

        setDisplayText(currentText.map(line => [...line]));
        flashes--;

        if (flashes <= 0) {
          clearInterval(flashInterval);
          currentText[lineIndex][letterIndex] = titleLines[lineIndex][letterIndex];
          setDisplayText(currentText.map(line => [...line]));
        }
      }, 100);

      lineRemaining.splice(randIndex, 1);
    }, 200);
  };

  animateLine();

  return () => {
  
    clearInterval();
  };
}, [titleLines]);


  // Cursor effect
  useEffect(() => {
    const moveCursor = e => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center space-y-4">
        {displayText.map((line, index) => (
          <h1
            key={index}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wide uppercase opacity-0 animate-fadeIn"
            style={{ lineHeight: "1.1" }}
          >
            {line.join("")}
          </h1>
        ))}

        {/* CTA Button with hover glow */}
        {showButton && (
          <Button className="mt-6 opacity-0 animate-fadeIn delay-500 relative px-8 py-3 text-xl text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_#ff7b00] transition-all duration-300">
            Explore UAV Technology
          </Button>
        )}
      </div>

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed w-6 h-6 bg-orange-600 rounded-full mix-blend-screen z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;





