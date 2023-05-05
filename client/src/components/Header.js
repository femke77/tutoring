import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="ident">
        <h1>Meg Meyers - MERN Stack Tutoring</h1>
        <p>Lucky Cat Ventures, LLC</p>
      </div>
      <div className="links">
        <Link to="/">-Schedule</Link> 
        <Link to="/terms ">-Terms of Service</Link>
        <Link to="/about">-About Me</Link> 
        <Link to="/contact ">-Contact</Link>
        <Link to="/blog">-Blog</Link>
      </div>
    </header>
  );
}

export default Header;
