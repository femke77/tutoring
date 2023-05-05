import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Header() {
  return (
    <header>
      <div className="ident">
        <h1>Meg Meyers - MERN Stack Tutoring</h1>
        <div className="subhead">
          <img src={logo} className="logo" alt="logo of black cat with one paw up"/>
          <p>Lucky Cat Ventures, LLC</p>
        </div>
      </div>
      <div className="links">
        <Link to="/">Schedule</Link>
        <Link to="/terms ">Terms of Service</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact ">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </header>
  );
}

export default Header;
