import React, { useRef, useState } from "react";
import "../styles/Events.css";
import Img1 from "../resources/events/events1.jpg";
import Img2 from "../resources/events/events2.jpg";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import ImgPosition from "./images/ImgPosition";
import EventImg from "../resources/NatanFotoAußen.png";
import BlackFontText from "./text/BlackFontText";
import {events} from "../resources/textInhalte";
import Wheel from "../resources/logos/rad_weiß.png";

function Events() {

    return (
        <div>
            <div id="eventtext" />
            <div className="container">
                <ImgPosition name='natanoutside' image={EventImg}/>
                <img alt="trans" className='wheelEventOne'
                     src={Wheel}
                />
                <img alt="trans" className='wheelEventTwo'
                     src={Wheel}
                />
                <BlackFontText text={events} formatierung='linksbündigZeilenabstand'/>
            </div>
        </div>




    );
}

export default Events;
