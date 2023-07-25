import "../../styles/events/Events.css";
import ImgPosition from "../images/ImgPosition";
import EventImg from "../../resources/gallery/Natan Foto außen.png";

import {events} from "../../resources/textContent/textContent";
import wheel from "../../resources/logos/rad_weiß.png";
import Wheel from '../interactiveelements/Wheel'
import StyledText from "../text/StyledText";

function Events() {

    return (
        <div>
            <div id="eventtext"/>
                <StyledText text={events} formatierung='events' color='white'/>
        </div>

    );
}

export default Events;
