import React from 'react';
import './index.css';
import {oeffnungszeiten} from './Resources/textInhalte'
import Navbar from './Components/Navbar';
import Button from './Components/Button';

import Footer from './Components/Footer';
import {ueberNatan} from './Resources/textInhalte'
import Text from './Components/Text'
import {volunteer} from './Resources/textInhalte';
import ImgCenter from "./Components/ImgCenter";
import natanLogo from './Resources/Natanlogo.png';
import eventplaceholder from './Resources/EventPlaceholder.png'
import Gallery from "./Components/Gallery";
import Speisekarte from "./Components/Speisekarte";
import BoxWithText from "./Components/BoxWithText";
import Page from "./Components/Page";
import Partner from './Resources/img.png'
import PictureGallery from "./Components/PictureGallery";

function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <div id="ueberUns" className="sectionPadding"/>
                <h2 className='ueberschrift'>Über uns</h2>
                <Text text={ueberNatan} formatierung='blocksatz'/>
                <div className="container">
                    <BoxWithText title='Öffnungszeiten' >
                        <Text text='Öffnungszeiten' formatierung='linksbündig'/>
                        <Text text={oeffnungszeiten} formatierung='linksbündig'/>
                        <Button name="Reservierung"/>
                    </BoxWithText>

                </div>
                <div className="container">
                    <div>

                    </div>
                </div>
                <h2>Unsere Speisekarte</h2>
                <Button name="Speisekarte"/>
                <h2 id="events" className="sectionPadding">Events </h2>
                <Gallery/>
            </Page>
            <Page className="blackText paddingPage">
                <h2 id="produkteUndPartner" className="sectionPadding">Produkte & Partner</h2>
                <ImgCenter name='partner' image={Partner}/>
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
