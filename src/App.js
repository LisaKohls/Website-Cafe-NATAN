import React from 'react';


import './index.css';
import {oeffnungszeiten} from './Resources/textInhalte'
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Oeffnungszeiten from './Components/Oeffnungszeiten';
import Footer from './Components/Footer';
import Reservierung from './Components/Reservierung';
import {ueberNatan} from './Resources/textInhalte'
import Text from './Components/Text'
import {volunteer} from './Resources/textInhalte';
import ImgCenter from "./Components/ImgCenter";
import natanLogo from './Resources/Natanlogo.png';
import eventplaceholder from './Resources/EventPlaceholder.png'
import wheel from './Resources/Kreis.svg'
import Gallery from "./Components/Gallery";
import Maps from "./Components/Map"
import Menu from "./Components/Menu";
import PopUp from "./Components/PopUp";
import {useState} from 'react';
import Page from "./Components/Page";

function App() {

    return (

        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <ImgCenter name='Logo' image={natanLogo}/>
                <Gallery/>
                <Text text={ueberNatan}/>
                <Oeffnungszeiten inhalt={oeffnungszeiten}/>
                <h2>Du möchtest einen Tisch reservieren?</h2>
                <Button name="Reservierung"/>
                <h2>Unsere Speisekarte</h2>
                <Menu/>
                <h2>Events </h2>
                <ImgCenter name='Event' image={eventplaceholder}/>
            </Page>
            <Page style={{backgroundColor: "var(--textColor)"}} className="blackText aenderMeinNameTopPadding">
                <h2>Produkte & Partner</h2>
                <Text text={volunteer}/>
                <Button name="Volunteer"/>
                <Maps/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
