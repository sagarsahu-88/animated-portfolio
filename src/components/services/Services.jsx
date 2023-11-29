import { useRef } from "react";
import "./services.scss";
import {useInView, motion} from "framer-motion";
import Branding from "../branding/Branding";

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
        <motion.button>WHAT WE DO?</motion.button>

        </div>
    </motion.div>
    <motion.div className="listContainer">
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>UI/UX Design</h2>
        <p>A good web design can transform how your brand speaks to your audience. We focus on your web design more than ever and look for professional and smooth design .</p>
        <button> <a href="../branding/Branding">Go</a></button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Web & Mobile Application</h2>
        <p>A good  application combines great design with functionality, and business needs with long-term objectives—improving business processes and building better customer relationships.</p>
        <button><a href="https://powerapps.microsoft.com/en-us/what-makes-a-good-app/">Go</a></button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Digital Marketing</h2>
        <p>digital marketing encompasses everything from web design, search engine optimization (SEO), pay-per-click (PPC) advertising, content creation, and management and social media management.</p>
        <button><a href="https://www.8ways.ch/en/digital-news/web-design-and-digital-marketing-good-combination#:~:text=At%20its%20core%2C%20digital%20marketing,through%20websites%20and%20landing%20pages.">Go</a></button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1,background:"lightgray",color:"black" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h2>Ecommerce Solution</h2>
        <p>The solutions refer to a set of software and technology tools that help businesses sell products and services online. include a shopping cart, payment processing systems, and inventory management tools.</p>
        <button><a href="https://www.hurix.com/everything-you-need-to-know-about-e-commerce-solutions/#:~:text=E%2Dcommerce%20solutions%20refer%20to,systems%2C%20and%20inventory%20management%20tools.">Go</a></button>
        </motion.div>
    </motion.div>
      
    </motion.div>
  )
};

export default Services;
