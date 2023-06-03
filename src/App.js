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
import NatanLogo from './Resources/logos/Natan_Logo_white.png';
import Gallery from "./Components/Gallery";
import BoxWithText from "./Components/BoxWithText";
import Page from "./Components/Page";
import Partner from './Resources/img.png'
import Interior from './Resources/interior.png'
import SpecialFood from "./Components/speisen/SpecialFood";
import Bar from './Resources/barNatan1_edited.jpg'
import BarOriginal from './Resources/barNatan1.jpg'
import CoffeeMachine from './Resources/barNatan2.jpg'




function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <ImgPosition name='logo' image={NatanLogo}/>
                <ImgPosition name='bar' image={Bar}/>
                <div id="ueberUns" className="sectionPadding"/>
                <h2 className='ueberuns'>NON-PROFIT CAFÉ | BAR</h2>
                <Text text={ueberNatan} formatierung='blocksatz'/>
                <div id="ueberUns" className="sectionPadding"/>
                <Text text='Open for you' formatierung='decoration'/>
                <div className="container">
                    <ImgPosition name='interiorNatan' image={BarOriginal}/>
                    <div>
                    <BoxWithText title='Öffnungszeiten' >
                        <Text text='Öffnungszeiten:' formatierung='linksbündig'/>
                        <Text text={oeffnungszeiten} formatierung='linksbündigZeilenabstand'/>
                    </BoxWithText>
                        <Button name="Reservierung" styleName='Reservierung'/>
                    </div>
                </div>
                <div id="ueberUns" className="sectionPadding"/>
                <h2 className='ueberuns'>VORBILD. IDEE. KONZEPT.
                    DAS NATAN</h2>
                <Text text={ueberNatanSecondPart} formatierung='blocksatz'/>
                <h2 className='ueberschrift'>Unsere Speisen & Getränke</h2>
                <SpecialFood/>
                <Button name='Speisekarte' styleName='Speisekarte'/>
                <div id="ueberUns" className="sectionPadding"/>
                <h2 className='ueberuns'>Warum NATAN?</h2>
                <Text text={originName} formatierung='blocksatz'/>
                <h2 id="events" className='ueberschrift'>Events </h2>
            </Page>
            <Page className="blackText paddingPage">
                <h2 id="produkteUndPartner" className="headingBlack">Produkte & Partner</h2>
                <ImgPosition name='partner' image={Partner}/>
                <Text text={partner} formatierung='blocksatzSchwarz'/>
                <div id="volunteers" className="sectionPadding"/>
                <h2 id="volunteer" className="ueberschrift">UNSER NATAN DREAM TEAM</h2>
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
            <Footer/>
        </React.Fragment>
    );
}


export default App;
