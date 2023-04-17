import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Button from './Components/Button';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
