import Cursor from "../cursor/Cursor";
import "./hero.scss";
import {motion} from "framer-motion";
import { useNavigate  } from "react-router-dom";
import Contact from "../contact/Contact";




const textVariants={
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
            repeat:Infinity,
        },
    },
};
    
const sliderVariants={
    initial:{
        x:-0,
        
    },
    animate:{
        x:"-220%",
        transition:{
            duration:20,
            repeat:Infinity,
            repeatType:"mirror" 
        },
    },
};

const Hero = () => {
    const navigate = useNavigate ();
    const handleClick = () => navigate('/Contact');
   
    

   
  return (
    <div className="hero">
    <div className="wrapper">
    <motion.div 
    className="textContainer" 
    variants={textVariants} 
    initial="initial" 
    animate="animate">

    <motion.h2 variants={textVariants}>ByteWave Software Solution</motion.h2>
    <motion.h1 variants={textVariants}>We help global brands Develop digital world</motion.h1>
     
     <motion.div variants={textVariants} className="buttons">
    <motion.button variants={textVariants} >Latest Work</motion.button>
    <motion.button variants={textVariants} onClick={handleClick} >Contact Me</motion.button>
    </motion.div>
    <motion.img variants={textVariants} animate="scrollButton" src="scroll.png"/>
    </motion.div>
   </div>
   <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
   Mern Stack Developer 


   </motion.div>


    <div className="imageContainer">
    <img src="/build3.png" alt="hero"/>

    </div>
      
    </div>
  )
}

export default Hero
