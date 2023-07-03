import ImgPosition from "../images/ImgPosition";
import {partner, volunteer} from "../../resources/textInhalte";
import CoffeeMachine from "../../resources/gallery/barNatan2.jpg";
import Button from "../Button";
import React from "react";
import BlackFontText from "../text/BlackFontText";
import HeadlineSection from "./HeadlineSection";


function WhiteSection() {
    return (
        <div>
            <div id="produkteUndPartner" className="sectionPadding"/>
            <HeadlineSection title='UNSERE PARTNER*INNEN' color='black'/>
            <div id="produkteUndPartner"/>
            <BlackFontText text={partner} formatierung='block' color='black'/>
            <div id="volunteers"/>
            <HeadlineSection title='UNSER NATAN DREAM TEAM' color='black'/>
            <div className='container'>
                <BlackFontText text={volunteer} formatierung='block' color='black'/>
                <ImgPosition name='volunteer' image={CoffeeMachine}/>
            </div>
            <Button name='Werde Volunteer' styleName='Volunteer'/>
            <div id="footer" className="sectionPadding"/>
        </div>
    )
}

export default WhiteSection