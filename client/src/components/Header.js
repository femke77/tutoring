import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Meg Meyers - MERN Stack Tutoring</h2>
      <div>
        {" "}
        <Link to="/">Schedule</Link>
        <Link to="/about">About</Link>
        <Link to="/contact ">Contact</Link>
 
      </div>
    </header>
  );
}

export default Header;
