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
import NatanLogo from './Resources/Natan_Logo_white.png';
import Gallery from "./Components/Gallery";
import BoxWithText from "./Components/BoxWithText";
import Page from "./Components/Page";
import Partner from './Resources/img.png'
import InteriorNatan from './Resources/interiorNatan.jpg'
import SpecialFood from "./Components/speisen/SpecialFood";
import Bar from './Resources/barNatan1_edited.jpg'


function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <div id="ueberUns" className="sectionPadding"/>
                <h2 className='ueberuns'>Über uns</h2>
                <Text text={ueberNatan} formatierung='blocksatz'/>
                <div id="ueberUns" className="sectionPadding"/>
                <Text text='Open for you' formatierung='decoration'/>
                <div className="container">
                    <ImgPosition name='interiorNatan' image={InteriorNatan}/>
                    <div>
                    <BoxWithText title='Öffnungszeiten' >
                        <Text text='Öffnungszeiten' formatierung='linksbündig'/>
                        <Text text={oeffnungszeiten} formatierung='linksbündigZeilenabstand'/>
                    </BoxWithText>
                        <Button name="Reservierung"/>
                    </div>
                </div>
                <h2 className='ueberschrift'>Unsere Speisekarte</h2>
                <SpecialFood/>
                <Button name="Speisekarte"/>
                <h2 id="events" className='ueberschrift'>Events </h2>
                <Gallery/>
            </Page>
            <Page className="blackText paddingPage">
                <h2 id="produkteUndPartner" className="ueberschrift">Produkte & Partner</h2>
                <div className='container'>
                    <ImgPosition name='partner' image={Partner}/>
                    <Text text={volunteer} formatierung='blocksatzSchwarz'/>
                </div>
                <div id="volunteers" className="sectionPadding"/>
                <h2 id="volunteer" className="ueberschrift">Werde Volunteer</h2>
                <div className='container'>
                    <Text text={volunteer} formatierung='blocksatzSchwarz'/>
                    <ImgPosition name='volunteer' image={Bar}/>
                </div>
                <Button name="Volunteer"/>
                <div id="footer" className="sectionPadding"/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
