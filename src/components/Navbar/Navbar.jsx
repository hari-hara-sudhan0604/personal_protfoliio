import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  console.log("Navbar Render");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <span>Hari</span> Portfolio
          </NavLink>
        </div>
        <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
>
    ☰
</button>
        {/* Navigation */}
        <nav>
<ul className={menuOpen? "nav-links open": "nav-links"}>            
            <li>
              <NavLink to="/" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
    }onClick={()=>setMenuOpen(false)}  end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
    } onClick={()=>setMenuOpen(false)}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/skills" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
    } onClick={()=>setMenuOpen(false)}>
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
    } onClick={()=>setMenuOpen(false)} >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
    } onClick={()=>setMenuOpen(false)}>
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