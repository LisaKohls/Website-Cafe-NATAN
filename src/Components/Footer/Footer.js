import "./Footer.css";
import  React from "react";
import Instagram from 'node-instagram';

const Footer=()=>{
    return(

        <div className="footer">
            <div>
                <div>
                    <div>
                        <a href="/impressum">
                        <p>Impressum</p>
                        </a>
                    </div>
                    <div className="socialmedia">
                        <a href="src/Components/Footer/Footer">
                        <Instagram/>
                        </a>
                        <a href="src/Components/Footer/Footer">
                        </a>
                    </div>l
                </div>
            </div>
        </div>

    )
}

export default Footer;