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

function Container() {
  const images = [
    "musicxpansion.png",
    "word-guess.png",
    "lego.png",
    "portfolio.png",
    "crave.png",
    "car.png",
    "portfolio1.png"
  ];
  const intervalRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const numImages = images.length;

  const bg = {
    backgroundImage: `url(/${images[idx]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "background-image 1.5s linear",
  };
  
  useEffect(() => {

    const update = () => {
      setIdx((prev) => (prev === numImages - 1 ? 0 : prev + 1));
    };

    intervalRef.current = setInterval(() => {
      update();
    }, 5000);

    return () => {
      console.log("clear interval");
      clearInterval(intervalRef.current);
    };
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
