import React, { useEffect, useRef, useState } from 'react';
import '../../styles/images/DynamicImages.css';

const DynamicImages = ({ images, styles }) => {
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

    return (
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    ref={imageRef}
                    src={image}
                    alt={`Bild ${index + 1}`}
                    className={`image ${isVisible ? 'fade-in' : ''}`}
                    style={styles}
                />
            ))}
        </div>
    );
};

export default DynamicImages;


