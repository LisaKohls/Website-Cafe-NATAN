import "../Styles/Button.css";
import PopUp from "./PopUp";
import Reservierung from "./Reservierung";
import Volunteer from './Volunteer'
import Speisekarte from './Speisekarte'
import React, {useState} from "react";


function Button(props){

    const [reservierungPopUp, setReservierungPopUp] = useState(false);
    const [volunteerPopUp, setVolunteerPopUp] = useState(false);
    const [menuPopUp, setMenuPopUp] = useState(false);

    function open(name) {
        document.body.style.overflow = "hidden";
        if (name === 'Volunteer') {
            setVolunteerPopUp(true);
        } else if(name === 'Reservierung'){
            setReservierungPopUp(true);
        } else if (name === 'Speisekarte') {
            setMenuPopUp(true);
        }
    }

    return (
        <div>
            <button className={"btn" + props.name} onClick={() => open(props.name)}>
                {props.name}
            </button>
            <PopUp trigger={reservierungPopUp} setTrigger={setReservierungPopUp}>
                <Reservierung />
            </PopUp>
            <PopUp trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}>
                <Volunteer />
            </PopUp>
                <Speisekarte trigger={menuPopUp} setTrigger={setMenuPopUp}/>
        </div>
    );
}
export default Button;