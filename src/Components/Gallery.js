import  React from "react";
import "../Styles/Gallery.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from '../Resources/Bildschirmfoto 2023-04-28 um 12.31.48.png'
import Img2 from '../Resources/Bildschirmfoto 2023-04-28 um 12.32.05.png'
import Img3 from '../Resources/Bildschirmfoto 2023-04-28 um 12.32.24.png'
import Img4 from '../Resources/Bildschirmfoto 2023-04-28 um 12.32.37.png'

function Gallery() {
    const images = [
        { src: Img1, alt: 'Image 1' },
        { src: Img2, alt: 'Image 2' },
        { src: Img3, alt: 'Image 3' },
        { src: Img4, alt: 'Image 3' },
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


