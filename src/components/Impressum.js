import React from "react";
import "../styles/Impressum.css";
import {impressum} from "../resources/textInhalte";
import WhiteFontText from "./text/WhiteFontText";

function Impressum() {
    return (
        <div className="impressum">
            <div className="sectionPadding"/>
            <WhiteFontText text={impressum} formatierung='blocksatz'/>
        </div>
    )
}

export default Impressum;
