import React, { useState, useRef } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleMouseMove = (event) => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  return (
    <>
      <div
        ref={elementRef}
        onMouseMove={handleMouseMove}
        className="h-full bg-white/70 backdrop-blur-3xl absolute w-full z-50"
      >
        {/* <p>Cursor Position (relative to this div):</p>
      <p>X: {position.x}, Y: {position.y}</p> */}

      </div>
        <div
          className="bg-red-300 w-40 h-40 rounded-full -z-40"
          style={{
            position: "relative",
            top: position.y -100,
            left: position.x-100,
          }}
        ></div>
    </>
  );
}

export default Cursor;
