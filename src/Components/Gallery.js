import  React from "react";
import "../Styles/Gallery.css"
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

    return(
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    )

}

export default Gallery;


