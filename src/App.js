import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from "./components/Gallery";
import Page from "./components/Page";
import BlackSection from "./components/sections/BlackSection";
import WhiteSection from "./components/sections/WhiteSection";




function App() {

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
            <div id='kontakt'/>
            <Footer/>
        </React.Fragment>
    );
}


export default App;
