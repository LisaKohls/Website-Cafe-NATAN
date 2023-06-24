import React from "react";
import "../styles/Footer.css"
import {SocialIcon} from 'react-social-icons';


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footerInformation">
                <div className="footerLinks">
                    <div className="footerElement">
                        Öffnungszeiten:
                        Montag...
                    </div>
                    <div className="footerElement">
                        Info
                        Natan ist ein Projekt von <a href="https://stelp.eu/" target="_blank">Stelp</a>
                    </div>
                    <div className="footerElement">
                        Adresse:
                        Katharinenstraße 15 // 70182 Stuttgart
                    </div>
                    <div className="footerElement">
                        Kontakt::
                        <a href="mailto:team@natan-cafeandbar.com"
                           target="_blank">team@natan-cafeandbar.com</a>
                    </div>
                </div>

                <div className="socialmedia">

                    <a href="https://www.instagram.com/natan.stuttgart/" target="_blank">
                        <i className="faInstagram"
                           style={{margin: "0.5rem"}}/>
                    </a>

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
            <div className="line"></div>
            <div>
                <div className="copyright">
                    <p> © {currentYear} NATAN – CAFE AND BAR </p>
                </div>
                <div className="impressum">
                    <a href="/impressum">
                        Impressum /
                    </a>
                    <a href="/privacy">
                        / Datenschutz
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;