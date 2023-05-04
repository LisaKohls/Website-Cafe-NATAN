import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import "../Styles/Navbar.css";


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        if (navRef && navRef.current)  {
            navRef.current.classList.toggle("responsive_nav");
        }
    }
    return (
        <header>
            <h3>logo</h3>
            <nav ref={navRef}>
                <a href="/#">Über uns</a>
                <a href="/#">Reservierung</a>
                <a href="/#">Produkte & Partner</a>
                <a href="/#">Volunteers</a>
                <a href="/#">Events</a>
                <a href="/#">Kontakt</a>
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