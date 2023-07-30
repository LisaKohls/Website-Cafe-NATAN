import {partner, volunteer} from "../../resources/textContent/textContent";
import Button from "../button/Button";
import React from "react";
import Text from "../text/Text";
import Heading from "../text/Heading";
import '../../styles/scrollimages/Gallery.css';
import Gallery from "../scrollimages/Gallery";
import DynamicImages from "../interactiveelements/DynamicImages";
import '../../styles/interactiveelements/DynamicImages.css';

//this component is displaying all content on the white section of the website
function WhiteSection() {

    //this is responsible for showing the logos with horizontal scrolling
    const logos = [
        require('../../resources/partnerLogos/Porsche_Logo.png'),
        require("../../resources/partnerLogos/Akis Getränke.png"),
        require("../../resources/partnerLogos/Biokiste Ortlieb.png"),
        require("../../resources/partnerLogos/Nast.png"),
        require("../../resources/partnerLogos/ginstr_logo.png"),
        require("../../resources/partnerLogos/GMW_Steuerberater_Logo.png"),
        require("../../resources/partnerLogos/DesignPlus_Logo.png"),
        require("../../resources/partnerLogos/gourmet-kochmanufaktur_logo.png"),
        require("../../resources/partnerLogos/Karl_haidle_weingut_logo.svg.png"),
        require("../../resources/partnerLogos/kessler_logo.png"),
        require("../../resources/partnerLogos/Leonhard-Stuttgart_Logo.png"),
        require("../../resources/partnerLogos/Mokuska.jpg"),
        require("../../resources/partnerLogos/the-english-tearoom-logo.png"),
        require("../../resources/partnerLogos/Schönbuch.png"),
        require("../../resources/partnerLogos/English tearoom.jpg"),
        require("../../resources/partnerLogos/Der-Blumenladen-Stuttgart_Logo.png"),
    ];

    //this is the style for the arrow icon for the gallery
    const blackIcon = {
        color: "black",
        backgroundColor: "white",
        hoverColor: "var(--secondaryColor)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "4px",
    };

    const images = [
        require("../../resources/gallery/Volunteers gesucht.jpg"),
        require("../../resources/gallery/STELP-Cinnema for good_9.jpg"),
    ];

    const isMobile = window.innerWidth <= 768;

    return (
        <div>
            <div id="produkteUndPartner" className="sectionPadding"/>
            <Heading title='UNSERE PARTNER*INNEN' color='black'/>
            <div id="produkteUndPartner"/>
            <Gallery images={logos}
                     slidesToShow={isMobile ? 2 : 4}
                     slidesToScroll={1}
                     infinite={true}
                     centerMode={isMobile}
                     imageHeight={'100px'}
                     iconStyle={blackIcon}
            />
            <Text text={partner} formatierung='block' color='black'/>
            <div id="volunteers"/>
            <Heading title='UNSER NATAN DREAM TEAM' color='black'/>
            <DynamicImages images={images} className="imagevolunteer"/>
            <Text text={volunteer} formatierung='block' color='black'/>
            <Button name='Werde Volunteer' styleName='Volunteer'/>
            <div id="footer" className="sectionPadding"/>
        </div>
    )
}

export default WhiteSection