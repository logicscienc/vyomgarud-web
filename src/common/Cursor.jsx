import React, { useEffect, useRef } from "react";
import "./Cursor.css"; 

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && cursorInnerRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        cursorInnerRef.current.style.left = `${e.clientX}px`;
        cursorInnerRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-inner" ref={cursorInnerRef}></div>
    </>
  );
};

export default Cursor;
