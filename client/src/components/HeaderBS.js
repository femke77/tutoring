import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function HeaderBS() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1>
            {/* <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
            Meg Meyers
            <h2 className="pt-3">MERN Stack Tutoring</h2>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse  text-end " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Schedule{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/terms " className="nav-link">
                  Terms of Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderBS;
