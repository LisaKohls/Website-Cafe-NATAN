import React from 'react';
import "../../styles/pages/Error404.css";
import Logo from "../../resources/KreisLogo_.png"

const Error404Page = () => {
    return (
        <div className="errorPage">
            <img src={Logo} alt="Logo Natan" className="LogoNatan"/>
            <h1 className="errorHeading">404</h1>
            <p className="errorText"> Die angeforderte Seite wurde nicht gefunden. </p>
            <a href="/" className="errorPageLink">
                Zurück zur Homepage
            </a>
        </div>
    );
};

export default Error404Page;