import "../../styles/layout/Navbar.css";
import Logo from "../../resources/logos/Natan_Logo_white_edited.png"
import ImgPosition from "../images/ImgPosition";

function Header() {

    return (
        <header>
            <a href="..">
                <ImgPosition image={Logo} name='logoNavBar'/>
            </a>
        </header>
    );
}

export default Header;