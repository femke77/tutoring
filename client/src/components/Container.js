import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./ContactBS";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Container({}) {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Calendly />} />
        <Route path="/contact" element={<ContactBS />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Container;
