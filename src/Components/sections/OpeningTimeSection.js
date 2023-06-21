import React from "react";
import Text from "../Text";
import ImgPosition from "../ImgPosition";
import BarOriginal from "../../Resources/gallery/barNatan1.jpg";
import BoxWithText from "../BoxWithText";
import {oeffnungszeiten} from "../../Resources/textInhalte";
import Button from "../Button";
import Wheel from '../../Resources/logos/rad_weiß.png'


function OpeningTimeSection() {
    return(<div>
            <ImgPosition name='wheelright' image={Wheel}/>
            <Text text='Come by' formatierung='decoration'/>
                <div className="container">
                    <ImgPosition name='interiorNatan' image={BarOriginal}/>
                    <Text text='say hi' formatierung='decorationsayhi'/>
                    <div>
                        <BoxWithText title='Öffnungszeiten'>
                            <Text text='Öffnungszeiten:' formatierung='linksbündig'/>
                            <Text text={oeffnungszeiten} formatierung='linksbündigZeilenabstand'/>
                        </BoxWithText>
                        <Button name="Reservierung" styleName='Reservierung'/>
                    </div>
                </div>
            </div>)
}

export default OpeningTimeSection