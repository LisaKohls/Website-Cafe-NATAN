import React, { useEffect, useRef, useState } from 'react';
import '../../styles/images/DynamicImages.css';

const DynamicImages = ({ images, className, containerClass }) => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const handleIntersection = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    const isMobile = window.innerWidth <= 700;

    return (
        <div className={containerClass}>
            {images.map((image, index) => {
                if (isMobile && index > 0) {
                    // Zeige nur das erste Bild in der Mobilversion an
                    return null;
                }

                return (
                    <img
                        key={index}
                        ref={imageRef}
                        src={image}
                        alt={`Bild ${index + 1}`}
                        className={`image ${className} ${isVisible ? 'fade-in' : ''}`}
                    />
                );
            })}
        </div>
    );
};

export default DynamicImages;


