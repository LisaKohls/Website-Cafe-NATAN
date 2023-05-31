import "../Styles/Button.css";
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
                <div className='container'>
                    <Map/>
                    <Reservierung trigger={reservierungPopUp} setTrigger={setReservierungPopUp}/>
                </div>
            </PopUp>
            <PopUp trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}>
                <Volunteer trigger={volunteerPopUp} setTrigger={setVolunteerPopUp}/>
            </PopUp>
                <Menu trigger={menuPopUp} setTrigger={setMenuPopUp}/>
        </div>
    );
}
export default Button;