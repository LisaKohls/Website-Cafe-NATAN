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

import Menu from "./Components/Menu";
import Page from "./Components/Page";
import Partner from './Resources/img.png'

function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <ImgCenter name='logo' image={natanLogo}/>
                <Gallery/>
                <Text text={ueberNatan}/>
                <Oeffnungszeiten inhalt={oeffnungszeiten}/>
                <h2>Du möchtest einen Tisch reservieren?</h2>
                <Button name="Reservierung"/>
                <h2>Unsere Speisekarte</h2>
                <Menu/>
                <h2>Events </h2>
            </Page>
            <Page className="blackText paddingPage">
                <h2>Produkte & Partner</h2>
                <ImgCenter name='partner' image={Partner}/>
                <Text text={volunteer}/>
                <Button name="Volunteer"/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
