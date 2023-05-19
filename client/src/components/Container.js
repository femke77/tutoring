import { BrowserRouter as _, Routes, Route } from "react-router-dom";
import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./Contact";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import PrivacyPage from "./PrivacyPage";

function Container({}) {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Terms />} />
        <Route path="/contact" element={<ContactBS />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Calendly />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Container;
