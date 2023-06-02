import React, { useState } from 'react';
import "../styles/PictureGallery.css"
import img1 from "../Resources/menu/speisekarte1.png"
import img2 from "../Resources/menu/speisekarte2.png"
import img3 from "../Resources/menu/speisekarte3.png"
import img4 from "../Resources/menu/speisekarte4.png"
import img5 from "../Resources/menu/speisekarte5.png"
import { FaTimes } from "react-icons/fa";

const Speisekarte = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const speisen = [
        { src: img1, alt: 'Natan Bar'},
        { src: img2, alt: 'Natan Bar'},
        { src: img3, alt: 'Outside View Natan'},
        { src: img4, alt: 'Interior Natan'},
        { src: img5, alt: 'food closeup'},
    ];

    const handleScroll = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? speisen.length - 1 : prevIndex - 1));
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) => (prevIndex === speisen.length - 1 ? 0 : prevIndex + 1));
        }
    };

    return (props.trigger) ? (
        <div className="popup">
            <button className="closeBtn" onClick={() => {
                props.setTrigger(false);
                document.body.style.overflow = "auto";
            }}>✕</button>

            <button className="scroll-buttons" onClick={() => handleScroll('left')}>←</button>
            <div className="scroll-container">
                <div className="menu">
                    <img className="child" src={speisen[currentIndex].src} alt={speisen[currentIndex].alt} />
                </div>
            </div>
            <button className="scroll-buttons" onClick={() => handleScroll('right')}>→</button>
        </div>
    ) : null;
};

export default Speisekarte;
