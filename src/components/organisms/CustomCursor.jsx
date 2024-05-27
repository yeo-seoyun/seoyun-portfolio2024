import { useEffect } from "react";
import { useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => {
      setIsActive(true);
    };

    const handleMouseOut = () => {
      setIsActive(false);
    };

    window.addEventListener("mousemove", updateCursor);
    document
      .querySelectorAll("a, button, input, textarea, select")
      .forEach((el) => {
        el.addEventListener("mouseover", handleMouseOver);
        el.addEventListener("mouseout", handleMouseOut);
      });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document
        .querySelectorAll("a, button, input, textarea, select")
        .forEach((el) => {
          el.removeEventListener("mouseover", handleMouseOver);
          el.removeEventListener("mouseout", handleMouseOut);
        });
    };
  }, []);

  const cursorStyle = {
    left: `${position.x - 10}px`,
    top: `${position.y - 10}px`,
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9999,
    width: isActive ? "40px" : "20px",
    height: isActive ? "40px" : "20px",
    borderRadius: "50%",
    backgroundColor: "#a8afd8",
    opacity: 0.75,
    transition: "width 0.3s ease, height 0.3s ease",
  };

  return <div className="cursor" style={cursorStyle} />;
};

export default CustomCursor;
