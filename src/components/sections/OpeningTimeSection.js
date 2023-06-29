import React from "react";
import ImgPosition from "../images/ImgPosition";
import BarOriginal from "../../resources/gallery/barNatan1.jpg";
import BoxWithText from "../text/BoxWithText";
import {oeffnungszeiten} from "../../resources/textInhalte";
import Button from "../Button";
import Wheel from '../../resources/logos/rad_weiß.png'
import WhiteFontText from "../text/WhiteFontText";
import WheelImg from "../images/WheelImg";


function OpeningTimeSection() {
    return(<div>
            <WheelImg name='wheelright' image={Wheel}/>
                <div className="container">
                    <ImgPosition name='interiorNatan' image={BarOriginal}/>

                    <div>
                        <BoxWithText title='opening'>
                            <WhiteFontText text='Öffnungszeiten:' formatierung='boldHeading'/>
                            <WhiteFontText text={oeffnungszeiten} formatierung='linksbündigZeilenabstand'/>
                        </BoxWithText>
                        <Button name="Reservierung" styleName='Reservierung'/>
                    </div>
                </div>
            </div>)
}

export default OpeningTimeSection