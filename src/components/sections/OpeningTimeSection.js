import React from "react";
import Text from "../Text";
import ImgPosition from "../ImgPosition";
import BarOriginal from "../../resources/gallery/barNatan1.jpg";
import BoxWithText from "../BoxWithText";
import {oeffnungszeiten} from "../../resources/textInhalte";
import Button from "../Button";
import Wheel from '../../resources/logos/rad_weiß.png'


function OpeningTimeSection() {
    return(<div>
            <ImgPosition name='wheelright' image={Wheel}/>

                <div className="container">
                    <ImgPosition name='interiorNatan' image={BarOriginal}/>

                    <div>
                        <BoxWithText title='opening'>
                            <Text text='Öffnungszeiten:' formatierung='linksbündig'/>
                            <Text text={oeffnungszeiten} formatierung='linksbündigZeilenabstand'/>
                        </BoxWithText>
                        <Button name="Reservierung" styleName='Reservierung'/>
                    </div>
                </div>
            </div>)
}

export default OpeningTimeSection