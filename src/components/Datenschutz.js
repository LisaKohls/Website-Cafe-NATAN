import React from "react";
import "../styles/Impressum.css";
import {datenschutz} from "../resources/textInhalte";
import WhiteFontText from "./text/WhiteFontText";

function Datenschutz(){
    return(
        <div className="datenschutz">
            <div className="sectionPadding"/>
            <WhiteFontText text={datenschutz} formatierung='blocksatz'/>
        </div>
    )
}

export default Datenschutz;