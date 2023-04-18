import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { oeffnungszeiten } from './Resources/textInhalte'
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Oeffnungszeiten from './Components/Oeffnungszeiten'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Navbar />
    </React.Fragment>
);

const btnÖffnungszeiten = ReactDOM.createRoot(document.querySelector('.btnÖffnungszeiten'));
btnÖffnungszeiten.render(<Button name="Öffnungszeiten" />);

const btnVolunteers = ReactDOM.createRoot(document.querySelector('.btnVolunteers'));
btnVolunteers.render(<Button name="Volunteer" />);

const btnReservierung = ReactDOM.createRoot(document.querySelector('.btnReservation'));
btnReservierung.render(<Button name="Reservierung" />);

const oeffnungszeitenBlock = ReactDOM.createRoot(document.querySelector('.oeffnungszeitenBlock'));
oeffnungszeitenBlock.render(<Oeffnungszeiten inhalt={oeffnungszeiten} />);

reportWebVitals();
