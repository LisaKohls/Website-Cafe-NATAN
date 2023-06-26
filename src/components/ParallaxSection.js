import React, { useEffect } from 'react';
import '../styles/ParallaxSection.css';
import CoffeeMachine from "../resources/gallery/barNatan2.jpg";
import {volunteer} from "../resources/textInhalte";

const ParallaxSection = ({ imageUrl, text }) => {
    useEffect(() => {
        const handleScroll = () => {
            const parallaxContainer = document.getElementById('parallax-container');
            const scrollPosition = window.scrollY;

            parallaxContainer.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="parallax-section">
            <div id="parallax-container" className="parallax-image">
                <img src={CoffeeMachine} alt="Parallax" />
            </div>
            <div className="parallax-text">{volunteer}</div>
        </section>
    );
};

export default ParallaxSection;

