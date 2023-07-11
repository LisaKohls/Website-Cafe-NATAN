import React from "react";
import ImgPosition from "../images/ImgPosition";
import BarOriginal from "../../resources/gallery/barNatan1.jpg";
import BoxWithText from "../text/BoxWithText";
import {oeffnungszeiten} from "../../resources/textInhalte";
import Button from "../button/Button";
import wheel from '../../resources/logos/rad_weiß.png'
import Text from "../text/Text";
import Wheel from "../interactiveelements/Wheel";


function OpeningTimeSection() {
    return (<div>
        <Wheel wheel={wheel} title="wheelRight"/>
        <div className="container">
            <ImgPosition name='interiorNatan' image={BarOriginal}/>
            <div>
                <BoxWithText title='opening'>
                    <Text text='Öffnungszeiten:' formatierung='boldHeading' color='white'/>
                    <Text text={oeffnungszeiten} formatierung='openingText' color='white'/>
                </BoxWithText>
                <Button name="Reservierung" styleName='Reservierung'/>
            </div>
        </div>
    </div>)
}

export default OpeningTimeSection