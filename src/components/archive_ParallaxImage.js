import React, { useEffect, useRef } from 'react';
import '../styles/PrallaxImage.css'; // Import the CSS file for the component

function Archive_ParallaxImage({ name, image }) {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const scrollPosition = window.scrollY;

                const parallaxSpeed = 0.5; // Adjust the speed as per your requirement

                imageRef.current.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <img ref={imageRef} className={`parallax-image ${name}`} src={image} alt="Parallax Image" />
    );
}

export default Archive_ParallaxImage;

