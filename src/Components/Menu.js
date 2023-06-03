import React, { useState } from 'react';
import "../Styles/Menu.css"
import img1 from "../Resources/menu/speisekarte1.png"
import img2 from "../Resources/menu/speisekarte2.png"
import img3 from "../Resources/menu/speisekarte3.png"
import img4 from "../Resources/menu/speisekarte4.png"
import img5 from "../Resources/menu/speisekarte5.png"

const Menu = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const menu = [
        { src: img1, alt: 'menu1'},
        { src: img2, alt: 'menu2'},
        { src: img3, alt: 'menu3'},
        { src: img4, alt: 'menu4'},
        { src: img5, alt: 'menu5'},
    ];

    const handleScroll = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? menu.length - 1 : prevIndex - 1));
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) => (prevIndex === menu.length - 1 ? 0 : prevIndex + 1));
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
                    <img className="child" src={menu[currentIndex].src} alt={menu[currentIndex].alt} />
                </div>
            </div>
            <button className="scroll-buttons" onClick={() => handleScroll('right')}>→</button>
        </div>
    ) : null;
};

export default Menu;
