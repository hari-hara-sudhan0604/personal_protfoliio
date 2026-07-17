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

    return (

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="nav-container">

                {/* Logo */}

                <NavLink
                    to="/"
                    className="logo"
                >

                    <span>{personalInfo.shortName}</span>

                    Portfolio

                </NavLink>

                {/* Desktop Navigation */}

                <nav>

                    <ul className="nav-links">

                        {

                            navigation.map((item) => (

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

                            ))

                        }

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

                {/* Mobile Menu Button */}

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open navigation menu"
                >

                    ☰

                </button>

            </div>

        </header>

    );

}

export default Navbar;