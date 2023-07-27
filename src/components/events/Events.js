import "../../styles/events/Events.css";
import ImgPosition from "../images/ImgPosition";
import EventImg from "../../resources/gallery/Natan Foto außen.png";

import {events} from "../../resources/textContent/textContent";
import wheel from "../../resources/logos/rad_weiß.png";
import Wheel from '../interactiveelements/Wheel'
import Text from "../text/Text";

function Events() {

    return (
        <div>
            <div id="eventtext"/>
                <Text text={events} formatierung='events' color='white'/>
        </div>

    );
}

export default Events;
