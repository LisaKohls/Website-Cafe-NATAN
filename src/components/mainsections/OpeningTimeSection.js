import React from "react";
import ImgPosition from "../images/ImgPosition";
import BarOriginal from "../../resources/gallery/barNatan1.jpg";
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

const customStyles = {
    display: "block",
    marginRight: "5rem",
    marginLeft: "0",
    width: "348px",
    height: "235px",
};

function OpeningTimeSection() {
    return (<div>
        <Wheel wheel={wheel} title="wheelRight"/>
        <div className="container">
            <DynamicImages images={singleImage} styles={customStyles}/>
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