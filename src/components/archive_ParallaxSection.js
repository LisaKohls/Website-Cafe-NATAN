import React, {useEffect} from 'react';
import '../styles/interactiveelements/ParallaxSection.css';
import CoffeeMachine from '../resources/gallery/barNatan2.jpg';

const Archive_ParallaxSection = () => {
    useEffect(() => {
        const handleScroll = () => {
            const parallaxBg = document.querySelector('.parallax_bg');
            const scrollPosition = window.pageYOffset;

            parallaxBg.style.transform = `translateY(-${scrollPosition * 0.4}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="wrapper_outer">
            <div className="wrapper">
                <div className="parallax-section">
                    <div className="parallax_bg"/>
                    <div className="parallax_image">
                        <img src={CoffeeMachine} alt="Parallax"/>
                    </div>
                    <h2>Parallax Effect</h2>
                </div>
            </div>
        </div>
    );
};

export default Archive_ParallaxSection;


