import FirstSection from "./FirstSection";
import {
        originName,
        ueberNatan,
        ueberStelp,
        foodDescription,
        food1, description1, food2, description2, food3, description3
} from "../../resources/textInhalte";
import OpeningTimeSection from "./OpeningTimeSection";
import SpecialFood from "../foodanddrinks/SpecialFood";
import Button from "../Button";
import Events from "../Events";
import React from "react";
import HeadlineSection from "../text/HeadlineSection";
import Food1 from '../../resources/food/imgCake.jpg'
import Food2 from '../../resources/food/imgDesert.jpg'
import Food3 from '../../resources/food/imgCoffee.jpg'
import stageFood1 from '../../resources/specialFoodStaging/breakfast1.jpg'
import stageFood2 from '../../resources/specialFoodStaging/drink2.jpg'
import stageFood3 from '../../resources/specialFoodStaging/sweets3.jpg'
import Gallery from "../Gallery";
import Img1 from "../../resources/events/events1.jpg";
import Img2 from "../../resources/events/events2.jpg";
import ImgPosition from "../images/ImgPosition";
import FoodStage from "../foodanddrinks/FoodStage";
import Text from '../text/Text'

function BlackSection() {
    const images = [
        {src: Img1, alt: "Event Poster"},
        {src: Img2, alt: "Event Poster"},
    ];

    return (<>
            <FirstSection/>
            <div id="opening" />
            <HeadlineSection title='ZUM WOHLE. ALLER.' color="white"/>
            <Text text={ueberNatan} formatierung='block' color='white'/>
            <div className="sectionPadding"/>
            <OpeningTimeSection/>
            <div id='stelp' />
            <HeadlineSection title='A PART OF THE STELP FAMILY' color="white"/>
            <Text text={ueberStelp} formatierung='block' color='white'/>
            <div id="menu"/>
            <HeadlineSection title='FOOD & DRINKS - MODERN, REGIONAL, INNOVATIV' color="white"/>
            <div className='container'>
                <ImgPosition image={Food1} name='food'/>
                <ImgPosition image={Food2} name='food'/>
                <ImgPosition image={Food3} name='food'/>
            </div>
            <Text text={foodDescription} formatierung='block' color='white'/>
            <SpecialFood>
                    <FoodStage name={food1} image={stageFood1} description={description1}/>
                    <FoodStage name={food2} image={stageFood2} description={description2}/>
                    <FoodStage name={food3} image={stageFood3} description={description3}/>
            </SpecialFood>
            <Button name='Speisekarte' styleName='Speisekarte'/>
            <HeadlineSection title='ABIE NATHAN - DER MANN HINTER DEM NAMEN' color="white"/>
            <Text text={originName} formatierung='block' color='white'/>
            <div id="events"/>
            <HeadlineSection title='AKTUELLE EVENTS' color="white"/>
            <Gallery images={images} />
            <HeadlineSection title='DEIN EVENT IM NATAN - MIETEN, FEIERN, GUTES TUN' color="white"/>
            <Events/>
            <div id="endPage" className="sectionPadding"/>
        </>
    )
}

export default BlackSection