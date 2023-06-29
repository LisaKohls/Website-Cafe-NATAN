import React from 'react';
import '../index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery from "./Gallery";
import Page from "./Page";
import BlackSection from "./sections/BlackSection";
import WhiteSection from "./sections/WhiteSection";


function MainPage() {

    return (
        <React.Fragment>
            <Navbar/>
            <Page bottomWheel={true}>
                <BlackSection />
            </Page>
            <Page className="blackText paddingPage">
                <WhiteSection />
            </Page>
            <Page>
                <Gallery />
            </Page>
            <Footer/>
        </React.Fragment>
    );
}


export default MainPage;
