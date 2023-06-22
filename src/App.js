import React from 'react';
import './index.css';
import {oeffnungszeiten} from './Resources/textInhalte'
import Navbar from './Components/Navbar';
import Button from './Components/Button';

import Footer from './Components/Footer';
import {ueberNatan, ueberNatanSecondPart, originName, partner} from './Resources/textInhalte'
import Text from './Components/Text'
import {volunteer} from './Resources/textInhalte';
import ImgPosition from "./Components/ImgPosition";
import Gallery from "./Components/Gallery";
import Page from "./Components/Page";
import Partner from './Resources/img.png'
import SpecialFood from "./Components/speisen/SpecialFood";
import CoffeeMachine from './Resources/gallery/barNatan2.jpg'
import Events from "./Components/Events";
import FirstSection from "./Components/sections/FirstSection";
import OpeningTimeSection from "./Components/sections/OpeningTimeSection";
import HeadlineSection from "./Components/sections/HeadlineSection";




function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <FirstSection/>
                <HeadlineSection title='NON-PROFIT CAFÉ | BAR' color="white"/>
                <Text text={ueberNatan} formatierung='blocksatz'/>
                <div id="opening" className="sectionPadding"/>
                <OpeningTimeSection/>
                <HeadlineSection title='VORBILD. IDEE. KONZEPT.
                    DAS NATAN' color="white"/>
                <Text text={ueberNatanSecondPart} formatierung='blocksatz'/>
                <div id="menu"/>
                <HeadlineSection title='UNSERE SPEISEN & GETRÄNKE' color="white"/>
                <SpecialFood/>
                <Button name='Speisekarte' styleName='Speisekarte'/>
                <HeadlineSection title='WARUM NATAN?' color="white"/>
                <Text text={originName} formatierung='blocksatz'/>
                <div id="events"/>
                <HeadlineSection title='EVENTS' color="white"/>
                <Events/>
                <div id="endPage" className="sectionPadding"/>
            </Page>
            <Page className="blackText paddingPage">
                <HeadlineSection title='PRODUKTE & PARTNER' color="black"/>
                <div id="produkteUndPartner"/>
                <ImgPosition name='partner' image={Partner}/>
                <Text text={partner} formatierung='blocksatzSchwarz'/>
                <div id="volunteers"/>
                <HeadlineSection title='UNSER NATAN DREAM TEAM' color="black"/>
                <div className='container'>
                    <Text text={volunteer} formatierung='blocksatzSchwarz'/>
                    <ImgPosition name='volunteer' image={CoffeeMachine}/>
                </div>
                <Button name='Werde Volunteer' styleName='Volunteer'/>
                <div id="footer" className="sectionPadding"/>
            </Page>
            <Page>
                <Gallery />

            </Page>
            <div id='kontakt'/>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
