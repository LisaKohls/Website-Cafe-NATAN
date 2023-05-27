import React, { useState } from 'react';
import "../Styles/Speisekarte.css"
import Img1 from '../Resources/barNatan1.jpg'
import Img2 from '../Resources/barNatan2.jpg'
import Img3 from '../Resources/outsideViewNatan.jpg'
import Img4 from '../Resources/interiorNatan.jpg'
import Img5 from '../Resources/foodCloseup1.jpg'


const PictureGallery = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const images = [
        { src: Img1, alt: 'Natan Bar', width: "600px", height:"400px"},
        { src: Img2, alt: 'Natan Bar', width: "600px", height:"400px" },
        { src: Img3, alt: 'Outside View Natan', width: "600px", height:"400px" },
        { src: Img4, alt: 'Interior Natan', width: "600px", height:"400px" },
        { src: Img5, alt: 'food closeup', width: "600px", height:"400px"},
    ];


    const handleScroll = (direction) => {
        if (direction === 'left') {
            setScrollPosition(scrollPosition - 0.5);
        } else if (direction === 'right') {
            setScrollPosition(scrollPosition + 0.5);
        }
    };

    return(props) ? (
        <div>
            <button className="scroll-buttons" onClick={() => handleScroll('left')}>←</button>
            <div className="scroll-container">
                <div className="menu" style={{transform: `translateX(-${scrollPosition * 100}%)`}}>
                    {images.map((image, index) => (
                        <img className="child" key={index} src={image.src} alt={image.alt} />
                    ))}
                    ))}
                </div>
            </div>
            <button className="scroll-buttons" onClick={() => handleScroll('right')}>→</button>
        </div>
    ): ""
};

export default PictureGallery;