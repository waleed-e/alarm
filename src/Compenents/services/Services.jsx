import { useRef, useState, useEffect } from "react";
import "./services.scss";
import { motion } from "framer-motion";

import next_icon from '../../../assets/next-icon.png';
import back_icon from '../../../assets/back-icon.png';
import user_1 from '../../../assets/user-1.png';
import user_2 from '../../../assets/user-2.png';
import user_3 from '../../../assets/user-3.png';
import user_4 from '../../../assets/user-4.png';

const Services = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const [ImgCount, setImgCount] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgCount((ImgCount) => (ImgCount === 2 ? 0 : ImgCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Wake Up!
          <br /> 
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#fff"}}>Steps</motion.b> of Project
          </h1>
        </div>
      </motion.div>
      <motion.div className="imageContainer" variants={variants}>
        <div className="testimonial">
        <img
            src={next_icon}
            alt=""
            className="next-btn"
            onClick={slideBackward}
            style={{
              position: "fixed",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              padding: "15px",
              width: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              background: "#25bb39",
            }}
          />
 <img
            src={back_icon}
            alt=""
            className="back-btn"
            onClick={slideForward}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              padding: "15px",
              width: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              background: "#25bb39",
            }}
          />          <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_1} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_2} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_3} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img  src={user_4} alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
