import "../styles/Events.css";
import ImgPosition from "./images/ImgPosition";
import EventImg from "../resources/NatanFotoAußen.png";
import Text from "./text/Text";
import {events} from "../resources/textInhalte";
import wheel from "../resources/logos/rad_weiß.png";
import Wheel from './interactiveelements/Wheel'

function Events() {

    return (
        <div>
            <div id="eventtext"/>
            <div className="container">
                <ImgPosition name='natanoutside' image={EventImg}/>
                <Wheel wheel={wheel} title='wheelEventOne'/>
                <Wheel wheel={wheel} title='wheelEventTwo'/>
                <Text text={events} formatierung='events' color='white'/>
            </div>
        </div>

    );
}

export default Events;
