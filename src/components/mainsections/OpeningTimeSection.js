import React from "react";
import Opening from "../text/Opening";
import {oeffnungszeiten} from "../../resources/textContent/textContent";
import Button from "../button/Button";
import wheel from '../../resources/logos/rad_weiß.png'
import Text from "../text/Text";
import Wheel from "../interactiveelements/Wheel";
import DynamicImages from "../images/DynamicImages";

const singleImage = [
    require("../../resources/gallery/barNatan1.jpg"),
];

function OpeningTimeSection() {
    return (<div>
        <Wheel wheel={wheel} title="wheelRight"/>
        <div className="container">
            <DynamicImages images={singleImage} className="imageinteriorNatan"/>
            <div>
                <Opening title='opening'>
                    <h3>Öffnungszeiten</h3>
                    <Text text={oeffnungszeiten} formatierung='openingText' color='white'/>
                </Opening>
                <Button name="Reservierung" styleName='Reservation'/>
            </div>
        </div>
    </div>)
}

export default OpeningTimeSection