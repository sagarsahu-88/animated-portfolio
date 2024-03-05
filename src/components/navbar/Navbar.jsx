import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"
const Navbar=()=>{
    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>

            <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1.5}} transition={{duration:1}}><img  src="/letterLogo (1).png"></img></motion.span>
            <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100014818722918" target="blank"><img src="/facebook.png" alt="" /></a>
            <a href="https://www.instagram.com/mr_s_a_g_a_r______/" target="blank"><img src="/instagram.png" alt=""/></a>
            <a href=""><img src="/youtube.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/sagar-sahu-045643207/" target="blank"><img src="/dribbble.png" alt=""/></a>

            </div>

            </div>
        </div>
    )
}
export default Navbar;