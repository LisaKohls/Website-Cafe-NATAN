import "../../styles/events/Events.css";
import {events} from "../../resources/textContent/textContent";
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
