import React from 'react';
import './index.css';
import {oeffnungszeiten} from './Resources/textInhalte'
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Oeffnungszeiten from './Components/Oeffnungszeiten';
import Footer from './Components/Footer';
import {ueberNatan} from './Resources/textInhalte'
import Text from './Components/Text'
import {volunteer} from './Resources/textInhalte';
import ImgCenter from "./Components/ImgCenter";
import natanLogo from './Resources/Natanlogo.png';
import eventplaceholder from './Resources/EventPlaceholder.png'
import Gallery from "./Components/Gallery";

import Speisekarte from "./Components/Speisekarte";
import Page from "./Components/Page";
import Partner from './Resources/img.png'

function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <ImgCenter name='logo' image={natanLogo}/>
                <div id="ueberUns" className="sectionPadding"/>
                <Gallery/>
                <Text text={ueberNatan}/>
                <div id="oeffnungszeiten" className="sectionPadding"/>
                <Oeffnungszeiten inhalt={oeffnungszeiten}/>
                <h2 id="reservierung" className="sectionPadding">Du möchtest einen Tisch reservieren?</h2>
                <Button name="Reservierung"/>
                <h2>Unsere Speisekarte</h2>
                <Button name="Speisekarte"/>
                <h2 id="events" className="sectionPadding">Events </h2>
            </Page>
            <Page className="blackText paddingPage">
                <h2 id="produkteUndPartner" className="sectionPadding">Produkte & Partner</h2>
                <ImgCenter name='partner' image={Partner}/>
                <div id="volunteers" className="sectionPadding"/>
                <Text text={volunteer}/>
                <Button name="Volunteer"/>
                <div id="footer" className="sectionPadding"/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
