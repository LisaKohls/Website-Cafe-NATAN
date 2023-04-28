import  React from "react";
import "../Styles/Footer.css"
import { SocialIcon } from 'react-social-icons';

function Footer() {
    const currentYear = new Date().getFullYear();

    return(

    <div className="footer">
        <div className="information">
            <div className="links">
                <a href="/oeffnungszeiten">
                    Öffnungszeiten
                </a>
                <a href="/impressum">
                    Impressum
                </a>
                <a href="/privacy">
                    Datenschutz
                </a>
                <a href="https://stelp.eu/" target="_blank">
                    Stelp
                </a>

            </div>
            <div className="contact">
                <p>Katharinenstraße 15 // 70182 Stuttgart</p>
                <p>team@natan-cafeandbar.com</p>
            </div>
            <div className="socialmedia">
                <SocialIcon bgColor="var(--textColor)"
                            url="https://www.facebook.com/people/NATANstuttgart/100063920867609/"
                            target="_blank"
                            style={{margin: "0.5rem"}}/>
                <SocialIcon bgColor="var(--textColor)"
                            url="https://www.instagram.com/natan.stuttgart/"
                            target="_blank" style={{margin: "0.5rem"}}/>
                <SocialIcon bgColor="var(--textColor)"
                            url="mailto:team@natan-cafeandbar.com"
                            target="_blank"
                            style={{margin: "0.5rem"}}/>
            </div>
        </div>
        <div className="copyright">
            <p>© {currentYear} NATAN – CAFE AND BAR</p>
        </div>
</div>

    )
}

export default Footer;