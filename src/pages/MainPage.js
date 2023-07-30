import React from 'react';
import '../index.css';
import StylePage from "./StylePage";
import BlackSection from "../components/mainsections/BlackSection";
import WhiteSection from "../components/mainsections/WhiteSection";
import HeadingSection from "../components/mainsections/HeadingSection";
import Navbar from "../components/layout/Navbar";
import GallerySection from "../components/mainsections/GallerySection";
import { Helmet } from 'react-helmet-async';


//the main page separates different sections of the website
function MainPage() {

    return (
        <React.Fragment>
            <Helmet>
                <title>NATAN | CAFE AND BAR</title>
                <meta name="description" content="Entdecken Sie moderne, vegetarische Küche und leckere Drinks im
                Café NATAN – Genießen für den guten Zweck! Als Non-Profit-Bar fließt der gesamte Gewinn in humanitäre
                Projekte. Mit einer vielfältigen Auswahl an Drinks und köstlichen veganen und vegetarischen Speisen
                unterstützen wir weltweit Menschen in Not. Ein Team aus über 80 Volunteers ist mit Leidenschaft für
                unsere Gäste da. Alle zusammen für die gute Sache!" />
            </Helmet>
            <Navbar/>
            <StylePage bottomWheel={true}>
                <HeadingSection/>
                <BlackSection/>
            </StylePage>
            <StylePage className="blackText paddingPage">
                <WhiteSection/>
            </StylePage>
            <StylePage>
                <GallerySection/>
            </StylePage>
        </React.Fragment>
    );
}


export default MainPage;
