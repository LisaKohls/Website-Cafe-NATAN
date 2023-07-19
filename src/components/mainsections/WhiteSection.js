import ImgPosition from "../images/ImgPosition";
import {partner, volunteer} from "../../resources/textContent/textContent";
import CoffeeMachine from "../../resources/gallery/barNatan2.jpg";
import Button from "../button/Button";
import React from "react";
import Text from "../text/Text";
import HeadlineSection from "../text/HeadlineSection";
import Img1 from "../../resources/partnerLogos/Akis Getränke.png";
import Img2 from "../../resources/partnerLogos/Biokiste Ortlieb.png";
import Img3 from "../../resources/partnerLogos/Nast.png";
import Img4 from "../../resources/partnerLogos/ginstr_logo.png";
import Img5 from "../../resources/partnerLogos/GMW_Steuerberater_Logo.png";
import Img6 from "../../resources/partnerLogos/DesignPlus_Logo.png";
import Img7 from "../../resources/partnerLogos/gourmet-kochmanufaktur_logo.png";
import Img8 from "../../resources/partnerLogos/Karl_haidle_weingut_logo.svg.png";
import Img9 from "../../resources/partnerLogos/kessler_logo.png";
import Img10 from "../../resources/partnerLogos/Leonhard-Stuttgart_Logo.png";
import Img11 from "../../resources/partnerLogos/Mokuska.jpg";
import Img12 from "../../resources/partnerLogos/the-english-tearoom-logo.png";
import Img13 from "../../resources/partnerLogos/Schönbuch.png";
import Img14 from "../../resources/partnerLogos/English tearoom.jpg";
import Img15 from "../../resources/partnerLogos/Der-Blumenladen-Stuttgart_Logo.png";
import Img16 from '../../resources/partnerLogos/Porsche_Logo.png'
import ScrollImages from "../scrollimages/ScrollImages";



function WhiteSection() {

    const logos = [
        {src:Img16 , alt: 'Porsche Logo'},
        {src: Img1, alt: 'Akis Getränke Logo'},
        {src: Img2, alt: 'Biokiste Ortlieb Logo'},
        {src: Img3, alt: 'Nast Logo'},
        {src: Img4, alt: 'Ginster Logo'},
        {src: Img5, alt: 'GMW Steuerberater Logo'},
        {src: Img6, alt: 'DesignPlus Logo'},
        {src: Img7, alt: 'Gourmet Kochmanufaktur Logo'},
        {src: Img8, alt: 'Karl Haidle Weingut Logo'},
        {src: Img9, alt: 'Kessler Logo'},
        {src: Img10, alt: 'Leonhard Stuttgart Logo'},
        {src: Img11, alt: 'Mokuska Logo'},
        {src: Img12, alt: 'The english tearoom Logo'},
        {src: Img13, alt: 'Schönbuch Logo'},
        {src: Img14, alt: 'English Tearoom Logo'},
        {src: Img15, alt: 'Der Blumenladen Stuttgart Logo'},
    ];



    return (
        <div>
            <div id="produkteUndPartner" className="sectionPadding"/>
            <HeadlineSection title='UNSERE PARTNER*INNEN' color='black'/>
            <div id="produkteUndPartner"/>
            <ScrollImages images={logos} imageSize="small" small={true}/>
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