import "../../styles/events/Events.css";
import ImgPosition from "../images/ImgPosition";
import EventImg from "../../resources/gallery/Kopie von 20220211_100421.jpg";
import Text from "../text/Text";
import {events} from "../../resources/textContent/textContent";
import wheel from "../../resources/logos/rad_weiß.png";
import Wheel from '../interactiveelements/Wheel'

function Events() {

    return (
        <div>
            <div id="eventtext"/>
            <div className="container">
                <ImgPosition name='events' image={EventImg}/>
                <Wheel wheel={wheel} title='wheelEventOne'/>
                <Wheel wheel={wheel} title='wheelEventTwo'/>
                <Text text={events} formatierung='events' color='white'/>
            </div>
        </div>

    );
}

export default Events;
