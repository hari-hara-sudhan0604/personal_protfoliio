import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <span>Hari</span> Portfolio
          </NavLink>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/skills">
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects">
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="resume-btn">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Navbar;