import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import { oeffnungszeiten } from './Resources/textInhalte'
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Oeffnungszeiten from './Components/Oeffnungszeiten';
import Footer from "./Components/Footer";
import Text from "./Components/Text";

function App() {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

const btnÖffnungszeiten = ReactDOM.createRoot(document.querySelector('.btnÖffnungszeiten'));
btnÖffnungszeiten.render(<Button name="Öffnungszeiten" />);

const btnVolunteers = ReactDOM.createRoot(document.querySelector('.btnVolunteers'));
btnVolunteers.render(<Button name="Volunteer" />);

const btnReservierung = ReactDOM.createRoot(document.querySelector('.btnReservation'));
btnReservierung.render(<Button name="Reservierung" />);

const oeffnungszeitenBlock = ReactDOM.createRoot(document.querySelector('.oeffnungszeitenBlock'));
oeffnungszeitenBlock.render(<Oeffnungszeiten inhalt={oeffnungszeiten} />);

const footer = ReactDOM.createRoot(document.querySelector('.footer'));
footer.render(<Footer />);

/*const text = ReactDOM.createRoot(document.querySelector("text"));
text.render(<Text />);*/


export default App;
