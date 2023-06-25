import React from "react";
import "../styles/NewFooter.css"
import {SocialIcon} from "react-social-icons";


function NewFooter() {
    const currentYear = new Date().getFullYear();

    return (

        <div className="footer-clean">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social"><a href="#"><i
                            className="icon ion-social-facebook"></i></a><a href="#"><i
                            className="icon ion-social-twitter"></i></a><a href="#"><i
                            className="icon ion-social-snapchat"></i></a><a href="#"><i
                            className="icon ion-social-instagram"></i></a>
                            <p className="copyright">Company Name © 2018</p>
                        </div>
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

    )
}

export default NewFooter;