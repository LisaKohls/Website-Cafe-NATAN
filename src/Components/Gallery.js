import  React from "react";
import "../Styles/Gallery.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from '../Resources/barNatan1.jpg'
import Img2 from '../Resources/barNatan2.jpg'
import Img3 from '../Resources/outsideViewNatan.jpg'
import Img4 from '../Resources/interiorNatan.jpg'
import Img5 from '../Resources/foodCloseup1.jpg'

function Gallery() {
    const images = [
        { src: Img1, alt: 'Natan Bar' },
        { src: Img2, alt: 'Natan Bar' },
        { src: Img3, alt: 'Outside View Natan' },
        { src: Img4, alt: 'Interior Natan' },
        { src: Img5, alt: 'food closeup'},
    ];

    library.add(faAngleDoubleLeft);

    function scrollL(){
        let left = document.querySelector(".scroll-images");
        left.scrollBy(-350, 0)
    }

    function scrollR(){
        let left = document.querySelector(".scroll-images");
        left.scrollBy(350, 0)
    }

    return(
        <div className="galleryContainer">
        <div className="gallery">
            <button className="icon" onClick={scrollL}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
            <div className="scroll-images">
                {images.map((image, index) => (
                    <img className="child" key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
            <button className="icon" onClick={scrollR}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
        </div>
        </div>

    )

}

export default Gallery;


