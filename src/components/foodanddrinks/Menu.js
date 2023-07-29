import React, {useRef, useState} from 'react';
import '../../styles/foodanddrinks/Menu.css';
import img1 from '../../resources/menu/speisekarte1.png';
import img2 from '../../resources/menu/speisekarte2.png';
import img3 from '../../resources/menu/speisekarte3.png';
import img4 from '../../resources/menu/speisekarte4.png';
import img5 from '../../resources/menu/speisekarte5.png';

const Menu = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartXRef = useRef(null);

    const menu = [
        {src: img1, alt: 'menu1'},
        {src: img2, alt: 'menu2'},
        {src: img3, alt: 'menu3'},
        {src: img4, alt: 'menu4'},
        {src: img5, alt: 'menu5'},
    ];

    const handleScroll = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? menu.length - 1 : prevIndex - 1));
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) => (prevIndex === menu.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const handleTouchStart = (event) => {
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const touchStartX = touchStartXRef.current;
        const touchDistance = touchEndX - touchStartX;

        if (touchDistance > 50) {
            handleScroll('left');
        } else if (touchDistance < -50) {
            handleScroll('right');
        }
    };

    return props.trigger ? (
        <div className="menuPopup">
            <button
                className="closeBtn"
                onClick={() => {
                    props.setTrigger(false);
                    document.body.style.overflow = 'auto';
                }}
            >
                ✕
            </button>

            <button className="scroll-button-before" onClick={() => handleScroll('left')}>
                «
            </button>
            <div
                className="scroll-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="menu">
                    <img className="child" src={menu[currentIndex].src} alt={menu[currentIndex].alt}/>
                </div>
            </div>
            <button className="scroll-button-after" onClick={() => handleScroll('right')}>
                »
            </button>
        </div>
    ) : null;
};

export default Menu;

