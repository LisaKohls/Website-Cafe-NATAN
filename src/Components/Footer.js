import "../Styles/Footer.css";
import  React from "react";
import "../Styles/Footer.css"
import { SocialIcon } from 'react-social-icons';
import Text from "./Text"
import Button from "./Button";

const Footer=()=>{
    return(

        <div className="footer" >
                <div>
                    <div style={{textDecoration: "none"}} >
                        <a href="/impressum">
                            <p >Impressum</p>
                        </a>
                        <a href="/privacy">
                            <p >Datenschutz</p>
                        </a>
                        <a href="https://stelp.eu/" target="_blank">
                            <p>Stelp</p>
                        </a>
                        <Button name={"Stelp"}/>
                    </div>
                    <div>
                        <p>
                            <Text text={" Katharinenstraße 15 //\n" +
                                "                            70182 Stuttgart"}/>
                        </p>
                    </div>
                    <div>
                        <p>
                            team@natan-cafeandbar.con
                        </p>
                    </div>
                    <div className="socialmedia">
                            <SocialIcon bgColor="var(--textColor)"  url="https://www.facebook.com/people/NATANstuttgart/100063920867609/" target="_blank" style={{margin: "0.5rem"}}/>
                            <SocialIcon  bgColor="var(--textColor)" url="https://www.instagram.com/natan.stuttgart/" target="_blank" style={{margin: "0.5rem"}} />
                    </div>
                </div>
        </div>

    )
}

export default Footer;