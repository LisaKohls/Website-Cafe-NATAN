import "../styles/Events.css";
import ImgPosition from "./images/ImgPosition";
import EventImg from "../resources/NatanFotoAußen.png";
import BlackFontText from "./text/BlackFontText";
import {events} from "../resources/textInhalte";
import wheel from "../resources/logos/rad_weiß.png";
import Wheel from './interactiveElements/Wheel'
import WhiteFontText from "./text/WhiteFontText";

function Events() {

    return (
        <div>
            <div id="eventtext"/>
            <div className="container">
                <ImgPosition name='natanoutside' image={EventImg}/>
                <Wheel wheel={wheel} title='wheelEventOne'/>
                <Wheel wheel={wheel} title='wheelEventTwo'/>
                <WhiteFontText text={events} formatierung='events'/>
            </div>
        </div>

    );
}

export default Events;
