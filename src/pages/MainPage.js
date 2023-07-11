import React from 'react';
import '../index.css';
import ScrollImages from "../components/scrollimages/ScrollImages";
import StylePage from "./StylePage";
import BlackSection from "../components/mainsections/BlackSection";
import WhiteSection from "../components/mainsections/WhiteSection";
import Img1 from '../resources/gallery/barNatan1.jpg';
import Img2 from '../resources/gallery/barNatan2.jpg';
import Img3 from '../resources/gallery/outsideViewNatan.jpg';
import Img4 from '../resources/gallery/interiorNatan.jpg';
import Img5 from '../resources/specialfoodstaging/breakfast1.jpg';
import HeadingSection from "../components/mainsections/HeadingSection";

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
                <HeadingSection/>
                <BlackSection/>
            </StylePage>
            <StylePage className="blackText paddingPage">
                <WhiteSection/>
            </StylePage>
            <StylePage>
                <ScrollImages images={images}/>
            </StylePage>
        </React.Fragment>
    );
}


export default MainPage;
