import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <p>Meg Meyers - MERN Stack Tutoring</p>
      <div>
        <Link to="/">Schedule</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact ">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
