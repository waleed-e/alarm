import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      ref={ref}
    //   animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Commerce</h2>
          <p>
         I CAN HELP YOU TO GROW YOU BUINSINESS AND INCREASE YOU SALES.
          </p>
          <button><a href="https://www.linkedin.com/posts/waleed-elshafey-575987298_i-am-very-happy-to-understand-this-project-activity-7176241303561596929-AefP?utm_source=share&utm_medium=member_desktop">Go</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HEALTH</h2>
          <p>
         I CAN GROW YOUR CLINC AND INCREASE YOUR CLIENTS.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sport</h2>
          <p>
         I CAN GROW YOUR CLUB AND INCREASE YOUR TRAINEES.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Learning</h2>
          <p>
         I CAN GROW YOUR CENTER AND INCREASE YOUR STUDENTS.
          </p>
          <button><a href="https://www.linkedin.com/posts/waleed-elshafey-575987298_i-am-proud-of-implement-this-responsive-web-activity-7175489434371407872-UgiS?utm_source=share&utm_medium=member_desktop">Go</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;