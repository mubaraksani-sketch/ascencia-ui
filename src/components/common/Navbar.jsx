import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo/Ascencia-Malta-Logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navInner">
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

          <div className="navLinks" role="navigation" aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navLink ${isActive ? "navLinkActive" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navLink ${isActive ? "navLinkActive" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navLink ${isActive ? "navLinkActive" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;