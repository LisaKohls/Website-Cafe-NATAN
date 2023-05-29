import React from 'react';
import './index.css';
import {oeffnungszeiten} from './Resources/textInhalte'
import Navbar from './Components/Navbar';
import Button from './Components/Button';

import Footer from './Components/Footer';
import {ueberNatan} from './Resources/textInhalte'
import Text from './Components/Text'
import {volunteer} from './Resources/textInhalte';
import ImgPosition from "./Components/ImgPosition";
import NatanLogo from './Resources/Natanlogo.png';
import Gallery from "./Components/Gallery";
import BoxWithText from "./Components/BoxWithText";
import Page from "./Components/Page";
import Partner from './Resources/img.png'
import InteriorNatan from './Resources/interiorNatan.jpg'
import SpecialFood from "./Components/speisen/SpecialFood";


function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <ImgPosition name='logo' image={NatanLogo}/>
                <div id="ueberUns" className="sectionPadding"/>
                <h2 className='ueberschrift'>Über uns</h2>
                <Text text={ueberNatan} formatierung='blocksatz'/>
                <div id="ueberUns" className="sectionPadding"/>
                <Text text='Open for you' formatierung='decoration'/>
                <div className="container">
                    <ImgPosition name='interiorNatan' image={InteriorNatan}/>
                    <BoxWithText title='Öffnungszeiten' >
                        <Text text='Öffnungszeiten' formatierung='linksbündig'/>
                        <Text text={oeffnungszeiten} formatierung='linksbündigZeilenabstand'/>
                        <Button name="Reservierung"/>
                    </BoxWithText>
                </div>
                <h2 className='ueberschrift'>Unsere Speisekarte</h2>
                <SpecialFood/>
                <Button name="Speisekarte"/>
                <h2 id="events" className="sectionPadding">Events </h2>
                <Gallery/>
            </Page>
            <Page className="blackText paddingPage">
                <h2 id="produkteUndPartner" className="sectionPadding">Produkte & Partner</h2>
                <ImgPosition name='partner' image={Partner}/>
                <div id="volunteers" className="sectionPadding"/>
                <Text text={volunteer} formatierung='mittig'/>
                <Button name="Volunteer"/>
                <div id="footer" className="sectionPadding"/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
