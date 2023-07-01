import "../styles/Events.css";
import ImgPosition from "./images/ImgPosition";
import EventImg from "../resources/NatanFotoAußen.png";
import BlackFontText from "./text/BlackFontText";
import {events} from "../resources/textInhalte";
import Wheel from "../resources/logos/rad_weiß.png";

function Events() {

    return (
        <div>
            <div id="eventtext"/>
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
