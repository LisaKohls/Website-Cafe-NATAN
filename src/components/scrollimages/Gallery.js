// Gallery.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/scrollimages/Gallery.css';

const Gallery = ({ images, slidesToShow, infinite, centerMode, imageHeight, iconStyle }) => {


    const PrevArrow = ({ onClick, color }) => (
        <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
            <span style={iconStyle}>«</span>
        </div>
    );

    const NextArrow = ({ onClick, color }) => (
        <div className="custom-arrow custom-next-arrow" onClick={onClick}>
            <span style={iconStyle}>»</span>
        </div>
    );


    const settings = {
        dots: false,
        infinite: infinite,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        swipeToSlide: true,
        variableWidth: true,
        centerMode: centerMode,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div>
            <style>
                {`
          .custom-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 40px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            z-index: 1; 
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .custom-prev-arrow {
            left: 10px; 
            border-radius: 50%;
          }

          .custom-next-arrow {
            right: 10px;
            border-radius: 50%;
          }

          .custom-arrow:hover {
            color: ${"var(--secondaryColor)"};
          }
        `}
            </style>

            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Bild ${index + 1}`}
                            style={{ height: imageHeight }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;





