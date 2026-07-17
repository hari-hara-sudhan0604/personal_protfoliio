import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import personalInfo from "../../data/personalInfo";
import navigation from "../../data/navigation";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 40);

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    useEffect(() => {

  document.body.style.overflow = menuOpen
    ? "hidden"
    : "auto";

  return () => {

    document.body.style.overflow = "auto";

  };

}, [menuOpen]);

useEffect(() => {

  const handleKeyDown = (event) => {

    if (event.key === "Escape") {

      setMenuOpen(false);

    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {

    window.removeEventListener("keydown", handleKeyDown);

  };

}, []);

    return (

<header className={`navbar ${scrolled ? "scrolled" : ""}`}>

  <div className="nav-container">

    {/* Logo */}

    <NavLink
      to="/"
      className="logo"
    >
      <span>{personalInfo.shortName}</span> Portfolio
    </NavLink>

    {/* Desktop Navigation */}

    <nav className="desktop-nav">

      <ul className="nav-links">

        {navigation.map((item) => (

          <li key={item.id}>

            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >

              {item.name}

            </NavLink>

          </li>

        ))}

      </ul>

    </nav>

    {/* Resume */}

    <a
      href={personalInfo.resume}
      download
      className="resume-btn"
    >

      Resume

    </a>

    {/* Hamburger */}

    <button
      className="menu-btn"
      onClick={() => setMenuOpen(true)}
      aria-label="Open menu"
    >

      ☰

    </button>

  </div>

  {/* Overlay */}

  {menuOpen && (

    <div
      className="mobile-overlay"
      onClick={() => setMenuOpen(false)}
    />

  )}

  {/* Mobile Drawer */}

  <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>

    <button
      className="close-btn"
      onClick={() => setMenuOpen(false)}
      aria-label="Close menu"
    >

      ✕

    </button>

    <ul>

      {navigation.map((item) => (

        <li key={item.id}>

          <NavLink
            to={item.path}
            onClick={() => setMenuOpen(false)}
          >

            {item.name}

          </NavLink>

        </li>

      ))}

    </ul>

    <a
      href={personalInfo.resume}
      download
      className="resume-btn mobile-resume"
    >

      Download Resume

    </a>

  </aside>

</header>

    );

}

export default Navbar;