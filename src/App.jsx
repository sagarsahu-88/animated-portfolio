import "./app.scss";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/about/About";
import {BrowserRouter as Router} from 'react-router-dom';
const App = () => {
  return <div>
        <Cursor/>
        <section id="Homepage">
        <Navbar/>
        <Router>
        <Hero/>
        </Router>
       
        </section>
        <section id="Services" ><Parallax type="services"/></section>
        <section><Services/></section>
        <section id="Portfolio"><Parallax type="portfolio"/></section>
       <Portfolio/>
       <section id="About"><About/></section>
        <section id="Contact"><Contact/></section>
        
        
  </div>;
};

export default App;
