import ImageBreak from '../ImageBreak';
import './hero.scss'
import {motion} from 'framer-motion'
const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const sliderVariants = {
    initial:{
        x:0,
        
    },
    animate:{
        x:"220%",
        transition:{
            repeat:Infinity,
            duration:20,
        },
    },
};


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}></motion.h2>
            <motion.h1 variants={textVariants}>BOXING ALARM</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <a href="https://www.linkedin.com/in/waleed-elshafey-575987298/"><motion.button variants={textVariants}>WHAT WE DID ??</motion.button>
</a>
                {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className='slidingTextContainer'  variants={sliderVariants} initial="initial" animate="animate">
            Why Team
        </motion.div>
        <div className="imageContainer">
<ImageBreak/>
        </div>
    </div>
  )
}

export default Hero