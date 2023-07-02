
import ImgPosition from "../images/ImgPosition";
import {partner, volunteer} from "../../resources/textInhalte";
import CoffeeMachine from "../../resources/gallery/barNatan2.jpg";
import Button from "../Button";
import React from "react";
import BlackHeadlineSection from "./BlackHeadlineSection";
import BlackFontText from "../text/BlackFontText";


function WhiteSection(){
    return(
        <div>
            <div id="produkteUndPartner" className="sectionPadding"/>
            <BlackHeadlineSection title='Unsere Partner*innen' />
            <div id="produkteUndPartner"/>
            <BlackFontText text={partner} formatierung='block'/>
            <div id="volunteers"/>
            <BlackHeadlineSection title='UNSER NATAN DREAM TEAM'/>
            <div className='container'>
                <BlackFontText text={volunteer} formatierung='block'/>
                <ImgPosition name='volunteer' image={CoffeeMachine}/>
            </div>
            <Button name='Werde Volunteer' styleName='Volunteer'/>
            <div id="footer" className="sectionPadding"/>
        </div>
    )
}

export default WhiteSection