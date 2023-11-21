import { useEffect, useState } from "react";
import { BrowserRouter as _, Routes, Route } from "react-router-dom";
import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./Contact";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import Privacy from "./PrivacyPolicy";
import SecondDrawer from "./SecondDrawer";
import MX from "../assets/musicxpansion.png";
import Cat from "../assets/word-guess.png";
import Crave from '../assets/crave.png'
import Portfolio from '../assets/portfolio.png'
import Lego from '../assets/lego.png'
import Car from '../assets/car.png'

function Container({ }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      update()
    }, 8000);
    return () => {
      clearInterval(interval)
    }


  }, [idx]);


  const update = () => {
    if (idx === 5) {
      setIdx(0);
      return;
    }
    setIdx(prev => prev + 1)
  };


  const background = () => {
    switch (idx) {
      case 0:
        return MX
      case 1:
        return Cat
      case 2:
        return Crave
      case 3:
        return Portfolio
      case 4:
        return Lego
      case 5:
        return Car
    
      default:
        return null;
    }
  }

  const bg = {
    backgroundImage: `url(${background()})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={bg} className="trs">
      <Routes>
        <Route
          path="/"
          element={
            <SecondDrawer Componenent={Terms} width="700px" opacity=".95" />
          }
        />
        <Route
          path="/contact"
          element={
            <SecondDrawer Componenent={ContactBS} width="650px" opacity=".9" />
          }
        />
        <Route
          path="/about"
          element={
            <SecondDrawer Componenent={About} width="500px" opacity=".9" />
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
