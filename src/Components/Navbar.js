import { FaBars, FaTimes } from "react-icons/fa"
import {useEffect, useRef} from "react"
import "../Styles/Navbar.css";
import Logo from "../Resources/Natan_Logo_white_edited.png"


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        if (navRef && navRef.current)  {
            navRef.current.classList.toggle("responsive_nav");
        }
    }

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
            <img src={Logo} alt="Natan Logo" width="35px" height="40px"/>
            <nav ref={navRef}>
                <a href="/#ueberUns">Über uns</a>
                <a href="/#reservierung">Reservierung</a>
                <a href="/#produkteUndPartner">Produkte & Partner</a>
                <a href="/#volunteers">Volunteers</a>
                <a href="/#events">Events</a>
                <a href="/#kontakt">Kontakt</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    );

}

export default Navbar;