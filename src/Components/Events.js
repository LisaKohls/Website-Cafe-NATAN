import React, { useRef, useState } from "react";
import "../Styles/Events.css";
import Img1 from "../Resources/events1.jpg";
import Img2 from "../Resources/events2.jpg";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import ImgPosition from "./ImgPosition";
import EventImg from "../Resources/NatanFotoAußen.png";
import BoxWithText from "./BoxWithText";
import Text from "./Text";
import {events} from "../Resources/textInhalte";
import Button from "./Button";


function Events() {
    const images = [
        { src: Img1, alt: "Event Poster" },
        { src: Img2, alt: "Event Poster" },
    ];

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
            scrollImages.scrollBy(-scrollAmount, 0);

            if (scrollImages.scrollLeft === 0) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
                scrollImages.scrollTo(scrollWidth - containerWidth, 0);
            }
        } else if (direction === "right") {
            const scrollAmount = Math.floor(containerWidth / 2);
            scrollImages.scrollBy(scrollAmount, 0);

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
        <div>
            <div
                className="galleryContainer"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <button className="iconLeft" onClick={() => handleScroll("left")}>
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
                <button className="iconRight" onClick={() => handleScroll("right")}>
                    →
                </button>
            </div>
            <div className="container">
                <ImgPosition name='interiorNatan' image={EventImg}/>
                <div>
                    <BoxWithText title='Öffnungszeiten' >
                        <Text text={events} formatierung='linksbündigZeilenabstand'/>
                    </BoxWithText>
                </div>

            </div>
        </div>




    );
}

export default Events;
