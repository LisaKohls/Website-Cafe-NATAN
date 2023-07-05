import ImgPosition from "../images/ImgPosition";
import {partner, volunteer} from "../../resources/textInhalte";
import CoffeeMachine from "../../resources/gallery/barNatan2.jpg";
import Button from "../Button";
import React from "react";
import Text from "../text/Text";
import HeadlineSection from "../text/HeadlineSection";
import Gallery from "../Gallery";
import Img1 from "../../resources/partnerLogos/Akis Getränke.png";
import Img2 from "../../resources/partnerLogos/Biokiste Ortlieb.png";
import Img3 from "../../resources/partnerLogos/Nast.png";
import Img4 from "../../resources/partnerLogos/ginstr.jpg";
import Img5 from "../../resources/partnerLogos/GMW Steuerberater.png";
import Img6 from "../../resources/partnerLogos/DesignPlus.png";
import Img7 from "../../resources/partnerLogos/gourmet-kochmanufaktur-logo.png";
import Img8 from "../../resources/partnerLogos/Karl_haidle_weingut_logo.svg.png";
import Img9 from "../../resources/partnerLogos/kessler_logo.png";
import Img10 from "../../resources/partnerLogos/Leonhard Stuttgart.png";
import Img11 from "../../resources/partnerLogos/Mokuska.jpg";
import Img12 from "../../resources/partnerLogos/the-english-tearoom-logo-black.png";
import Img13 from "../../resources/partnerLogos/Schönbuch.png";
import Img14 from "../../resources/partnerLogos/English tearoom.jpg";
import Img15 from "../../resources/partnerLogos/Der Blumenladen Stuttgart.png";



function WhiteSection() {

    const logos = [
        {src: Img1, alt: 'Natan Bar'},
        {src: Img2, alt: 'Natan Bar'},
        {src: Img3, alt: 'Outside View Natan'},
        {src: Img4, alt: 'Interior Natan'},
        {src: Img5, alt: 'food closeup'},
        {src: Img6, alt: 'food closeup'},
        {src: Img7, alt: 'food closeup'},
        {src: Img8, alt: 'food closeup'},
        {src: Img9, alt: 'food closeup'},
        {src: Img10, alt: 'food closeup'},
        {src: Img11, alt: 'food closeup'},
        {src: Img12, alt: 'food closeup'},
        {src: Img13, alt: 'food closeup'},
        {src: Img14, alt: 'food closeup'},
        {src: Img15, alt: 'food closeup'},
    ];

    const logoStyle = {
        width: 'auto',
        height: '5px',
        border: 'red solid 2px',
    };

    return (
        <div>
            <div id="produkteUndPartner" className="sectionPadding"/>
            <HeadlineSection title='UNSERE PARTNER*INNEN' color='black'/>
            <Gallery images={logos} imageStyle={logoStyle} />
            <div id="produkteUndPartner"/>
            <Text text={partner} formatierung='block' color='black'/>
            <div id="volunteers"/>
            <HeadlineSection title='UNSER NATAN DREAM TEAM' color='black'/>
            <div className='container'>
                <ImgPosition name='volunteer' image={CoffeeMachine}/>
                <Text text={volunteer} formatierung='block' color='black'/>
            </div>
            <Button name='Werde Volunteer' styleName='Volunteer'/>
            <div id="footer" className="sectionPadding"/>
        </div>
    )
}

export default WhiteSection