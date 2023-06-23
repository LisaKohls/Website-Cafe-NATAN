import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

import Footer from './components/Footer';
import {ueberNatan, ueberNatanSecondPart, originName, partner} from './resources/textInhalte'
import Text from './components/Text'
import {volunteer} from './resources/textInhalte';
import ImgPosition from "./components/ImgPosition";
import Gallery from "./components/Gallery";
import Page from "./components/Page";
import Partner from './resources/img.png'
import SpecialFood from "./components/speisen/SpecialFood";
import CoffeeMachine from './resources/gallery/barNatan2.jpg'
import Events from "./components/Events";
import FirstSection from "./components/sections/FirstSection";
import OpeningTimeSection from "./components/sections/OpeningTimeSection";
import HeadlineSection from "./components/sections/HeadlineSection";
import ImageScrollGallery from "./components/EventGallery";




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
                <ImageScrollGallery/>
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
