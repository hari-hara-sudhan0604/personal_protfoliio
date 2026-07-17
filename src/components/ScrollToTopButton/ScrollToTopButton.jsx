import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggleVisibility = () => {

            setVisible(window.scrollY > 300);

        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {

            window.removeEventListener("scroll", toggleVisibility);

        };

    }, []);

    const scrollTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        <button

            className={`scroll-top ${visible ? "show" : ""}`}

            onClick={scrollTop}

            aria-label="Scroll to top"

        >

            <FaArrowUp/>

        </button>

    );

}

export default ScrollToTopButton;