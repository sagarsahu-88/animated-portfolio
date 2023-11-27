import { useRef } from "react";
import "./services.scss";
import {useInView, motion} from "framer-motion";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },

};
const Services = () => {
    const ref=useRef()
    const isInView=useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
    <motion.div className="textContainer" variants={variants}>
    <p>
    I focus on your brand grow
    <br/>and move forward
    </p>
    <hr/>

    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
        <div className="title">
        <img src="/people.webp" alt="title"/>
        <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b>  Ideas</h1>

        </div>
        <div className="title">
        
        <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
        <motion.button  whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>WHAT WE DO?</motion.button>

        </div>
    </motion.div>
    <motion.div className="listContainer">
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Branding</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Branding</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Branding</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Branding</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <button>Go</button>
        </motion.div>
    </motion.div>
      
    </motion.div>
  )
};

export default Services;
