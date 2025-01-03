import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="d-flex flex-column">
      <div className="d-flex flex-row justify-content-evenly pb-2">
        <a href="#">
          <i className="fa-brands fa-linkedin-in fa-fade fa-lg"></i>
        </a>{" "}
        <a href="mailto:luckycatventuresllc@gmail.com">
          <i className="fa-solid fa-envelope fa-fade"></i>
        </a>{" "}
        <a href="https://github.com/femke77" target="_blank">
          <i className="fa-brands fa-github fa-fade fa-lg"></i>
        </a>
      </div>
      <p>
        {" "}
        <img
          src={logo}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />{" "}
        Lucky Cat Ventures, LLC
      </p>
    </footer>
  );
}

export default Footer;
