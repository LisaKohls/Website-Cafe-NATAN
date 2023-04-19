import "../Styles/Footer.css";
import  React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer=()=>{
    return(
        <div className="footer">
            <div>
                <div>
                    <div>
                        <a href="/impressum">
                        <p >Impressum</p>
                        </a>
                    </div>
                    <div className="socialmedia">
                            <SocialIcon padding="4px" bgColor="var(--textColor)" url="https://www.facebook.com/people/NATANstuttgart/100063920867609/" target="_blank" />
                            <SocialIcon bgColor="var(--textColor)" url="https://www.instagram.com/natan.stuttgart/" target="_blank" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;