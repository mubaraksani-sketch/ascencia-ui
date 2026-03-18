import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/Ascencia-Malta-Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerInner">
          <Link to="/" className="brand" aria-label="Ascencia home">
            <img
              className="brandLogo"
              src={logo}
              alt="Ascencia Business School"
              loading="eager"
              decoding="async"
            />
            <span className="srOnly">Ascencia</span>
          </Link>

          <div className="footerLinks" aria-label="Footer links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <p className="muted">© 2026 Ascencia UI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;