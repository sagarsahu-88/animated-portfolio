import { useRef } from "react";
import "./portfolio.scss"  
import {motion,useScroll,useSpring, useTransform,} from "framer-motion";


const items=[
    {
        id:1,
        title:"React Ecommerce",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uplabs.com%2Fposts%2Ffashion-e-commerce-landing-page-a3948020-7d81-429c-b3a9-3d06eb03bda4&psig=AOvVaw2dj6YcIvfsW6MoNRbVtW-6&ust=1710602452088000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKilrO7I9oQDFQAAAAAdAAAAABAE",
        desc:"An eCommerce website is an online destination where buyers shop for goods and sellers offer products and services.Easy functionality with some Features Ex: sorting,Filter,Price,Add to cart,Payment Gateway.  ",
        link:"https://ecommerce-backend-rouge.vercel.app/login"
    },
    {
        id:2,
        title:"Full Stack Food Delivery Website ",
        img:"https://i.pinimg.com/originals/a2/6e/42/a26e42330d1517409842ff321f1fa906.png",
        desc:"Smart Dashboard to receive & manage all orders from White Label ordering App in a single place. Customize your menu & offerings all managed by yourself with just a few clicks. Realize online revenues through fully integrated leading payment portals ",
        link:" "
    },
    {
        id:3,
        title:"Javascript Music Application",
        img:"https://i.ytimg.com/vi/JtrFzoL1joI/maxresdefault.jpg",
        desc:"shows the details of the current track being played. It includes the track number, track album, track name and track artist.Buttons that are used to control the playback of the track. It includes the play/pause button, the previous and next track buttons. They would have an onclick() method that calls a specific function defined in the JavaScript file. ",
        link:"https://music-player-in-java-script.vercel.app/"
    },
    {
        id:4,
        title:"Real-Time Chat Application ",
        img:"https://assets.materialup.com/uploads/a0467172-7f0e-4319-8edb-4ec311d05ac9/preview.png",
        desc:"Coming Soon "
    }
];

const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,});
    const y=useTransform(scrollYProgress,[0,1], [-500,500]);


    return(
        <section>
        <div className="container">
        <div className="wrapper">
        <div className="imgContainer" ref={ref}>
        <img src={item.img}/>
        </div>
        <motion.div className="textContainer" style={{y}}>
        <h2 >{item.title}</h2>
        <p>{item.desc}</p>
        <button ><a href={item.link} target="blank">See Demo</a></button>

        </motion.div>
        </div>

        </div>

        </section>
    );

};




const Portfolio = () => {
    const ref=useRef()
     

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"],
    });
    const scalex=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
        
    });
  return (
    <div className="portfolio" ref={ref}>
    <div className="progress">
    <h1>Featured Works</h1>
    <motion.div style={{scalex}} className="progressBar" />

    </div>
    {items.map((item)=>(
        <Single item={item} key={item.id}/>
    )

    )}
      
    </div>
  );
};

export default Portfolio
