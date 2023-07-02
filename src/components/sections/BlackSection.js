import FirstSection from "./FirstSection";
import {
        originName,
        ueberNatan,
        ueberStelp,
        foodDescription,
        food1, description1, food2, description2, food3, description3
} from "../../resources/textInhalte";
import OpeningTimeSection from "./OpeningTimeSection";
import SpecialFood from "../speisen/SpecialFood";
import Button from "../Button";
import Events from "../Events";
import React from "react";
import WhiteFontText from "../text/WhiteFontText";
import WhiteHeadlineSection from "./WhiteHeadlineSection";
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
import FoodStage from "../speisen/FoodStage";

function BlackSection() {
    const images = [
        {src: Img1, alt: "Event Poster"},
        {src: Img2, alt: "Event Poster"},
    ];

    return (<>
            <FirstSection/>
            <div id="opening" />
            <WhiteHeadlineSection title='ZUM WOHLE. ALLER.' color="white"/>
            <WhiteFontText text={ueberNatan} formatierung='blocksatz'/>
            <div className="sectionPadding"/>
            <OpeningTimeSection/>
            <div id='stelp' />
            <WhiteHeadlineSection title='A part of the STELP Family' color="white"/>
            <WhiteFontText text={ueberStelp} formatierung='blocksatz'/>

            <div id="menu"/>
            <WhiteHeadlineSection title='Food & Drinks - Modern, regional, innovativ' color="white"/>
            <div className='container'>
                <ImgPosition image={Food1} name='food'/>
                <ImgPosition image={Food2} name='food'/>
                <ImgPosition image={Food3} name='food'/>
            </div>
            <WhiteFontText text={foodDescription} formatierung='blocksatz'/>
            <SpecialFood>
                    <FoodStage name={food1} image={stageFood1} description={description1}/>
                    <FoodStage name={food2} image={stageFood2} description={description2}/>
                    <FoodStage name={food3} image={stageFood3} description={description3}/>
            </SpecialFood>
            <Button name='Speisekarte' styleName='Speisekarte'/>
            <WhiteHeadlineSection title='Abie Nathan - Der Mann hinter dem Namen' color="white"/>
            <WhiteFontText text={originName} formatierung='blocksatz'/>
            <div id="events"/>
            <WhiteHeadlineSection title='Dein Event im NATAN - Mieten, Feiern, Gutes tun' color="white"/>
            <Gallery images={images} />
            <Events/>
            <div id="endPage" className="sectionPadding"/>
        </>
    )
}

export default BlackSection