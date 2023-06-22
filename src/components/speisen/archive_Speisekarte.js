import React, { useState } from 'react';
import "../../styles/archive_Speisekarte.css"
import img1 from "../../resources/menu/speisekarte1.png"
import img2 from "../../resources/menu/speisekarte2.png"
import img3 from "../../resources/menu/speisekarte3.png"
import img4 from "../../resources/menu/speisekarte4.png"
import img5 from "../../resources/menu/speisekarte5.png"
import { FaTimes } from "react-icons/fa";


const Speisekarte = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const speisen = [
        { src: img1, alt: 'Natan Bar', width: "400px", height:"600px"},
        { src: img2, alt: 'Natan Bar', width: "400px", height:"600px" },
        { src: img3, alt: 'Outside View Natan', width: "400px", height:"600px" },
        { src: img4, alt: 'Interior Natan', width: "400px", height:"600px" },
        { src: img5, alt: 'food closeup', width: "400px", height:"600px"},
    ];


    const handleScroll = (direction) => {
        if (direction === 'left') {
            setScrollPosition(scrollPosition - 1.5);
        } else if (direction === 'right') {
            setScrollPosition(scrollPosition + 1.5);
        }
    };

    return(props.trigger) ? (
        <div className="popup">
            <button className="closeBtn" onClick={() => {
                props.setTrigger(false);
                document.body.style.overflow = "auto";
            }}>
                <FaTimes />
            </button>

            <button className="scroll-buttons" onClick={() => handleScroll('left')}>←</button>
            <div className="scroll-container">
                <div className="menu" style={{transform: `translateX(-${scrollPosition * 100}%)`}}>
                    {speisen.map((image, index) => (
                            <img className="menuPage" key={index} src={image.src} alt={image.alt} />
                        ))}
                    ))}
                </div>
            </div>
                <button className="scroll-buttons" onClick={() => handleScroll('right')}>→</button>
        </div>
    ): ""
};

export default Speisekarte;