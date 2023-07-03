import React from "react";
import "../styles/Privacy.css";
import {datenschutz} from "../resources/textInhalte";
import Text from './text/Text'

function Datenschutz() {
    return (
        <div className="privacy">
            <div className="sectionPadding"/>
            <Text text={datenschutz} formatierung='block' color='white'/>
        </div>
    )
}

export default Datenschutz;