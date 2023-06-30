import FirstSection from "./FirstSection";
import {originName, originName2, ueberNatan, ueberNatanSecondPart} from "../../resources/textInhalte";
import OpeningTimeSection from "./OpeningTimeSection";
import SpecialFood from "../speisen/SpecialFood";
import Button from "../Button";
import ImageScrollGallery from "../EventGallery";
import Events from "../Events";
import React from "react";
import WhiteFontText from "../text/WhiteFontText";
import WhiteHeadlineSection from "./WhiteHeadlineSection";

function BlackSection() {
    return(<>
            <FirstSection/>
            <div id="opening" />
            <WhiteHeadlineSection title='NON-PROFIT CAFÉ | BAR' color="white"/>
            <WhiteFontText text={ueberNatan} formatierung='blocksatz'/>
            <div className="sectionPadding"/>
            <OpeningTimeSection/>
            <WhiteHeadlineSection title='VORBILD. IDEE. KONZEPT.
                    DAS NATAN' color="white"/>
            <WhiteFontText text={ueberNatanSecondPart} formatierung='blocksatz'/>
            <div id="menu"/>
            <WhiteHeadlineSection title='UNSERE SPEISEN & GETRÄNKE' color="white"/>
            <SpecialFood/>
            <Button name='Speisekarte' styleName='Speisekarte'/>
            <WhiteHeadlineSection title='WARUM NATAN?' color="white"/>
            <WhiteFontText text={originName} formatierung='blocksatz'/>
            <WhiteFontText text={originName2} formatierung='blocksatz'/>
            <div id="events"/>
            <WhiteHeadlineSection title='EVENTS' color="white"/>
            <ImageScrollGallery/>
            <Events/>
            <div id="endPage" className="sectionPadding"/>
    </>
    )
}

export default BlackSection