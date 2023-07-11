import React from 'react';
import '../../index.css';
import Gallery from "../scrollimages/Gallery";
import StylePage from "./StylePage";
import BlackSection from "../mainsections/BlackSection";
import WhiteSection from "../mainsections/WhiteSection";
import Img1 from '../../resources/gallery/barNatan1.jpg';
import Img2 from '../../resources/gallery/barNatan2.jpg';
import Img3 from '../../resources/gallery/outsideViewNatan.jpg';
import Img4 from '../../resources/gallery/interiorNatan.jpg';
import Img5 from '../../resources/specialfoodstaging/breakfast1.jpg';

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
            <StylePage bottomWheel={true}>
                <BlackSection/>
            </StylePage>
            <StylePage className="blackText paddingPage">
                <WhiteSection/>
            </StylePage>
            <StylePage>
                <Gallery images={images}/>
            </StylePage>
        </React.Fragment>
    );
}


export default MainPage;
