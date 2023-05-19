import { BrowserRouter as _, Routes, Route } from "react-router-dom";
import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./Contact";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import Privacy from "./PrivacyPolicy";
import SecondDrawer from "./SecondDrawer";

function Container({}) {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<SecondDrawer Componenent={Terms} width="700px" opacity=".9" />} />
        <Route path="/contact" element={<SecondDrawer Componenent={ContactBS} width="650px" opacity="1" />} />
        <Route path="/about" element={<SecondDrawer Componenent={About} width="600px" opacity=".9" />} />
        <Route path="/schedule" element={<Calendly />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={ <SecondDrawer Componenent={Privacy} width="650px" opacity=".9" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Container;
