import {
    originName,
    ueberNatan,
    ueberStelp,
    foodDescription,
    food1, description1, food2, description2, food3, description3
} from "../../resources/textContent/textContent";
import OpeningTimeSection from "./OpeningTimeSection";
import SpecialFood from "../foodanddrinks/SpecialFood";
import Button from "../button/Button";
import Events from "../events/Events";
import React from "react";
import Heading from "../text/Heading";
import stageFood1 from '../../resources/specialfoodstaging/breakfast1.jpg'
import stageFood2 from '../../resources/specialfoodstaging/drink2.jpg'
import stageFood3 from '../../resources/specialfoodstaging/sweets3.jpg'
import FoodStage from "../foodanddrinks/FoodStage";
import Text from '../text/Text'
import Gallery from "../scrollimages/Gallery";
import DynamicImages from "../interactiveelements/DynamicImages";

//this component is displaying all content on the black section of the website
function BlackSection() {
    const images = [
        require("../../resources/events/natan-after-work.png"),
        require("../../resources/events/natan-pubquiz.png"),
    ];

    const whiteIcon = {
        color: "white",
        backgroundColor: "var(--mainColor)",
        hoverColor: "var(--secondaryColor)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "4px",
    };

    const foodImages = [
        require('../../resources/food/imgCake.jpg'),
        require('../../resources/food/imgDesert.jpg'),
        require( '../../resources/food/imgCoffee.jpg'),
    ]


    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1330;

    return (<>
            <Heading title='ZUM WOHLE ALLER' color="white"/>
            <Text text={ueberNatan} formatierung='block' color='white'/>
            <div id="opening"/>
            <div className="sectionPadding"/>
            <OpeningTimeSection/>
            <div id='stelp'/>
            <Heading title='A PART OF THE STELP FAMILY' color="white"/>
            <Text text={ueberStelp} formatierung='block' color='white'/>
            <div id="menu"/>
            <Heading title='FOOD & DRINKS - MODERN, REGIONAL, INNOVATIV' color="white"/>
            <DynamicImages images={foodImages} className="imagefood" containerClass="container"/>
            <Text text={foodDescription} formatierung='block' color='white'/>
            <SpecialFood>
                <FoodStage name={food1} image={stageFood1} description={description1}/>
                <FoodStage name={food2} image={stageFood2} description={description2}/>
                <FoodStage name={food3} image={stageFood3} description={description3}/>
            </SpecialFood>
            <Button name='Speisekarte' styleName='Menu'/>
            <Heading title='ABIE NATHAN - DER MANN HINTER DEM NAMEN' color="white"/>
            <Text text={originName} formatierung='block' color='white'/>
            <div id="events"/>
            <Heading title='AKTUELLE EVENTS' color="white"/>
            <Gallery images={images}
                     infinite={true}
                     centerMode={true}
                     slidesToScroll={1}
                     slidesToShow={2}
                     imageHeight={isMobile ? '500px' : '600px'}
                     iconStyle={whiteIcon}
            />
            <Heading title='DEIN EVENT IM NATAN - MIETEN, FEIERN, GUTES TUN' color="white"/>
            <Events/>
            <div id="endPage" className="sectionPadding"/>
        </>
    )
}

export default BlackSection