import "./ThemeToggle.css";

import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {

    const {

        theme,

        toggleTheme,

    } = useTheme();

    return (

        <button

            className="theme-btn"

            onClick={toggleTheme}

            aria-label="Toggle Theme"

        >

            {

                theme === "light"

                    ? <FaMoon />

                    : <FaSun />

            }

        </button>

    );

}

export default ThemeToggle;