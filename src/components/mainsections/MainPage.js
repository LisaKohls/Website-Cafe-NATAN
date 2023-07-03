import React from 'react';
import '../../index.css';
import Gallery from "../Gallery";
import Page from "../Page";
import BlackSection from "./BlackSection";
import WhiteSection from "./WhiteSection";
import Img1 from '../../resources/gallery/barNatan1.jpg';
import Img2 from '../../resources/gallery/barNatan2.jpg';
import Img3 from '../../resources/gallery/outsideViewNatan.jpg';
import Img4 from '../../resources/gallery/interiorNatan.jpg';
import Img5 from '../../resources/specialFoodStaging/breakfast1.jpg';

function MainPage() {

    const images = [
        {src: Img1, alt: 'Natan Bar'},
        {src: Img2, alt: 'Natan Bar'},
        {src: Img3, alt: 'Outside View Natan'},
        {src: Img4, alt: 'Interior Natan'},
        {src: Img5, alt: 'food closeup'},
    ];

    return (
        <React.Fragment>
            <Page bottomWheel={true}>
                <BlackSection/>
            </Page>
            <Page className="blackText paddingPage">
                <WhiteSection/>
            </Page>
            <Page>
                <Gallery images={images}/>
            </Page>
        </React.Fragment>
    );
}


export default MainPage;
