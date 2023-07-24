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

function Container({}) {
  const [background, setBackground] = useState(MX);

  // var images = [MX, Cat];

  const bg = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const backgroundUpdate = () => {
      console.log("test");
      if (background === MX) setBackground(Cat)
      else setBackground(MX)
    };

    setInterval(backgroundUpdate, 3000);
  },[background]);

  // need to make the background image change every 3 seconds.
  return (
    <div style={bg} className="">
      <Routes>
        <Route
          path="/"
          element={
            <SecondDrawer Componenent={Terms} width="700px" opacity=".9" />
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
            <SecondDrawer Componenent={About} width="600px" opacity=".9" />
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
