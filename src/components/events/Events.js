import "../../styles/events/Events.css";
import ImgPosition from "../images/ImgPosition";
import EventImg from "../../resources/gallery/Natan Foto außen.png";

import {events} from "../../resources/textContent/textContent";
import wheel from "../../resources/logos/rad_weiß.png";
import Wheel from '../interactiveelements/Wheel'
import TextPage from "../text/TextPage";

function Events() {

    return (
        <div>
            <div id="eventtext"/>
            <div className="container">
                <ImgPosition name='events' image={EventImg}/>
                <Wheel wheel={wheel} title='wheelEventOne'/>
                <Wheel wheel={wheel} title='wheelEventTwo'/>
                <TextPage text={events} formatierung='events' color='white'/>
            </div>
        </div>

    );
}

export default Events;
