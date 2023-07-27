import "../../styles/button/Button.css";
import PopUp from "../forms/PopUp";
import Reservation from "../forms/Reservation";
import Volunteer from '../forms/Volunteer'
import React, {useState} from "react";
import Menu from "../foodanddrinks/Menu";

//implementation of the reservation, volunteer and menu popUp button
function Button(props) {

    const [reservationPopUp, setReservationPopUp] = useState(false);
    const [volunteerPopUp, setVolunteerPopUp] = useState(false);
    const [menuPopUp, setMenuPopUp] = useState(false);

    function open(styleName) {
        document.body.style.overflow = "hidden";
        if (styleName === 'Volunteer') {
            setVolunteerPopUp(true);
        } else if (styleName === 'Reservation') {
            setReservationPopUp(true);
        } else if (styleName === 'Menu') {
            setMenuPopUp(true);
        }
    }

    return (
        <>
            <button className={"btn" + props.styleName} onClick={() => open(props.styleName)}>
                {props.name}
            </button>
            <PopUp trigger={reservationPopUp} setTrigger={setReservationPopUp}>
                <Reservation trigger={reservationPopUp} setTrigger={setReservationPopUp}/>
            </PopUp>
            <PopUp trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}>
                <Volunteer trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}/>
            </PopUp>
            <Menu trigger={menuPopUp} setTrigger={setMenuPopUp}/>
        </>
    );
}

export default Button;