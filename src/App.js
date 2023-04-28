import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import { oeffnungszeiten } from './Resources/textInhalte'
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
import Gallery from "./Components/Gallery";
import Maps from "./Components/Map"
import Menu from "./Components/Menu";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ImgCenter name='Logo'image ={natanLogo}/>

        <Gallery />
        <Text text={ueberNatan} />
        <Oeffnungszeiten inhalt={oeffnungszeiten} />

        <h2>Du möchtest einen Tisch reservieren?</h2>
        <Button name="Reservierung" />
        <Menu />
        <Maps />



    </React.Fragment>
  );
}


const btnVolunteers = ReactDOM.createRoot(document.querySelector('.btnVolunteers'));
btnVolunteers.render(<Button name="Volunteer" />);




const footer = ReactDOM.createRoot(document.querySelector('.footer'));
footer.render(<Footer />);

const reservierung = ReactDOM.createRoot(document.querySelector('.reservierung'));
reservierung.render(<Reservierung />);

const überNatan = ReactDOM.createRoot(document.querySelector('.überNatan'));
überNatan.render(<Text text={ueberNatan} />);

const volunteerText = ReactDOM.createRoot(document.querySelector('.volunteerText'));
volunteerText.render(<Text text={volunteer} />);


export default App;
