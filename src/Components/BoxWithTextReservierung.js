import "../Styles/Oeffnungszeiten.css";
import "../Styles/Text.css"
import Button from "./Button";
import React from "react";

function BoxWithTextReservierung(props){
    return(<div className="reservierung">
        <p>{props.title}</p>
        <Button name="Reservierung"/>
    </div>)
}

export default BoxWithTextReservierung;