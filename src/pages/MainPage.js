import React from 'react';
import '../index.css';
import StylePage from "./StylePage";
import BlackSection from "../components/mainsections/BlackSection";
import WhiteSection from "../components/mainsections/WhiteSection";
import HeadingSection from "../components/mainsections/HeadingSection";
import Navbar from "../components/layout/Navbar";
import GallerySection from "../components/mainsections/GallerySection";

function MainPage() {

    return (
        <React.Fragment>
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
