import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

import Footer from './components/Footer';
import {ueberNatan, ueberNatanSecondPart, originName, partner} from './resources/textInhalte'
import Text from './components/text/BlackFontText'
import {volunteer} from './resources/textInhalte';
import ImgPosition from "./components/images/ImgPosition";
import Gallery from "./components/Gallery";
import Page from "./components/Page";
import Partner from './resources/img.png'
import SpecialFood from "./components/speisen/SpecialFood";
import CoffeeMachine from './resources/gallery/barNatan2.jpg'
import Events from "./components/Events";
import FirstSection from "./components/sections/FirstSection";
import OpeningTimeSection from "./components/sections/OpeningTimeSection";
import HeadlineSection from "./components/sections/WhiteHeadlineSection";
import ImageScrollGallery from "./components/EventGallery";
import NewFooter from "./components/NewFooter";
import BlackSection from "./components/sections/BlackSection";
import WhiteSection from "./components/sections/WhiteSection";




function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <BlackSection />
            </Page>
            <Page className="blackText paddingPage">
                <WhiteSection />
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
