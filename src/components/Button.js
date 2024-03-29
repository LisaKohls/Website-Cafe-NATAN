import "../styles/Button.css";
import PopUp from "./PopUp";
import Reservierung from "./Reservierung";
import Volunteer from './Volunteer'
import Map from './Map'
import React, {useState} from "react";
import Menu from "./Menu";


function Button(props){

    const [reservierungPopUp, setReservierungPopUp] = useState(false);
    const [volunteerPopUp, setVolunteerPopUp] = useState(false);
    const [menuPopUp, setMenuPopUp] = useState(false);

    function open(styleName) {
        document.body.style.overflow = "hidden";
        if (styleName === 'Volunteer') {
            setVolunteerPopUp(true);
        } else if(styleName === 'Reservierung'){
            setReservierungPopUp(true);
        } else if (styleName === 'Speisekarte') {
            setMenuPopUp(true);
        }
    }

    return (
        <div>
            <button className={"btn" + props.styleName} onClick={() => open(props.styleName)}>
                {props.name}
            </button>
            <PopUp trigger={reservierungPopUp} setTrigger={setReservierungPopUp}>
            <Reservierung trigger={reservierungPopUp} setTrigger={setReservierungPopUp}/>
            </PopUp>
            <PopUp trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}>
                <Volunteer trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}/>
            </PopUp>
                <Menu trigger={menuPopUp} setTrigger={setMenuPopUp}/>
        </div>
    );
}
export default Button;