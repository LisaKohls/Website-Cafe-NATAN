import React, {useRef, useState} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../styles/scrollimages/Gallery.css';


function Gallery({images}) {
    const scrollImagesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);

    library.add(faAngleDoubleLeft);

    const handleScroll = (direction) => {
        const scrollImages = scrollImagesRef.current;
        const containerWidth = scrollImages.offsetWidth;
        const scrollWidth = scrollImages.scrollWidth;

        if (direction === "left") {
            const scrollAmount = Math.floor(containerWidth / 2);
            scrollImages.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });

            if (scrollImages.scrollLeft === 0) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
                scrollImages.scrollTo(scrollWidth - containerWidth, 0);
            }
        } else if (direction === "right") {
            const scrollAmount = Math.floor(containerWidth / 2);
            scrollImages.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });

            if (scrollImages.scrollLeft + containerWidth >= scrollWidth) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                scrollImages.scrollTo(0, 0);
            }
        }
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const touchCurrentX = e.touches[0].clientX;
        const touchDistance = touchStartX - touchCurrentX;

        if (touchDistance > 0) {
            handleScroll("right");
        } else if (touchDistance < 0) {
            handleScroll("left");
        }
    };

    return (
        <div
            className="galleryContainer"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <button className="arrowIconLeft" onClick={() => handleScroll("left")}>
                ←
            </button>
            <div className="gallery">
                <div className="scroll-images" ref={scrollImagesRef}>
                    {images.map((image, index) => (
                        <img
                            className={`singlePicture ${
                                index === currentIndex ? "active" : ""
                            }`}
                            key={index}
                            src={image.src}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
            <button className="arrowIconRight" onClick={() => handleScroll("right")}>
                →
            </button>
        </div>
    );
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Gallery;
