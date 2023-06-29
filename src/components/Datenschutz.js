import React from "react";
import "../styles/Privacy.css";
import {datenschutz} from "../resources/textInhalte";
import WhiteFontText from "./text/WhiteFontText";
import WhiteHeadlineSection from "./sections/WhiteHeadlineSection";

function Datenschutz(){
    return(
        <div className="privacy">
            <div className="sectionPadding"/>
            <WhiteFontText text={datenschutz} formatierung='blocksatz'/>
        </div>
    )
}

export default Datenschutz;