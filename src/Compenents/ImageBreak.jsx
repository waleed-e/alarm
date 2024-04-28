import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Servo from '../../public/hh.png';

const ImageBreak = () => {
  const [broken, setBroken] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleBreak = () => {
    setBroken(!broken); // Toggle the broken state
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: isMobile ? "290px" : "500px",
        height: "auto",
        marginLeft: isMobile ? "40px" : "100px",
      }}
    >
      {broken ? (
        <React.Fragment>
          {[...Array(16)].map((_, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                width: "75px",
                height: "75px",
                backgroundImage: `url(${Servo})`,
                backgroundPosition: `-${(index % 4) * 75}px -${Math.floor(
                  index / 4
                ) * 75}px`,
              }}
              animate={{ 
                x: (index % 4) * -300 + Math.random() * 100 - 50,
                y: Math.floor(index / 4) * 75 + Math.random() * 100 - 50,
                opacity: 0,
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          ))}
        </React.Fragment>
      ) : (
        <motion.img
          src={Servo}
          alt="your-image"
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
          onClick={handleBreak}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      )}
    </div>
  );
};

export default ImageBreak;
