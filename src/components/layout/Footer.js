import React from "react";
import "../../styles/layout/Footer.css";
import {SocialIcon} from 'react-social-icons';
import {oeffnungszeiten} from "../../resources/textInhalte";


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footerInformation">
                <div className="footerElement">
                    <p className="footerÜberschrift">Öffnungszeiten:</p>
                    <div className="footerInhalt">
                        {oeffnungszeiten}
                    </div>
                </div>
                <div className="footerElement">
                    <p className="footerÜberschrift">Info</p>
                    <div className="footerInhalt">
                        <p>Natan ist ein</p>
                        <p>Projekt von <a href="https://stelp.eu/" target="_blank" className="footerLink">STELP</a></p>
                    </div>
                </div>
                <div className="footerElement">
                    <p className="footerÜberschrift">Adresse:</p>
                    <div className="footerInhalt">
                        <a href="https://goo.gl/maps/ixYSewPws9csE3Zz5" target="_blank" className="footerLink">
                            <p>Katharinenstraße 15 //</p>
                            <p>70182 Stuttgart</p>
                        </a>
                    </div>
                </div>
                <div className="footerElement">
                    <p className="footerÜberschrift">Kontakt:</p>
                    <div className="footerInhalt">
                        <a href="mailto:team@natan-cafeandbar.com" target="_blank"
                           className="footerLink">team@natan-cafeandbar.com</a>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="bottom">
                <div className="copyright">
                    <p> © {currentYear} NATAN – CAFE AND BAR </p>
                </div>
                <div className="socialIconsBottom">
                    <SocialIcon
                        bgColor="var(--textColor)"
                        url="https://www.facebook.com/people/NATANstuttgart/100063920867609/"
                        target="_blank"
                        style={{margin: "0.5rem"}}
                        className="footerLink"
                    />
                    <SocialIcon
                        bgColor="var(--textColor)"
                        url="https://www.instagram.com/natan.stuttgart/"
                        target="_blank"
                        style={{margin: "0.5rem"}}
                        className="footerLink"
                    />
                    <SocialIcon
                        bgColor="var(--textColor)"
                        url="mailto:team@natan-cafeandbar.com"
                        target="_blank"
                        style={{margin: "0.5rem"}}
                        className="footerLink"
                    />
                </div>
                <div className="impressum">
                    <p className="footerText">
                    <a href="/impressum" className="footerLink">Impressum</a>
                         //
                    <a href="/privacy" className="footerLink">Datenschutz</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;