import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./Contact";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import Privacy from "./PrivacyPolicy";
import SecondDrawer from "./SecondDrawer";
// import MX from "../assets/musicxpansion.png";
// import Cat from "../assets/word-guess.png";
// import Crave from '../assets/crave.png'
// import Portfolio from '../assets/portfolio.png'
// import Lego from '../assets/lego.png'
// import Car from '../assets/car.png'

function Container() {
  const images = ["musicxpansion.png", "word-guess.png", "lego.png", "crave.png", "portfolio.png", "car.png"]
  const [idx, setIdx] = useState(0)
  const intervalRef = useRef(null)

  const bg = {
    backgroundImage: `url(/${images[idx]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", 
    transition: 'background-image 1.5s linear',
  };

  const update = () => {
    setIdx(prev => ((prev === images.length -1) ? 0 : prev + 1))
  };

  useEffect(() => {

    console.log(idx);
    intervalRef.current = setInterval(() => {
      update()
    }, 5000);

    return () => {
      console.log("clear interval");
      clearInterval(intervalRef.current)
    }
  }, []);  


  return (
    <div style={bg}>
      <Routes>
        <Route
          path="/"
          element={
            <SecondDrawer Componenent={Terms} width="500px" opacity=".95" />
          }
        />
        <Route
          path="/contact"
          element={
            <SecondDrawer Componenent={ContactBS} width="650px" opacity="1" />
          }
        />
        <Route
          path="/about"
          element={
            <SecondDrawer Componenent={About} width="550px" opacity=".9" />
          }
        />
        <Route path="/schedule" element={<Calendly />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/privacy"
          element={
            <SecondDrawer Componenent={Privacy} width="750px" opacity=".9" />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Container;
