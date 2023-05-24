import "../Styles/Button.css";
import PopUp from "./PopUp";
import Reservierung from "./Reservierung";
import Volunteer from './Volunteer'
import React, {useState} from "react";


function Button(props){

    const [reservierungPopUp, setReservierungPopUp] = useState(false);
    const [volunteerPopUp, setVolunteerPopUp] = useState(false);

    function open(name) {
        document.body.style.overflow = "hidden";
        if (name === 'Volunteer') {
            setVolunteerPopUp(true);
        } else {
            setReservierungPopUp(true);
        }
    }

    return (
        <div>
            <button className={"btn" + props.name} onClick={() => open(props.name)}>
                {props.name}
            </button>
            <PopUp trigger={reservierungPopUp} setTrigger={setReservierungPopUp}>
                <Reservierung trigger={reservierungPopUp} setTrigger={setReservierungPopUp}/>
            </PopUp>
            <PopUp trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}>
                <Volunteer trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}/>
            </PopUp>
        </div>
    );
}
export default Button;