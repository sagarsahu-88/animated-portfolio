import "./sidebar.scss";
import {motion} from "framer-motion"
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState } from "react";
const Sidebar=()=>{

    const [open,setOpen]=useState(false)
    const variants={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:400,
                delay:0.3,
                damping:200,
                
              
        },
    },
        closed:{
            clipPath:"circle(25px at 50px 50px)",
            transition:{
                delay:0.3,
                type:"spring",
                stiffness:400,
                damping:60,


            },

        },
    };
    return(
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}
export default Sidebar;