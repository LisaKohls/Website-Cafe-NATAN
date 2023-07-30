import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/scrollimages/Gallery.css';

const Gallery = ({ images, slidesToShow, slidesToScroll, infinite, centerMode, imageHeight, iconStyle }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const PrevArrow = ({ onClick}) => (
        <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
            <span style={iconStyle}>«</span>
        </div>
    );

    const NextArrow = ({ onClick}) => (
        <div className="custom-arrow custom-next-arrow" onClick={onClick}>
            <span style={iconStyle}>»</span>
        </div>
    );


    const settings = {
        dots: false,
        infinite: infinite,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
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
          .slick-slide {
            width: ${windowWidth}px;
            padding: 0 10px; /* Optional: füge Abstand zwischen den Bildern hinzu */
          }
        `}
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





