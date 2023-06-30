import { FaBars, FaTimes } from "react-icons/fa"
import {useEffect, useRef} from "react"
import "../styles/Navbar.css";
import Logo from "../resources/logos/Natan_Logo_white_edited.png"
import ImgPosition from "./images/ImgPosition";


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        if (navRef && navRef.current)  {
            navRef.current.classList.toggle("responsive_nav");
        }
    }

    const closeNavbar = () => {
        if (navRef && navRef.current) {
            navRef.current.classList.remove("responsive_nav");
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (navRef && navRef.current && window.innerWidth > 1024) {
                navRef.current.classList.remove("responsive_nav");
            }
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <header>
            <a href="./">
                <ImgPosition image={Logo} name='logoNavBar'/>
            </a>
            <nav ref={navRef}>
                <a href="/#opening" onClick={closeNavbar}>Öffnungszeiten</a>
                <a href="/#menu" onClick={closeNavbar}>Speisekarte</a>
                <a href="/#events" onClick={closeNavbar}>Events</a>
                <a href="/#produkteUndPartner" onClick={closeNavbar}>Partner</a>
                <a href="/#volunteers" onClick={closeNavbar}>Volunteer werden</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    ✕
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );

}

export default Navbar;