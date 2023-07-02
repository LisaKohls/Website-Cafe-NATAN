import FirstSection from "./FirstSection";
import {originName, originName2, ueberNatan, ueberNatan2, ueberNatan3, ueberNatanSecondPart, ueberStelp, ueberStelp2, ueberStelp3, ueberStelpLink, foodDescription} from "../../resources/textInhalte";
import OpeningTimeSection from "./OpeningTimeSection";
import SpecialFood from "../speisen/SpecialFood";
import Button from "../Button";
import ImageScrollGallery from "../EventGallery";
import Events from "../Events";
import React from "react";
import WhiteFontText from "../text/WhiteFontText";
import WhiteHeadlineSection from "./WhiteHeadlineSection";
import Food1 from '../../resources/food/imgCake.jpg'
import Food2 from '../../resources/food/imgDesert.jpg'
import Food3 from '../../resources/food/imgCoffee.jpg'
import ImgPosition from "../images/ImgPosition";

function BlackSection() {
    return(<>
            <FirstSection/>
            <div id="opening" />
            <WhiteHeadlineSection title='ZUM WOHLE. ALLER.' color="white"/>
            <WhiteFontText text={ueberNatan} formatierung='blocksatz'/>
            <WhiteFontText text={ueberNatan3} formatierung='blocksatz'/>
            <div className="sectionPadding"/>
            <OpeningTimeSection/>
            <div id='stelp' />
            <WhiteHeadlineSection title='A part of the STELP Family' color="white"/>
            <WhiteFontText text={ueberStelp} formatierung='blocksatz'/>
            <WhiteFontText text={ueberStelpLink} formatierung='linksbündig'/>
            <div id="menu"/>
            <WhiteHeadlineSection title='Food & Drinks - Modern, regional, innovativ' color="white"/>
            <div className='container'>
                <ImgPosition image={Food1} name='food'/>
                <ImgPosition image={Food2} name='food'/>
                <ImgPosition image={Food3} name='food'/>
            </div>
            <WhiteFontText text={foodDescription} formatierung='blocksatz'/>
            <div className='sectionPadding'/>
            <SpecialFood/>
            <Button name='Speisekarte' styleName='Speisekarte'/>
            <WhiteHeadlineSection title='Abie Nathan - Der Mann hinter dem Namen' color="white"/>
            <WhiteFontText text={originName} formatierung='blocksatz'/>

            <div id="events"/>
            <WhiteHeadlineSection title='Dein Event im NATAN - Mieten, Feiern, Gutes tun' color="white"/>
            <ImageScrollGallery/>
            <Events/>
            <div id="endPage" className="sectionPadding"/>
    </>
    )
}

export default BlackSection