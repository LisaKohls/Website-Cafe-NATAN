import React from "react";
import "../styles/Impressum.css";
import {impressum} from "../resources/textInhalte";
import Text from "./text/Text";

function Impressum() {
    return (
        <div className="impressum">
            <div className="sectionPadding"/>
            <Text text={impressum} formatierung='block' color='white'/>
        </div>
    )
}

export default Impressum;
